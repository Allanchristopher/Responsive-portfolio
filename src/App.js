import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  const [load, updateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
        <BrowserRouter>
        <Preloader load={load} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/project' element={<Project/>}/>
          <Route  path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
