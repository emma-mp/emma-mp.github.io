import './App.css';
import HomePage from './HomePage.js'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <HomePage />
      </ParallaxProvider>
    </div>
  );
}

export default App;
