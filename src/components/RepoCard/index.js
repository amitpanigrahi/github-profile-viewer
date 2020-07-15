import React from "react";
import s from "./index.module.scss";
import LanguageLabel from "../LanguageLabel";
import {formatDate} from "../../utils/helper";
import CTAButton from "../common/CTAButton";
import TextWithIcon from "../common/TextWithIcon";
import {START_ICON} from "../../constants/imgMap";

const RepoCard = ({data = {}}) => {
    const {
        language,
        updated_at,
        description,
        stargazers_count,
        name,
        html_url,
    } = data;
    return (
        <div className={s.wrapper}>
            <div>
                <a rel={"noopener noreferrer"} target={"_blank"} href={html_url} className={s.repoName}>
                    <h3>
                        {name}
                    </h3>
                </a>
                <div className={"text_586069"}>
                    {description}
                </div>
                <div className={`text_586069 ${s.tags}`}>
                    <LanguageLabel value={language} className={"mx_10"}/>
                    {stargazers_count ? <div className={"mx_10"}><TextWithIcon icon={START_ICON} text={stargazers_count} /></div> : null}
                    <div className={"mx_10"}>
                        Updated on {formatDate(updated_at)}
                    </div>
                </div>
            </div>
            <div>
                <CTAButton styleClass={""} text={<TextWithIcon icon={START_ICON} text={"Star"} />}/>
            </div>
        </div>
    )
};

export default RepoCard;
