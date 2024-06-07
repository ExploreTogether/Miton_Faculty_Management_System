import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBookOpen, faPersonChalkboard, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='h-screen bg-gray-800 text-white  top-0 left-0 w-30 flex flex-col items-center mt-0  pr-10 p-3  overflow-auto bottom-0'>
      {/* Sidebar Content */}
      <div className="mt-12 text-2xl">Adminstration</div>
      <ul className="mt-8">
       <a href='#'><li className="mt-5"><FontAwesomeIcon icon={faHouse} className='pr-2' /> DashBoard</li></a> 
        <a href='#'><li className='mt-5'> <FontAwesomeIcon icon={faBookOpen} className='pr-2' />Courses </li></a>
        <a href=''><li className='mt-5'> <FontAwesomeIcon icon={faPersonChalkboard} className='pr-2' />Teacher Profile</li></a>
        <a href=''><li className='mt-5'> <FontAwesomeIcon icon={faGraduationCap} className='pr-2' />Student Profile</li></a>
      </ul>
    </div>
  );
}

export default Sidebar;