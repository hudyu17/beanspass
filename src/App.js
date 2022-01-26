import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga4';
import Home from './components/Home';

function initializeReactGA() {
  ReactGA.initialize('G-2R889R50LZ');
  ReactGA.send('Landing page view');
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
