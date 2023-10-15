import { ADD_USER, ADD_USER_JSON, REM_USER } from "./consts";
const defaultState = {
  user: [],
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
