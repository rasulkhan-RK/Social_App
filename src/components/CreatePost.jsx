import { useContext, useRef } from "react";
import { PostListData } from "../store/post-list-store";

const CreatePost = () => {
  const { addToPost } = useContext(PostListData);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postImageElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postImgFile = postImageElement.current.files[0];
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    let postImgUrl = "";
    if (postImgFile) {
      postImgUrl = URL.createObjectURL(postImgFile);
    }
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
    postImageElement.current.value = "";

    addToPost(userId, postTitle, postBody, postImgUrl, reaction, tags);
  };

  return (
    <form className="create_post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          required
          className="form-control"
          id="userId"
          placeholder="Enter your userid here..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          required
          className="form-control"
          id="title"
          placeholder="How are you feeling today...."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          required
          rows="4"
          className="form-control input_body"
          id="body"
          placeholder="Enter post content"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Image (optional)
        </label>
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="image"
            ref={postImageElement}
          />
          <label className="input-group-text" htmlFor="image">
            Upload
          </label>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Enter Reactions
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="reaction"
          placeholder="How many peoples react to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtag here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
