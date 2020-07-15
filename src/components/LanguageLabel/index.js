import React from "react";
import {getLangBgColor} from "../../utils/helper";
import s from "./index.module.scss";

const LanguageLabel = ({value}) => {
    const dotBgColor = getLangBgColor(value);
    return (
        <div className={"d_flex align_items_center"}>
            <div style={{backgroundColor: dotBgColor}} className={s.styledDot}/>
            {value}
        </div>
    )
};

export default LanguageLabel;
