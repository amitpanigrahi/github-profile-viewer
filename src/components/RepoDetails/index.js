import React, {useState} from "react";
import TabSelectors from "../TabSelectors";
import s from "./index.module.scss"
import Search from "../Search/Search";
import RepoList from "../RepoList";
import {connect} from "react-redux";
import {checkMatch, trimLeft} from "../../utils/helper";
import RenderIf from "../HOC/RenderIf";
import _get from "lodash/get";
import Dropdown from "../common/Dropdown";
import NoDataFound from "../common/NoDataFound";
import {repoReducerData} from "../../Selectors/repo";

const RepoDetails = ({s__repoData}) => {
    const [activeTab, setActive] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [languageQuery, setLangQuery] = useState("");
    let filteredList = searchQuery ? s__repoData.filter(val => (checkMatch(searchQuery, val, ["name", "description", "language", "updated_at"]))) : s__repoData;
    if (languageQuery) {
        filteredList = filteredList.filter(val => (checkMatch(languageQuery, val, ["language"])));
    }
    const languageList = s__repoData.reduce((a, b) => {
        const lang = _get(b, "language", null);
        if (lang && a && !a.includes(_get(b, "language", ""))) {
            a.push(lang);
        }
        return a;
    }, []);
    return (
        <div className={s.wrapper}>
            <RenderIf cnd={s__repoData.length}>
                <TabSelectors activeTab={activeTab} handleChange={setActive} repoCount={s__repoData.length}/>
                <RenderIf cnd={activeTab === 1}>
                    <div className={s.filterSection}>
                        <div className={s.search}>
                            <Search value={searchQuery} handleChange={e => setSearchQuery(trimLeft(e.target.value))}
                                    ph={"Find a repository..."}/>
                        </div>
                        <div className={s.dropdown}>
                            <Dropdown value={languageQuery} label={"Language"} dataList={languageList}
                                      handleChange={val => setLangQuery(val)}/>
                        </div>
                    </div>
                </RenderIf>
            </RenderIf>
            <RenderIf cnd={filteredList.length && activeTab === 1} fb={<NoDataFound/>}>
                <RepoList data={filteredList}/>
            </RenderIf>
        </div>
    )
};

const mapStateToProps = state => ({
    s__repoData: repoReducerData(state),
});

export default connect(mapStateToProps, null)(RepoDetails);
