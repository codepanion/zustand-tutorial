const createUserSlice = (set, get) => ({
  users: [],
  friends: [],
  fetchUsers: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    set({ users: await res.json() });
  },
  addToFriends: (user) => {
    set({
      friends: [...new Set([...get().friends, user])],
    });
  },
  removeUserFromFriends: (userId) => {
    set({
      friends: get().friends.filter((friend) => friend.id !== userId),
    });
  },
});

export default createUserSlice;
