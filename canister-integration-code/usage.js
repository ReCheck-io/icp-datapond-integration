// This function is run by queue
export async function handleFileUpload(job) {
  try {
    const { userId, id, name, size, path, mimetype, organizationId } = job.data.data;

    if (!path) {
      throw new Error('Missing path in file data');
    }

    const isExistsLocally = await checkFileExists(path);
    if (!isExistsLocally) {
      throw new Error(`File not found locally: ${path}`);
    }

    const file = await fs.promises.readFile(path);
    const fileBlob = new Blob(file, { type: mimetype });
    const fileUintArray = new Uint8Array(file);

    if (!fileBlob || !fileUintArray) {
      throw new Error(`Could not read the file: ${path}`);
    }

    // Check if the file size is larger than 1.5MB
    const maxChunkSize = 1.5 * 1024 * 1024; // 1.5MB

    const filePayload = {
      id,
      name,
      size,
      content: fileUintArray,
    };

    const hasSpace = await storageActor.checkCanisterFreeSpace(filePayload.size);

    if (!hasSpace) {
      console.log('NO SUFFICIENT SPACE IN THE STORAGE CANISTER!');
      return;
    }

    let result;

    if (fileBlob.size > maxChunkSize) {
      let offset = 0;
      while (offset < size) {
        const chunk = fileUintArray.slice(offset, offset + maxChunkSize);
        filePayload.content = chunk;

        // eslint-disable-next-line no-await-in-loop
        result = await storageActor.uploadFile(filePayload, userId);
        // Update offset for the next chunk
        offset += maxChunkSize;
      }
    } else {
      result = await storageActor.uploadFile(filePayload, userId);
    }

    if (result.Ok) {
      await File.updateOne(
        { organization: organizationId, fileName: name, fileLocation: path },
        {
          canisterLocation: JSON.stringify(result.Ok),
        }
      );

      const { _id: originalId } = await File.findOne({
        organization: organizationId,
        fileName: name,
        fileLocation: path,
      }).select({ _id: 1 });

      try {
        const logResult = await addTracingLog(userId, 'uploaded', originalId.toString(), name);

        const serializedLogResult = serializeBigInt(logResult);

        console.log(`[TRACING_CANISTER_ADD_LOG_RESULT]: ${JSON.stringify(serializedLogResult, null, 4)}`);
      } catch (error) {
        console.log('handleFileUpload - tracing.addLog', error);
      }

      console.log(`File upload successful for user ${userId}, fileId: ${id}`);
    }
  } catch (error) {
    console.log(error);
    console.error(`File upload failed: ${error.message}`);
  }
}

// This function should be run when there is need to read the file from Storage Canister
export async function getAndConcatenateFile(fileId) {
  try {
    let chunkNumber = 0;
    let fileData = {};

    const chunks = [];
    while (true) {
      // eslint-disable-next-line no-await-in-loop
      const fileResponse = await storageActor.getFile(fileId, chunkNumber);

      if (!fileResponse.Ok) {
        console.error('Failed to retrieve file chunk.');
        return;
      }

      chunks.push(fileResponse.Ok.chunk);

      if (!fileResponse.Ok.hasNext) {
        fileData = {
          id: fileResponse.Ok.id,
          name: fileResponse.Ok.name,
        };
        break;
      }

      chunkNumber++;
    }

    const concatenatedFile = new Uint8Array(chunks.reduce((sum, chunk) => sum + chunk.length, 0));
    let offset = 0;

    // eslint-disable-next-line no-restricted-syntax
    for (const chunk of chunks) {
      concatenatedFile.set(chunk, offset);
      offset += chunk.length;
    }

    console.log(`File with id=${fileId} was retrieved and concatenated successfully!`);

    return uint8ToBase64(concatenatedFile);
  } catch (error) {
    console.error('Error saving concatenated file:', error);
  }
}


// Tracing canister
// =============================================================================

// Add log to tracing canister
const addLogResult = await tracing.addLog(userId, 'consumed', fileId, fileName);

// Get tracing logs by user and data Id
const getLogsResult = await tracing.getLogsByUserAndDataId(userId, fileId)


// Points Canister
// =============================================================================

// Init user in the points canister - create record for user
const initResult = await pointsCanister.initializeUser(principal);

// Call points caniter to add points to user
const addResult = await pointsCanister.addPoints(
  userPrincipal,
  amount,
  `Monthly point earning for ${file.fileName}`
);

// Get user by Principal
const userResult = await pointsCanister.getUser(userPrincipal);

// Get all pending transactions
const txResult = await pointsCanister.getPendingRedeemTransactions();

// Request redeem
const requestRedeem = await pointsCanister.requestRedeem(
  userPrincipal,
  amount,
  walletAddress,
  description || ''
);

// Update redeem status
const updateRedeemResult = await pointsCanister.updateRedeemStatus(userPrincipal, transactionId, status);