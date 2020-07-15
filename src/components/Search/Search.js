import React from "react";
import "./Search.scss";

const Search = ({ph = "Search profile..", value = "", handleChange, handleSubmit}) => {
    return (
        <form id="search" onSubmit={e => (handleSubmit ? handleSubmit(e) : undefined)}>
            {/*  <label>*/}
            <input
                className="input-field"
                value={value}
                onChange={handleChange}
                placeholder={ph}
            />
            {/*</label>*/}
            {handleSubmit ?
                <button className="btn" type="submit">
                    Search
                </button> : null}
        </form>
    );
};

export default Search;
