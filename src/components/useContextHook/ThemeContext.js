import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
// ThemeProvider is the provider component that wraps around the portion of the component tree where you want to share the theme context.
// useTheme is a custom hook that acts as the consumer component. It calls the useContext hook to access the theme context provided by the 
// ThemeProvider.
// Consumer components can then use the useTheme hook to access the theme context value and update it as needed.


// In React's useContext hook, the terms "consumer" and "provider" refer to components that work together to manage and share state across 
// the component tree.

// Provider:
// The provider component is responsible for creating and managing the context. It wraps around the portion of the component tree where you
//  want to share the context.
// The provider component uses the createContext function to create a context object and provides its value to the descendant components.
// Typically, the provider component sets the context value as a prop named value, which can be accessed by descendant components via the 
// useContext hook.
// Provider components can be nested, with each nested provider providing its own value to its descendant components.
// Consumer:
// The consumer component is any component that consumes the context value provided by the provider.
// In the context of React's useContext hook, the consumer is any functional component that calls the useContext hook to access the context value.
// By using the useContext hook, consumer components can access the context value without needing to pass props down through intermediate 
// components.