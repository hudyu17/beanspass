import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import Home from './components/Home';

function initializeReactGA() {
  ReactGA.initialize('G-2R889R50LZ');
  ReactGA.pageview('/');
}

function App() {
  initializeReactGA();
  return (
      <div>
        <Home/>
      </div> 
  );
}

export default App;
