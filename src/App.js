import './App.css';
import { Fragment } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import OverLayer from './Components/OverLayer/OverLayer';
import { Route, Routes } from 'react-router-dom';


function App() {
  
  
  return <Fragment>
  <OverLayer/>
    <NavBar/>
  <main className="overflow-hidden">
  <Routes>
  <Route path='/' element={ <Home/>}></Route>
  <Route path='home' element={ <Home/>}></Route>
  <Route path='projects' element={ <Projects/>  }></Route>
    {/* <Route path='professional' element={<Professional/>}></Route> */}
  </Routes>
   
    </main>
  </Fragment>;
}

export default App;
