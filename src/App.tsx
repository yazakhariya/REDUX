import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, remUserAction } from "./store/userReducer";
import { State, StateUser, User } from "./types";
import { addNumAction, remNumAction } from "./store/cashReducer";
import { UsersJson } from "./asyncAction/async";
import { AppDispatch } from "./store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const cash = useSelector((state: State) => state.cash.cash);
  const user = useSelector((state: StateUser) => state.user.user);

  function addNum(cash: number) {
    dispatch(addNumAction(cash));
  }

  function remNum(cash: number) {
    dispatch(remNumAction(cash));
  }

  function addUser(name: string | null) {
    const user: User = {
      name,
      id: Date.now(),
    };
    dispatch(addUserAction(user));
  }

  function remUser(user: User) {
    dispatch(remUserAction(user.id));
  }

  return (
    <>
      <h1>Redux</h1>
      <div className="card">
        <button onClick={() => addNum(Number(prompt()))}>++</button>
        <p>{cash}</p>
        <button onClick={() => remNum(Number(prompt()))}>--</button>
        <br />
        <button onClick={() => addUser(prompt())}>++</button>
        {user.length > 0 ? (
          user.map((p: User) => (
            <div onClick={() => remUser(p)} key={p.id}>
              {p.name}
            </div>
          ))
        ) : (
          <p>'No people'</p>
        )}
        <button onClick={() => dispatch(UsersJson())}>More users</button>
      </div>
    </>
  );
}

export default App;
