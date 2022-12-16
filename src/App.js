import './App.css';
import NavBar from '../src/components/NavBar';
import Body from './components/Body';
import Learn from './components/Learn'
import Project from './components/Project'
import Footer from './components/Footer'
import Random from './components/Random';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<><NavBar/><Body/><Footer/></>}/>
            <Route exact path="/learn" element={<><NavBar/><Learn/></>}/>
            <Route exact path="/project" element={<><NavBar/><Project/></>}/>
            <Route exact path="/random" element={<Random/>}/>
          </Routes>
    </Router>
    </div>
  );
}

export default App;
