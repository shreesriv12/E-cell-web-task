import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const FirstPage = () => {
  const [active1, setActive1] = useState(false);

  var handleClick1 = () => {
    setActive1(!active1); 
  };
  const [active2, setActive2] = useState(false);

   const handleClick2 = () => {
    setActive2(!active2); 
  };
  const [active3, setActive3] = useState(false);

  const  handleClick3 = () => {
    setActive3(!active3); 
  };
  const [active4, setActive4] = useState(false);

  const  handleClick4 = () => {
    setActive4(!active4); 
  };
  const [active5, setActive5] = useState(false);

  const  handleClick5 = () => {
    setActive5(!active5); 
  };
  const [active6, setActive6] = useState(false);

  const  handleClick6 = () => {
    setActive6(!active6); 
  };
  const [active7, setActive7] = useState(false);

  const  handleClick7 = () => {
    setActive7(!active7); 
  };
  const [active8, setActive8] = useState(false);

  const  handleClick8 = () => {
    setActive8(!active8); 
  };
  const [active9, setActive9] = useState(false);

  const  handleClick9 = () => {
    setActive9(!active9); 
  };
  return (
    <div className="bg-white h-screen">
      <nav className="p-4 fixed top-0 left-0 w-full flex justify-between items-center shadow-md">
        <div className="ml-auto flex">
          <ul className="flex space-x-6">
            <li className="hover:bg-black rounded pl-4 pr-4 shadow-lg transition duration-300">
              <NavLink
                to="/second_page"
                className="text-black font-bold hover:text-white transition duration-300 w-full"
              >
                Home
              </NavLink>
            </li>
            <li className="hover:bg-black rounded pl-4 pr-4 shadow-lg transition duration-300">
              <NavLink
                to="/"
                className="text-black font-bold hover:text-white transition duration-300 w-full"
              >
                Grid
              </NavLink>
            </li>
            <li className="hover:bg-black rounded shadow-lg pl-4 pr-4 transition duration-300">
              <NavLink
                to="https://www.linkedin.com/in/shreeya-srivastava-94a458327/"
                className="text-black font-bold hover:text-white transition duration-300 w-full"
              >
                LinkedIn
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex space-x-20 mt-20 ">
        <div className="w-80 h-80 style={{
    boxShadow: '10px 10px 30px rgba(181, 183, 169, 0.75)' 
  }} bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 text-white rounded flex items-center justify-center rounded-lg">
        </div>
        <div
  className="w-80 h-80 bg-gray-100 text-black border-4 border-black rounded-lg flex items-center justify-center">
    <img src='/e-cell logo.png'/>
    </div>
        <div className="w-80 h-80 bg-gray-100 border-4 border-gray-500 text-white rounded-lg flex flex-wrap items-center justify-center"
  style={{
    boxShadow: 'inset 0 0 1rem rgb(157, 163, 176)'
  }}>
     <div className="flex flex-wrap gap-6 mt-2 mb-2">
      <div className={`w-20 h-20  ${active1?'bg-blue-900':'bg-red-900'} border border-gray-300 rounded-xl`} onClick={handleClick1}></div>
      <div className={`w-20 h-20  ${active2?'bg-blue-900':'bg-red-900'} border border-gray-300 rounded-xl`} onClick={handleClick2}></div>
      <div className={`w-20 h-20  ${active3?'bg-blue-900':'bg-red-900'} border border-gray-300 rounded-xl`} onClick={handleClick3}></div>
      </div>
      <div className="flex flex-wrap gap-6 mt-2 mb-2">
      <div className={`w-20 h-20  ${active4?'bg-blue-900':'bg-red-900'} border border-gray-300 rounded-xl`} onClick={handleClick4}></div>
      <div className={`w-20 h-20  ${active5?'bg-blue-900':'bg-red-900'} border border-gray-300 rounded-xl`} onClick={handleClick5}></div>
      <div className={`w-20 h-20  ${active6?'bg-blue-900':'bg-red-900'} border border-gray-300 rounded-xl`} onClick={handleClick6}></div>
      </div>
      <div className="flex flex-wrap gap-6 mt-2 mb-2">
      <div className={`w-20 h-20  ${active7?'bg-blue-900':'bg-red-900'} border border-gray-300 rounded-xl`} onClick={handleClick7}></div>
      <div className={`w-20 h-20  ${active8?'bg-blue-900':'bg-red-900'} border border-gray-300 rounded-xl`} onClick={handleClick8}></div>
      <div className={`w-20 h-20  ${active9?'bg-blue-900':'bg-red-900'} border border-gray-300 rounded-xl`} onClick={handleClick9}></div>
      </div>
          </div>
        </div>
      </div>
  );
};

export default FirstPage;
