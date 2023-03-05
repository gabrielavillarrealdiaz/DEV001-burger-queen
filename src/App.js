

//import { useState } from 'react';
import './App.css';
import {Home} from './components/Home'
import {Menu} from './components/Menu'
import {Chef} from './components/Chef'
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import { Productos } from './components/Productos';

function App() {
  return (
    <section className='App'>
      <BrowserRouter> 
      <Routes>
    <Route path ='/' element={(<Home/>)}/>
    <Route path ='/menu' element={(<Menu/>)}/>
    <Route path ='/chef' element={(<Chef/>)}/>
    <Route path ='/productos' element={(<Productos/>)}/>
    </Routes>
    </BrowserRouter> 
    </section>
  )
}


export default App;
