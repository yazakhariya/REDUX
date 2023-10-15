import { addUserJsonAction } from "../store/userReducer";

export const UsersJson = () => {
  return function (
    dispatch: (arg0: { type: string; payload: unknown }) => unknown
  ) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(addUserJsonAction(json)));
  };
};
