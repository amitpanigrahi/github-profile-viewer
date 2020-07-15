import React from "react";
import s from "./styles.module.scss";

const NoDataFound = ({text = "NO DATA FOUND"}) => {
  return (
      <div className={s.noData}>
          {text}
      </div>
  )
};

export default NoDataFound;
