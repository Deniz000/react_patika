import React, { createContext, useMemo } from "react";

const ThemeContext = createContext()


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light')


    React.useEffect(() =>{
        localStorage.setItem('theme', theme)
    },[theme])

    const values = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }),[theme])

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;