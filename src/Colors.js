//theme file that will contain the different color values for both our light and dark themes.

//In Colors.js, we will create an object called AppTheme. This object will contain the colors for our themes. 
//Once you are done, export the AppTheme object like so:


const AppTheme = {
    light: {
        textColor: "#000",
        backgroundColor: "#fff"
    },

    dark: {
        textColor: "#fff",
        backgroundColor: "#333"
    }
}

export default AppTheme;

//Now it’s time to start creating our different React components.
//in separate js files inside src folder 1.Header 2.ThemeToggler 3. MainWithClass