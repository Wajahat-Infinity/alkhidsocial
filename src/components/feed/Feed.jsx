import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
const Feed = () => {
  return (
    <div className="feedbar">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post
            id={p.id}
            desc={p.desc}
            photo={p.photo}
            date={p.date}
            userId={p.userId}
            like={p.like}
            comment={p.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
