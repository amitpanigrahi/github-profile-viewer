import React from "react";
import s from "./index.module.scss";

const TabSelectors = ({repoCount, activeTab = 1, handleChange}) => {
    return (
        <div className={s.wrapper}>
            <div onClick={() => handleChange(0)} className={`${s.tab} ${activeTab === 0 ? s.tabActive : ""}`}>Overview</div>
            <div onClick={() => handleChange(1)} className={`${s.tab} ${activeTab === 1 ? s.tabActive : ""}`}>Repositories<span className={s.repoCount}>{repoCount}</span></div>
            <div onClick={() => handleChange(2)} className={`${s.tab} ${activeTab === 2 ? s.tabActive : ""}`}>Projects</div>
        </div>
    )
};

export default TabSelectors;
