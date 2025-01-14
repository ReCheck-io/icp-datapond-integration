import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'addPoints' : ActorMethod<
    [Principal, bigint, string],
    {
        'Ok' : {
          'id' : Principal,
          'availablePoints' : bigint,
          'createdAt' : bigint,
          'totalRedeemed' : bigint,
          'updatedAt' : bigint,
          'totalPoints' : bigint,
          'transactions' : Array<
            {
              'id' : string,
              'status' : string,
              'transactionType' : string,
              'createdAt' : bigint,
              'description' : string,
              'updatedAt' : bigint,
              'userPrincipal' : Principal,
              'address' : string,
              'amount' : bigint,
            }
          >,
        }
      } |
      {
        'Err' : { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'Unauthorized' : string } |
          { 'Conflict' : string }
      }
  >,
  'getPendingRedeemTransactions' : ActorMethod<
    [],
    {
        'Ok' : Array<
          {
            'id' : string,
            'status' : string,
            'transactionType' : string,
            'createdAt' : bigint,
            'description' : string,
            'updatedAt' : bigint,
            'userPrincipal' : Principal,
            'address' : string,
            'amount' : bigint,
          }
        >
      } |
      {
        'Err' : { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'Unauthorized' : string } |
          { 'Conflict' : string }
      }
  >,
  'getPlatformAnalytics' : ActorMethod<
    [],
    {
        'Ok' : {
          'availablePoints' : bigint,
          'redeemedPoints' : bigint,
          'totalPoints' : bigint,
          'totalTransactions' : bigint,
        }
      } |
      {
        'Err' : { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'Unauthorized' : string } |
          { 'Conflict' : string }
      }
  >,
  'getUser' : ActorMethod<
    [Principal],
    {
        'Ok' : {
          'id' : Principal,
          'availablePoints' : bigint,
          'createdAt' : bigint,
          'totalRedeemed' : bigint,
          'updatedAt' : bigint,
          'totalPoints' : bigint,
          'transactions' : Array<
            {
              'id' : string,
              'status' : string,
              'transactionType' : string,
              'createdAt' : bigint,
              'description' : string,
              'updatedAt' : bigint,
              'userPrincipal' : Principal,
              'address' : string,
              'amount' : bigint,
            }
          >,
        }
      } |
      {
        'Err' : { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'Unauthorized' : string } |
          { 'Conflict' : string }
      }
  >,
  'getUserTransactions' : ActorMethod<
    [Principal],
    {
        'Ok' : Array<
          {
            'id' : string,
            'status' : string,
            'transactionType' : string,
            'createdAt' : bigint,
            'description' : string,
            'updatedAt' : bigint,
            'userPrincipal' : Principal,
            'address' : string,
            'amount' : bigint,
          }
        >
      } |
      {
        'Err' : { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'Unauthorized' : string } |
          { 'Conflict' : string }
      }
  >,
  'initializeCanister' : ActorMethod<
    [Principal],
    { 'Ok' : { 'id' : Principal, 'createdAt' : bigint } } |
      {
        'Err' : { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'Unauthorized' : string } |
          { 'Conflict' : string }
      }
  >,
  'initializeUser' : ActorMethod<
    [Principal],
    {
        'Ok' : {
          'id' : Principal,
          'availablePoints' : bigint,
          'createdAt' : bigint,
          'totalRedeemed' : bigint,
          'updatedAt' : bigint,
          'totalPoints' : bigint,
          'transactions' : Array<
            {
              'id' : string,
              'status' : string,
              'transactionType' : string,
              'createdAt' : bigint,
              'description' : string,
              'updatedAt' : bigint,
              'userPrincipal' : Principal,
              'address' : string,
              'amount' : bigint,
            }
          >,
        }
      } |
      {
        'Err' : { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'Unauthorized' : string } |
          { 'Conflict' : string }
      }
  >,
  'requestRedeem' : ActorMethod<
    [Principal, bigint, string, string],
    {
        'Ok' : {
          'id' : string,
          'status' : string,
          'transactionType' : string,
          'createdAt' : bigint,
          'description' : string,
          'updatedAt' : bigint,
          'userPrincipal' : Principal,
          'address' : string,
          'amount' : bigint,
        }
      } |
      {
        'Err' : { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'Unauthorized' : string } |
          { 'Conflict' : string }
      }
  >,
  'updateRedeemStatus' : ActorMethod<
    [Principal, string, string],
    {
        'Ok' : {
          'id' : string,
          'status' : string,
          'transactionType' : string,
          'createdAt' : bigint,
          'description' : string,
          'updatedAt' : bigint,
          'userPrincipal' : Principal,
          'address' : string,
          'amount' : bigint,
        }
      } |
      {
        'Err' : { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'Unauthorized' : string } |
          { 'Conflict' : string }
      }
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
