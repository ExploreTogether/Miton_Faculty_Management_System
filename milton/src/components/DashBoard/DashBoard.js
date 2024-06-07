import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import DashBoardContain from './DashBoardContain';


const DashBoard = () => {
  return ( 
    <div className=' scroll-auto'>
       <Header/>
       <div className='flex text-primary'>
        <Sidebar/>
        <DashBoardContain/>
      
       </div>
       
    </div>
   
  )
}

export default DashBoard;