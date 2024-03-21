import "./post.css";
import { Users } from "../../dummyData";

const Post = (props) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === props.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === props.userId)[0].username}
            </span>
            <span className="postDate">{props.date} min ago</span>
          </div>
          <div className="postTopRight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 128 512"
            >
              <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
            </svg>
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{props.desc}</span>
          <img className="postImage" src={props.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">{props.like} people likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{props.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
