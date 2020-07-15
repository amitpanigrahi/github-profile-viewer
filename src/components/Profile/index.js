import React from "react";
import UserImage from "../UserImage";
import UserInfo from "../UserInfo";
import {userImage, userReducerData} from "../../Selectors/user";
import {connect} from "react-redux";
import s from "./index.module.scss"

const Profile = ({s__userImage, s__userData}) => {
    return (
        <div className={s.profileDetails}>
            <UserImage img={s__userImage}/>
            <UserInfo data={s__userData}/>
        </div>
    )
};

const mapStateToProps = state => ({
    s__userImage: userImage(state),
    s__userData: userReducerData(state),
});

export default connect(mapStateToProps, null)(Profile);
