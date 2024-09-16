import { useContext } from "react";
import { PostItemsContext } from "../store/PostListContext";
import Card from "./Card";

const PostList = () => {
  const { postList } = useContext(PostItemsContext);
  return (
    <>
      {postList.map((postItem) => (
        <Card
          key={postItem.postId}
          postId={postItem.postId}
          userId={postItem.userId}
          media={postItem.media}
          caption={postItem.caption}
          likes={postItem.likes}
          comments={postItem.comments}
        />
      ))}
    </>
  );
};

export default PostList;
