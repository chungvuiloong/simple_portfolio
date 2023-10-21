
import './App.css';
import Footer from './components/Footer';
import Hero from './assets/images/day/Hero'
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';
import Team from './components/Team';
import useLocalStorage from 'use-local-storage'
import { defaultTheme } from './helpers/theme';

function App() {
    const [theme] = useLocalStorage('theme', defaultTheme ? 'dark' : 'light');

  return (
    <div className={theme}>
      <Hero />
      <Profile />
      <Portfolio />
      <Team />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
