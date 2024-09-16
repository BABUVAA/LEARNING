import { createContext, useState } from "react";

export const PostItemsContext = createContext();
export const PostItemsProvider = ({ children }) => {
  const [postList, setPostList] = useState([
    {
      postId: "1",
      userId: "_babumoshaii",
      media: "/react.svg",
      caption: "React Project",
      likes: "50",
      comments: "60",
    },
    {
      postId: "2",
      userId: "_babumoshaii",
      media: "/vite.svg",
      caption: "Vite Project",
      likes: "56",
      comments: "48",
    },
    {
      postId: "3",
      userId: "_babumoshaii",
      media: "/PubgBackground.jpg",
      caption: "Pubg",
      likes: "102",
      comments: "88",
    },
  ]);

  // Function to add a new post
  const addPost = (newPost) => {
    setPostList((prevPosts) => [newPost, ...prevPosts]);
  };

  // Function to add a delete post
  const deletePost = (delPostId) => {
    setPostList((prevPosts) => prevPosts.filter((post) => post.postId !== delPostId));
  };

  return (
    <PostItemsContext.Provider value={{ postList, setPostList, addPost,deletePost }}>
      {children}
    </PostItemsContext.Provider>
  );
};
