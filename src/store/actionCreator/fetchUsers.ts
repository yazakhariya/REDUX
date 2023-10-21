import { Dispatch } from "redux";
import axios from "axios";
import { UserAction } from "../userReducerTypes";
import { UserActionTypes } from "../enum";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.FETCH_USERS,
      });

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: UserActionTypes.FETCH_USERS_ONSUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Error",
      });
    }
  };
};
