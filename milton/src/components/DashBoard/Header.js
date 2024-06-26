import React from 'react';
import Picture from '../Picture1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='w-full bg-primary flex justify-between items-center '>
      <div className='flex items-center p-3 ml-12'>
        <img className='h-12' src={Picture} alt='Logo' />
        <h1 className='pl-6 text-xl'>Milton Faculty Management System</h1>
      </div>
      <div className='p-7 pr-12'>
        <a href="https://www.youtube.com/" title="Log Out" className="text-black">
          Log Out
        </a>
        <FontAwesomeIcon icon={faRightFromBracket} className='ml-5' />

      </div>
    </div>
  );
}

export default Header;
