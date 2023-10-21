import useLocalStorage from 'use-local-storage'

export default function Home() {
    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultTheme ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
      }
    
      return (
        <div className="app" data-theme={theme}>
          <span>Easy Darkmode and Themes in React</span>
          <button onClick={switchTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>
      );
}
