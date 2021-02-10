// //We will have to import our ThemeContext and AppTheme. Once that is done,
// // we will write a class that returns our JSX from a render method. 
// //Now we have to consume our context. There are two methods to do this with class-based components:

// import AppTheme from "./Colors";
// import ThemeContext from "./ThemeContext";



// /////////////------The first method is through Class.contextType. ------//////////

// //To use this method, we assign the context object from our ThemeContext to contextType property of our class.
// // After that, we will be able to access the context value using this.context. 
// //You can also reference this in any of the lifecycle methods and even the render method.

// import React, {Component} from "react";



// class Main extends Component{ //defining a class component
//     constructor() {
//         super();
//     }
//     static contextType = ThemeContext; //assigning the context object from Themecontext to contexttype property of class
//     render(){

//         const currentTheme = AppTheme[this.context[0]]; //since ThemeContext return object of a const and an arow function so index [0] indicated to use const value
//     //accessing the contexttype property with this.context

//     //this.context grabs the theme from AppTheme object of colors.js
//   //and saved the selected theme into currentTheme

//   //  Now, we will grab the colors from the currentTheme variable and use them to style some markup.
//   //since backgroundcolor and textcolor are defined in color.js with object Apptheme and
//   // the ThemeContext has "light" as this.context so
//   //here we can access the light backgroundcolor and textcolor, used below
//   return(

//         <main style={{
//             padding: "1rem",
//             backgroundColor: `${currentTheme.backgroundColor}`,
//             color: `${currentTheme.textColor}`,

//         }}> 
//             <h1> Heading 1 </h1>
//             <p> This is a paragraph</p>
//             <button> This is a button </button>

//         </main>

//         );
    
//     }
// }

// export default Main;

// //That’s it! This method, however, limits you to consuming only one context.






// ///////////---------- The second method is ThemeContext.Consumer --------------//////////


// //that involves the use of a Consumer. 
// //Each context object also comes with a Consumer React component which can be used in a class-based component. 
// //The consumer component takes a child as a function and that function returns a React node.
// // The current context value is passed to that function as an argument.

// // class Main extends Component {
// //     constructor () {
// //         super();
// //         this.state = {

// //         }
// //     }

// //     render () {
// //         return(
// //             <ThemeContext.Consumer>
// //                 {
// //                     (theme) => {
// //                         const  currentTheme = AppTheme[theme];
// //                         return(
// //                             <main style={{
// //                                 padding: "1rem",
// //                                 backgroundColor: `${currentTheme.backgroundColor}`,
// //                                 color: `${currentTheme.textColor}`,
// //                             }}>
// //                                 <h1>Heading 1</h1>
// //                                 <p>This is a paragraph</p>
// //                                 <button>This is a button</button>
// //                             </main>
// //                         )
// //                     }
// //                 }
// //             </ThemeContext.Consumer>
// //         );
// //     }
// // }

// // export default Main;

// //As you can see, we used the current value of our ThemeContext (which is "light") which we passed to arrow function as “theme” and we grabbed the color values for that theme mode from AppTheme of colors.js and assigned it to the variable currentTheme. 
// //With this method, you can use multiple Consumers.


// //next we will utilize the context for function components
// //go to Main.js