import create from "zustand";
import createPostSlice from "./slices/createPostSlice";
import createUserSlice from "./slices/createUserSlice";

const useStore = create((set, get) => ({
  ...createUserSlice(set, get),
  ...createPostSlice(set, get),
}));

export default useStore;
