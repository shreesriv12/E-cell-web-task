import React from 'react';
import { NavLink } from 'react-router-dom';

const FirstPage = () => {
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
    boxShadow: '10px 10px 30px rgba(181, 183, 169, 0.75)' // Red shadow with some transparency
  }} bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 text-white rounded flex items-center justify-center rounded-lg">
        </div>
        <div
  className="w-80 h-80 bg-gray-100 text-black border-4 border-black rounded-lg flex items-center justify-center">
    <img src='/e-cell logo.png'/>
    </div>

        <div className="w-80 h-80 bg-grey-500 text-white rounded flex items-center justify-center rounded-lg">
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
