/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";

export const PostListData = createContext({
  postList: [],
  addToPost: () => {},
  removeFromPost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = [...currPostList];
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispacthPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_DATA
  );

  const addToPost = (
    userId,
    postTitle,
    postBody,
    postImgUrl,
    reaction,
    tags
  ) => {
    dispacthPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userId: userId,
        reaction: reaction,
        tags: tags,
        image: postImgUrl,
      },
    });
  };

  const removeFromPost = (postId) => {
    dispacthPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListData.Provider value={{ postList, addToPost, removeFromPost }}>
      {children}
    </PostListData.Provider>
  );
};

const DEFAULT_POST_DATA = [
  {
    id: "1",
    title: "Won The Game",
    image:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    body: "The Game is a mind game in which the objective is to avoid thinking about The Game itself. Thinking about The Game constitutes a loss, which must be announced each time it occurs",
    userId: "user-7",
    reaction: 153,
    tags: ["Wow", "Congrats", "Nice"],
  },

  {
    id: "2",
    title: "i am going to college",
    body: "Tell them your hopes and wishes for their college years-- why you want them to have this experience in the first place",
    userId: "user-4",
    reaction: 1,
    tags: ["Great", "Man Lagake Pad", "Fail Mat Hona"],
  },
];

export default PostListProvider;
