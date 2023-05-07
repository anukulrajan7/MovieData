import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import More from './pages/More';
import Forms from './pages/Forms';

function App() {
  return (
    <div className="App overflow-x-hidden">
         <Navbar/>
          <Home/>
         <Footer className=''/>          
    </div>
  );
}

export default App;
