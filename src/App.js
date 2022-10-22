import './App.css';
import NavBar from '../src/components/NavBar';
import Body from './components/Body';
import Learn from './components/Learn'
import Project from './components/Project'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  
  return (
    <div>
        <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Body/>}/>
            <Route exact path="/learn" element={<Learn/>}/>
            <Route exact path="/project" element={<Project/>}/>
          </Routes>
    </Router>
    </div>
  );
}

export default App;
