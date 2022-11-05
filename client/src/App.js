import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Detail from './components/Detail'
import List from './components/List'
import Create from './components/Create'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';


function App() {
  return (
    <ThemeProvider   breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs">
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element ={<Create/>} path ='/'/>
          <Route element = {<List/>} path = '/list'/>
          <Route element = {<Detail/>} path = '/detail/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
