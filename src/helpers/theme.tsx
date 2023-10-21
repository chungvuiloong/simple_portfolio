import useLocalStorage from 'use-local-storage'

export const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
export const [theme, setTheme] = useLocalStorage('theme', defaultTheme ? 'dark' : 'light');

export const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }