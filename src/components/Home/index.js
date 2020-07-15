import React from "react";
import Profile from "../Profile";
import RepoDetails from "../RepoDetails";
import s from "./index.module.scss";
import {isUserFetching, userErrorMessage, userReducerData} from "../../Selectors/user";
import {connect} from "react-redux";
import NoDataFound from "../common/NoDataFound";
import _isEmpty from "lodash/isEmpty";
import {NO_USER_SEARCHED} from "../../constants/common";
import {LOADING_TEXT} from "../../constants/loadingText";

const Home = ({s__isUserFetching, s__userErrorMessage, s__userData}) => {
    return (
        <div className={s.detailsWrapper}>
            {!s__isUserFetching ?
                !s__userErrorMessage ?
                    !_isEmpty(s__userData) ?
                        <>
                            <div className={s.profileSection}>
                                <Profile/>
                            </div>
                            <div className={s.repoSection}>
                                <RepoDetails/>
                            </div>
                        </> : <NoDataFound text={NO_USER_SEARCHED}/> : <NoDataFound text={s__userErrorMessage}/> :
                <NoDataFound text={
                    <div>
                        <p>{LOADING_TEXT[Math.floor(Math.random()*10)]}</p>
                    </div>}/>}
        </div>
    )
};

const mapStateToProps = state => ({
    s__userData: userReducerData(state),
    s__userErrorMessage: userErrorMessage(state),
    s__isUserFetching: isUserFetching(state),
});

export default connect(mapStateToProps, null)(Home);
