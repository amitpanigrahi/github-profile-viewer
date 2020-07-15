import React from "react";
import s from "./styles.module.scss";

const CTAButton = ({text = "Follow", styleClass = "my_10"}) => {
  return (
      <div className={`${s.followButton} ${styleClass}`}>
          {text}
      </div>
  )
};

export default CTAButton;
