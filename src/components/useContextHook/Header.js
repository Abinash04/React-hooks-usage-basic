import { useTheme } from "./ThemeContext";

const Header = () => {
    const {theme, setTheme} = useTheme();
    const toggle = () => {
        setTheme(theme === 'light'?'dark':'light');
    }
    return (
        <div>
            <header style={{background: theme ==='light'? "grey":"brown", padding:'1rem'}}>
                <h1>Header</h1>
                <button onClick={toggle}>Toggle Theme</button>
            </header>
        </div>
    );
}

export default Header;