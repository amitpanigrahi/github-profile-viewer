import React, {useEffect, useState} from "react";
import s from "./index.module.scss"
import RenderIf from "../../HOC/RenderIf";

const Dropdown = ({value, label = "Amit", dataList = [], handleChange}) => {
    const [showDropDown, setView] = useState(true);
    useEffect(() => {
        setView(false);
    }, [value]);
    return (
        <>
            <div className={s.wrapper}>
                {dataList.length ?
                    <div className={s.box} onClick={() => setView(!showDropDown)}>
                        <div className={s.selectBox}>{label}: <span className={"font_bold ml_5"}>{value ? value : "All"}</span></div>
                        <div className={s.selectArrow}/>
                    </div>
                    :
                    <div className={s.box}>
                        <div className={s.selectBox}>{label}: <span className={"font_bold ml_5"}>{value}</span></div>
                    </div>}
                <RenderIf cnd={showDropDown && dataList.length}>
                    <div className={s.dropDown}>
                        <div className={`${s.dropDownList} font_bold`}>Select {label}</div>
                        {value ?
                            <div className={s.dropDownList} onClick={() => handleChange("")}>All</div> : null}
                        {dataList.map((val, i) => <div key={i} className={s.dropDownList}
                                                       onClick={() => handleChange(val)}>{val || "-"}</div>)}
                    </div>
                </RenderIf>
            </div>
        </>
    )
};

export default Dropdown;
