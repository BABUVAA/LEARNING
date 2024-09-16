import { useContext } from "react";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import { StateContext } from "../store/StateContext";
import { PostItemsProvider } from "../store/PostListContext";
const Main = () => {
  const { state } = useContext(StateContext);

  return (
    <PostItemsProvider>
      {state === "Home" ? <PostList /> : <CreatePost />}
    </PostItemsProvider>
  );
};
export default Main;
