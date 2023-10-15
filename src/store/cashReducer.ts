import { ADD_NUM, REM_NUM } from "./consts";

const defaultState = {
  cash: 3,
};

export const cashReducer = (
  state = defaultState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case ADD_NUM:
      return { ...state, cash: state.cash + action.payload };

    case REM_NUM:
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

export const addNumAction = (payload: unknown) => ({
  type: ADD_NUM,
  payload,
});
export const remNumAction = (payload: unknown) => ({
  type: REM_NUM,
  payload,
});
