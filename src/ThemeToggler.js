

import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";


const themeTogglerStyle = {
    cursor: "pointer"
}
const ThemeToggler = () => {
    const[themeMode, setThemeMode] = useContext(ThemeContext);
    //Since the value of our theme context is now a hook whenever we call useContext on it, it will return an array.
    //Using destructuring, we were able to grab the elements from the array.
    // We then wrote an onClick event handler for our ThemeToggler.
    //With that code, whenever the theme toggler is clicked, it will switch the theme of our application.
    return (
        <div style={themeTogglerStyle} onClick = { () => {setThemeMode(themeMode ==="light" ? "dark" : "light")}}>
            <button>
                <span title = "switch theme">
                {themeMode ==="light" ? "DAY" : "NIGHT"}
                </span>
            </button>
        </div>
    );
}

export default ThemeToggler;

//part 1
//next CONSUMING CONTEXT WITH CLASS-BASED COMPONENTS
//Here, we will use the value of our ThemeContext. 
//As you may already know, we have two methods of writing components in React: through functions or classes.
// The process of use context in both methods is different 
//so we will create two components to serve as the main section of our application: MainWithClass and MainWithFunction

//next moving to MainWithClass.js.

//part 2
//Now we are going to work on our ThemeToggler component. 
//We need to be able to switch between the light and dark themes. 
//To do this, we are going to need to edit our ThemeContext.js. 
//Our React.createContext will now take an object resembling the result of a useState hook as an argument.


