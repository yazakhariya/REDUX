import { ADD_USER, ADD_USER_JSON, REM_USER } from "./consts";

import { UserActionTypes } from "./enum";
import { UserAction } from "./userReducerTypes";

interface UserState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any[];
  loading: boolean;
  error: null | string;
}

const defaultState: UserState = {
  user: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = defaultState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case ADD_USER_JSON:
      return { ...state, user: [...state.user, ...action.payload] };
    case ADD_USER:
      return { ...state, user: [...state.user, action.payload] };
    case REM_USER:
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        user: state.user.filter((p: any) => p.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addUserAction = (payload: unknown) => ({
  type: ADD_USER,
  payload,
});
export const remUserAction = (payload: unknown) => ({
  type: REM_USER,
  payload,
});

export const addUserJsonAction = (payload: unknown) => ({
  type: ADD_USER_JSON,
  payload,
});

export const newUserReducer = (
  state = defaultState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { ...state, loading: true };

    case UserActionTypes.FETCH_USERS_ONSUCCESS:
      return { ...state, loading: false, user: action.payload };

    case UserActionTypes.FETCH_USERS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
