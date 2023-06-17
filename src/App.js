import './App.css';
import { Fragment, useContext , useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import OverLayer from './Components/OverLayer/OverLayer';
import { Route, Routes } from 'react-router-dom';
import { themes } from '.';


function App() {
  
  const mood = useContext(themes);

  const [switchMood , setSwitchMood] = useState(mood);

  const switchDarkness =(themes)=>{
    setSwitchMood(cur =>cur==='light'? 'dark':'light');
  }

  return <Fragment>
  <div className={switchMood}>

  <OverLayer/>
    <NavBar switchDarkness={switchDarkness} switchMood={switchMood}/>
  <main className="overflow-hidden">
  <Routes>
  <Route path='*' element={ <Home/>}></Route>
  <Route path='/' element={ <Home/>}></Route>
  <Route path='home' element={ <Home/>}></Route>
  <Route path='projects' element={ <Projects/>  }></Route>
  </Routes>
    </main>
    </div>
 
  </Fragment>;
}

export default App;
