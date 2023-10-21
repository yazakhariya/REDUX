import { useTypesSelector } from "../hooks/useTypesSelector";
import { useEffect } from "react";
import { useAction } from "../hooks/useAction";

export default function UserList() {
  const { user, error, loading } = useTypesSelector((state) => state.userList);
  const { fetchUsers } = useAction();
  useEffect(() => {
    fetchUsers();
  }, []);

  const showUsers = (
    <>
      {error ? (
        <h2>{error}</h2>
      ) : loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {user.map((p) => (
            <span key={p.id}>
              {p.username}
              {" , "}
            </span>
          ))}
        </div>
      )}
    </>
  );

  return <div>{showUsers ? showUsers : null}</div>;
}
