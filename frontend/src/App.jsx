import { Routes, Route } from 'react-router-dom';
import './App.css';
import SecondPage from './pages/SecondPage'; 
import React from 'react';
import FirstPage from './pages/FirstPage';


function App() {
  return (
    <>
      <div>
      <Routes>
      <Route path='/' element={<FirstPage/>}/>
      <Route path='second_page' element={<SecondPage/>}/>
     </Routes>  
      </div>
    </>
  );

}

export default App;
