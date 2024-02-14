## Overview

This folder contains sample code for the integration and usage functions of storage and tracing canisters.

## Files and Structure

- **`./declarations`**: Contains generated declarations for Storage and Tracing canisters.
- **`identity.js`**: Generates the identity of the service based on a hex value provided in the `identity.secret` file located in the project's root.
- **`index.js`**: Creates actors that will be used later to invoke methods of the canisters.
- **`usage.js`**: Handles the code for uploading files to the canister, retrieving files from the canister, and includes a sample demonstrating how to call the method to add a log in the tracing canister.
