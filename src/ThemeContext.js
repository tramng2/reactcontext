import React, { useState, createContext } from 'react';
import {buttonThemes} from './App'

export const ThemeContext = createContext();
export const ThemeProvider = (props) => {
    
    const [theme, setTheme] = useState(buttonThemes.blue);

    const toggleTheme = () => {
        setTheme(theme === buttonThemes.blue ? buttonThemes.black : buttonThemes.blue)  
    }
    return (
        <div>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )


}

