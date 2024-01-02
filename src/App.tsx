
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';
import Team from './components/Team';
import useLocalStorage from 'use-local-storage'
import { defaultTheme } from './helpers/theme';
import Splinter from './components/Splinter';
import Contact from './components/Contact';

function App() {
    const [theme] = useLocalStorage('theme', defaultTheme ? 'dark' : 'light');

  return (
    <div className={theme}>
        {/* <Hero /> */}
        <Profile />
        <Portfolio />
        <Contact />
        {/* <Team /> */}
        {/* <Footer /> */}
        {/* <Splinter /> */}
    </div>
  );
}

export default App;
