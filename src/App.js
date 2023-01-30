import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import Projects from "./components/Projects"
import Expereince from "./components/Experience"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProjectDisplay from './components/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path='/experience' element={<Expereince />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
