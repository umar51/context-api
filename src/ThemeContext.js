//We will create our theme context in our ThemeContext.js file.

import React from "react";

//To create a context, we use React.createContext which creates a context object. 
//You can pass in anything as an argument to React.createContext. 
//In this case, we are going to pass in a string which is the current theme mode. So now our current theme mode is the “light” theme mode

//const ThemeContext = React.createContext("light"); 

//making new context for toggling theme fuctionality

const ThemeContext = React.createContext(["light", () =>{}]); //similar to useState, where 1st arg stores default value and 2nd arg is a arow func that updates the default value

//We passed an array to the React.createContext function. 
//The first element in the array is the current theme mode and the second element is the function that would be used to update the theme. 
//As I said, this just resembles the result of a useState hook but it is not exactly the result of a useState hook.

export default ThemeContext;

//part 1
//Creating the context provider in App.js

//part2
//moving to App.js to make useState for toggle theme functionality