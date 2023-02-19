import React from 'react';

import {Link} from 'react-router-dom';

import logo from '../assets/img/reunion.svg';
const Header = () => {
  return <header className='py-6 mb-12 border-b'>
    <div className='container mx-auto flex justify-between items-center'>

      <Link to='/'><img src={logo} alt='Logo' /></Link>
      <div className='flex items-center gap-6'>
        <Link className='bg-white  hover:text-violet-900  px-4 py-3 rounded-lg transition text-violet-800 border-solid border-2 border-violet-600' to=''>LogIn</Link>
        <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition ' to=''>SignUp</Link>
      </div>

    </div>
  </header>;
};

export default Header;
