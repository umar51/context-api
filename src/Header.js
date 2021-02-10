
import React from "react";
import ThemeToggler from "./ThemeToggler";

const headerstyles = {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

const Header = () => {
    //ThemeToggler is child of Header
    return(
        <header style={headerstyles}>
            <h1>Context API</h1><br/>
            <ThemeToggler/>             
        </header>
    );
}

export default Header;

//moving to ThemeToggler