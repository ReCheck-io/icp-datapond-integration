import fetch from 'isomorphic-fetch';
import { HttpAgent } from '@dfinity/agent';

import { custodianIdentity } from './identity';
import { createActor as createPointsActor } from './declarations/points';
import { createActor as createStorageActor } from './declarations/storage';
import { createActor as createTracingActor } from './declarations/tracing';

import { CANISTER_ID_STORAGE, CANISTER_ID_POINTS, CANISTER_ID_TRACING, isProdICP } from '../config';

const host = isProdICP ? 'https://icp-api.io' : 'http://127.0.0.1:4943';

const agent = new HttpAgent({
  identity: custodianIdentity,
  host,
  fetch,
});

export const tracing = createTracingActor(CANISTER_ID_TRACING, { agent });
export const storage = createStorageActor(CANISTER_ID_STORAGE, { agent });
export const pointsCanister = createPointsActor(CANISTER_ID_POINTS, { agent });
