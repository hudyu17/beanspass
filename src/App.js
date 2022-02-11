import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

import ReactGA from 'react-ga4';
import Home from './components/Home';
import Stores from './components/Stores';

function initializeReactGA() {
  ReactGA.initialize('G-2R889R50LZ');
  ReactGA.send('Landing page view');
}

function App() {
  initializeReactGA();
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="business" element = {<Stores/>}/>
      </Routes>
    </Router>
  );
}

export default App;
