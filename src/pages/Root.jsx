import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    
    <>
        <header className='w-full h-16 bg-white shadow-md '>
        <Navbar/> 
        </header>
        <main className='h-screen'>
            <Outlet/>
        </main>
        <footer>
        {"Footer"}
        </footer>


    </>


  )
}

export default Root