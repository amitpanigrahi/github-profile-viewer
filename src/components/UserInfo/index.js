import React from "react";
import s from "./index.module.scss";
import CTAButton from "../common/CTAButton";
import {ENVELOPE_ICON, INDUSTRY_ICON, LOCATION_PIN_ICON, START_ICON, USER_GROUP_ICON} from "../../constants/imgMap";
import TextWithIcon from "../common/TextWithIcon";

const UserInfo = ({data}) => {
    const {
        bio = "",
        name = "",
        company = "",
        location = "",
        followers = 0,
        following = 0,
        email = "",
        login = ""
    } = data;
    return (
        <div>
            <div className={s.userName}>
                {name}
            </div>
            <div className={s.userTag}>
                {login}
            </div>
            <div className={s.desc}>
                {bio}
            </div>
            <CTAButton/>
            <div className={s.social}>
                <TextWithIcon
                    icon={USER_GROUP_ICON}
                    text={<span><span className={"font_bold text_black"}>{followers}</span> <span
                        className={"ml_5"}>followers</span></span>}
                />
                <TextWithIcon
                    text={<span><span className={"font_bold text_black"}>{following}</span> <span className={"ml_5"}>following</span></span>}
                />
                <TextWithIcon
                    icon={START_ICON}
                    text={<span className={"font_bold text_black"}>{Math.ceil(Math.random()*100)}</span>}
                />
            </div>
            <div>
                <TextWithIcon
                    externalClass={"mb_5"}
                    icon={INDUSTRY_ICON}
                    text={company}
                />
                <TextWithIcon
                    externalClass={"mb_5"}
                    icon={LOCATION_PIN_ICON}
                    text={location}
                />
                <TextWithIcon
                    externalClass={"mb_5"}
                    icon={ENVELOPE_ICON}
                    text={email}
                />
            </div>
        </div>
    )
};

export default UserInfo;
