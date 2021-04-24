import React from "react";

const Header = (props) => {
    return (
        <div className="header">
            <h1>TODO</h1>
            <span className="header__themeSwicherIcon" onClick={props.themeSwicher}></span>
        </div>
    );
};

export default Header;