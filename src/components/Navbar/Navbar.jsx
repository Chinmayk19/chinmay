import React from 'react';
import logo from "../../assets/react.svg";

const Navbar = () => {
  return (
    <div className='flex flex-col sm:flex-row p-4  items-center bg-black'>
        <div className='w-fit'>
            <img src={logo} alt="Logo" className='w-8 sm:w-12'/>
        </div>
        <div className='flex flex-col sm:flex-row sm:items-center w-fit mt-2 sm:mt-0 ml-0 sm:ml-2'>
            <ul className='flex flex-col sm:flex-row sm:space-x-4 items-center sm:items-start'>
                <li className='mb-2 sm:mb-0 text-xs sm:text-xl text-white'>Home</li>
                <li className='mb-2 sm:mb-0 text-xs sm:text-xl text-white'>About</li>
                <li className='mb-2 sm:mb-0 text-xs sm:text-xl text-white'>Contact</li>
            </ul>
        </div>
        <div className='flex ml-2 flex-1 justify-end'>
            <label htmlFor="search" className='text-white text-xl'>Search:</label>
            <input type="text" id='search' placeholder='Search' className='hidden sm:block ml-2 p-1 rounded' />
        </div>
    </div>
  );
}

export default Navbar;
