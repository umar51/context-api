import React, {useState} from "react";

import './App.css';
import Header from "./Header.js";
import Main from  "./MainWithFunction.js";
import ThemeContext from './ThemeContext.js';

function App() {

  const themeHook = useState("light");
  //const theme = "light"; //using themehook for toogle functionality
  return (
   // Once the ThemeContext has been imported, we have to enclose the contents of our App component in ThemeContext.Provider tags and give the 
   //ThemeContext.Provider component a props called value which will contain the data we want to make available to our component tree.
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header/>
        <Main/>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;

//Notes
//To make this context available to all our React components, we have to use a Provider.
// What is a Provider? According to the React documentation, every context object comes with a Provider React component that allows consuming components to subscribe to context changes. 
//It is the provider that allows the context to be consumed by other components. 
//That said, let us create our provider.

//Now, we will create our theme file that will contain the different color values for both our light and dark themes. 
//Create a file in your /src folder called Colors.js.


//PArt3 
//writing the toggle component for toggle functionality