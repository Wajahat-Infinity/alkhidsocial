import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birtdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdaytext">
            <b>Ali</b> and<b> 2 other friend</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online
              id={u.id}
              profilePicture={u.profilePicture}
              name={u.username}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
