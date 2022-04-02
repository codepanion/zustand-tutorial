import * as React from "react";
import useStore from "../store/useStore";

const Users = () => {
  const users = useStore((state) => state.users);
  const fetchUsers = useStore((state) => state.fetchUsers);
  const addToFriends = useStore((state) => state.addToFriends);

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => addToFriends(user)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default Users;
