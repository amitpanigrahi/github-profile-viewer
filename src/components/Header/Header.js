import React, {useState} from "react";
import Search from "../Search/Search";
import "./Header.scss";
import {connect} from "react-redux";
import {trimLeft} from "../../utils/helper";
import {fetchUserAndRepo} from "../../services";

const Header = ({d__getUserAndRepo}) => {
    const [userName, setUserName] = useState("");
    const onSubmitHandler = e => {
        e.preventDefault();
        if (!userName) {
            return
        }
        d__getUserAndRepo(userName);
    };
    return (
        <header>
            <div className="header">
                <Search
                    handleSubmit={onSubmitHandler}
                    handleChange={e => setUserName(trimLeft(e.target.value))}
                    value={userName}
                />
            </div>
        </header>
    );
};

const mapDispatchToProps = dispatch => ({
    d__getUserAndRepo: (data) => fetchUserAndRepo(dispatch)(data),
});

export default connect(null, mapDispatchToProps)(Header)
