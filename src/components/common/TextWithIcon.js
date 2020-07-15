import React from "react";

const TextWithIcon = ({externalClass, icon, text}) => {
    return (
        text ?
            <div className={`d_flex align_items_center ${externalClass}`}>
                {icon ? icon : null}<div className={"text_666 ml_5"}>{text ? text : null}</div>
            </div> : null
    )
};
export default TextWithIcon;
