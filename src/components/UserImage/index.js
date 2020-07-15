import React from "react";
import s from "./index.module.scss";

const UserImage = ({img}) => {
  return (
      <div className={s.userImageWrapper}>
          <img alt={"User"} src={img}/>
      </div>
  )
};

export default UserImage;
