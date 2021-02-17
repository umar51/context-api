//Consuming context with functional components is easier and less tedious than doing so with class-based components. 
//To consume context in a functional component, we will use a hook called useContext.

import React, { useContext } from "react";
import AppTheme from "./Colors";
import ThemeContext from "./ThemeContext"


const Main = () => {                           //since ThemeContext return object of a const and an arow function so index [0] indicated to use const value
    const theme = useContext(ThemeContext)[0]; //passing the ThemeContext(with value "light") object to useContext and saving value at index [0] as theme which is current theme
    const currentTheme = AppTheme[theme]; //passed theme object to AppTheme object in colors.js to get light theme

    return(
        //styling main of Main component
        <main style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`, //used the currentTheme
            color: `${currentTheme.textColor}`,
        }}>
            <h1>Heading 1</h1>
            <p>This is a paragraph</p>
            <button>This is a button</button>
        </main>
    );
}

export default Main;

//all we had to do was use our useContext hook with our ThemeContext passed in as an argument.
//Note: You have to use these different components in the App.js file in order to see the results.

//Next Updating Our Theme With The ThemeToggler Component
//moving to ThemeToggler Component in ThemeToggler.js