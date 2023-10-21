import { UserActionTypes } from "./enum";

interface FetchUsersPayload {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersOnsuccessPayload {
  type: UserActionTypes.FETCH_USERS_ONSUCCESS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any[];
}

interface FetchUsersErrorPayload {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUsersPayload
  | FetchUsersOnsuccessPayload
  | FetchUsersErrorPayload;
