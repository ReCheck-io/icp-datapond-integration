export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkCanisterFreeSpace' : IDL.Func([IDL.Nat], [IDL.Bool], []),
    'getFile' : IDL.Func(
        [IDL.Text, IDL.Nat],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'hasNext' : IDL.Bool,
              'chunk' : IDL.Vec(IDL.Nat8),
              'name' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'NotKnown' : IDL.Text,
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'UploadError' : IDL.Text,
              'Unauthorized' : IDL.Text,
              'Conflict' : IDL.Text,
            }),
          }),
        ],
        ['query'],
      ),
    'initializeCanister' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'createdAt' : IDL.Nat64,
            }),
            'Err' : IDL.Variant({
              'NotKnown' : IDL.Text,
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'UploadError' : IDL.Text,
              'Unauthorized' : IDL.Text,
              'Conflict' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'uploadFile' : IDL.Func(
        [
          IDL.Record({
            'id' : IDL.Text,
            'content' : IDL.Vec(IDL.Nat8),
            'name' : IDL.Text,
            'size' : IDL.Nat,
          }),
          IDL.Text,
        ],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'name' : IDL.Text,
              'canisterId' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'NotKnown' : IDL.Text,
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'UploadError' : IDL.Text,
              'Unauthorized' : IDL.Text,
              'Conflict' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
