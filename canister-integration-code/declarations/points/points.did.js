export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addPoints' : IDL.Func(
        [IDL.Principal, IDL.Nat, IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'availablePoints' : IDL.Nat,
              'createdAt' : IDL.Nat64,
              'totalRedeemed' : IDL.Nat,
              'updatedAt' : IDL.Nat64,
              'totalPoints' : IDL.Nat,
              'transactions' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Text,
                  'status' : IDL.Text,
                  'transactionType' : IDL.Text,
                  'createdAt' : IDL.Nat64,
                  'description' : IDL.Text,
                  'updatedAt' : IDL.Nat64,
                  'userPrincipal' : IDL.Principal,
                  'address' : IDL.Text,
                  'amount' : IDL.Nat,
                })
              ),
            }),
            'Err' : IDL.Variant({
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'Unauthorized' : IDL.Text,
              'Conflict' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'getPendingRedeemTransactions' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Vec(
              IDL.Record({
                'id' : IDL.Text,
                'status' : IDL.Text,
                'transactionType' : IDL.Text,
                'createdAt' : IDL.Nat64,
                'description' : IDL.Text,
                'updatedAt' : IDL.Nat64,
                'userPrincipal' : IDL.Principal,
                'address' : IDL.Text,
                'amount' : IDL.Nat,
              })
            ),
            'Err' : IDL.Variant({
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'Unauthorized' : IDL.Text,
              'Conflict' : IDL.Text,
            }),
          }),
        ],
        ['query'],
      ),
    'getPlatformAnalytics' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'availablePoints' : IDL.Nat64,
              'redeemedPoints' : IDL.Nat64,
              'totalPoints' : IDL.Nat64,
              'totalTransactions' : IDL.Nat64,
            }),
            'Err' : IDL.Variant({
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'Unauthorized' : IDL.Text,
              'Conflict' : IDL.Text,
            }),
          }),
        ],
        ['query'],
      ),
    'getUser' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'availablePoints' : IDL.Nat,
              'createdAt' : IDL.Nat64,
              'totalRedeemed' : IDL.Nat,
              'updatedAt' : IDL.Nat64,
              'totalPoints' : IDL.Nat,
              'transactions' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Text,
                  'status' : IDL.Text,
                  'transactionType' : IDL.Text,
                  'createdAt' : IDL.Nat64,
                  'description' : IDL.Text,
                  'updatedAt' : IDL.Nat64,
                  'userPrincipal' : IDL.Principal,
                  'address' : IDL.Text,
                  'amount' : IDL.Nat,
                })
              ),
            }),
            'Err' : IDL.Variant({
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'Unauthorized' : IDL.Text,
              'Conflict' : IDL.Text,
            }),
          }),
        ],
        ['query'],
      ),
    'getUserTransactions' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Variant({
            'Ok' : IDL.Vec(
              IDL.Record({
                'id' : IDL.Text,
                'status' : IDL.Text,
                'transactionType' : IDL.Text,
                'createdAt' : IDL.Nat64,
                'description' : IDL.Text,
                'updatedAt' : IDL.Nat64,
                'userPrincipal' : IDL.Principal,
                'address' : IDL.Text,
                'amount' : IDL.Nat,
              })
            ),
            'Err' : IDL.Variant({
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
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
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'Unauthorized' : IDL.Text,
              'Conflict' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'initializeUser' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'availablePoints' : IDL.Nat,
              'createdAt' : IDL.Nat64,
              'totalRedeemed' : IDL.Nat,
              'updatedAt' : IDL.Nat64,
              'totalPoints' : IDL.Nat,
              'transactions' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Text,
                  'status' : IDL.Text,
                  'transactionType' : IDL.Text,
                  'createdAt' : IDL.Nat64,
                  'description' : IDL.Text,
                  'updatedAt' : IDL.Nat64,
                  'userPrincipal' : IDL.Principal,
                  'address' : IDL.Text,
                  'amount' : IDL.Nat,
                })
              ),
            }),
            'Err' : IDL.Variant({
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'Unauthorized' : IDL.Text,
              'Conflict' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'requestRedeem' : IDL.Func(
        [IDL.Principal, IDL.Nat, IDL.Text, IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'status' : IDL.Text,
              'transactionType' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'description' : IDL.Text,
              'updatedAt' : IDL.Nat64,
              'userPrincipal' : IDL.Principal,
              'address' : IDL.Text,
              'amount' : IDL.Nat,
            }),
            'Err' : IDL.Variant({
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'Unauthorized' : IDL.Text,
              'Conflict' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'updateRedeemStatus' : IDL.Func(
        [IDL.Principal, IDL.Text, IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'status' : IDL.Text,
              'transactionType' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'description' : IDL.Text,
              'updatedAt' : IDL.Nat64,
              'userPrincipal' : IDL.Principal,
              'address' : IDL.Text,
              'amount' : IDL.Nat,
            }),
            'Err' : IDL.Variant({
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
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
