import React from "react";
import toggle from "../../hoc/toggle";
const Profile = props => {
  const { name, profileImageUrl } = props.user;
  return (
    <li className="nav-item">
      <a href={"/u/" + props.user.seq} className="nav-link">
        {profileImageUrl ? <img src={profileImageUrl} alt="" /> : false} {name}
      </a>
    </li>
  );
};

export default toggle(Profile);
