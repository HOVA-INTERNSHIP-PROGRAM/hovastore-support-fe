import React from 'react'
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className='bg-third text-white h-auto'>
        <div className='text-3xl'>Header</div>
        <div><Outlet /></div>
    </div>
  )
}

export default HomeLayout