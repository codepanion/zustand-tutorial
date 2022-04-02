import * as React from "react";
import useStore from "../store/useStore";

const Friends = () => {
  const friends = useStore((state) => state.friends);
  const removeUserFromFriends = useStore(
    (state) => state.removeUserFromFriends
  );

  return (
    <div>
      <h5>Friends ({friends.length})</h5>
      <div>
        {friends.map((friend) => (
          <span key={friend.id}>
            {friend.name}
            <button onClick={() => removeUserFromFriends(friend.id)}>x</button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Friends;
