import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Detail from './components/Detail'
import List from './components/List'
import Create from './components/Create'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element ={<Create/>} path ='/'/>
          <Route element = {<List/>} path = '/list'/>
          <Route element = {<Detail/>} path = '/detail/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
