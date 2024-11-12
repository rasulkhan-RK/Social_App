/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListData } from "../store/post-list-store";
import blankImg from "../assets/blank-img.png";

const Post = ({ post }) => {
  const { removeFromPost } = useContext(PostListData);
  let postImage = post.image || blankImg;
  let postReaction = post.reaction || 0;

  return (
    <div className="card post" style={{ width: "25rem" }}>
      <img src={postImage} className="card-img-top postImg" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-dark removeBtn"
            onClick={() => removeFromPost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-primary reaction" role="alert">
          This post has been reacted by {postReaction} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
