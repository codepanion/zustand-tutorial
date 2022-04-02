import * as React from "react";
import useStore from "../useStore";

const useFriendsPostsReactor = () => {
  const friends = useStore((state) => state.friends);
  const posts = useStore((state) => state.posts);
  const postsFromFriends = useStore((state) => state.postsFromFriends);
  const filterPostsByFriends = useStore((state) => state.filterPostsByFriends);

  React.useEffect(() => {
    filterPostsByFriends();
  }, [filterPostsByFriends, friends, posts]);

  return postsFromFriends;
};

export default useFriendsPostsReactor;
