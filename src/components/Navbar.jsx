import React from 'react'
import { Link } from 'react-router-dom'


const navLinks =[
    {
        path:'/',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    }
]
const Navbar = () => {
  return (
    <>
      <div className="pt-8 border border-b-red pb-8">
        <nav className="inline list-none pt-0.5">
            <ul>
                <li className='text-[35px] font-mono font-semibold inline px-6 pr-[700px]'>Ref-A-Doc</li>
               
                <Link to ='/' ><li className='inline px-10 text-[20px]'>Home</li></Link>
                <Link to='/about'><li className='inline px-10 text-[20px]'>About</li></Link>

                <Link to='/login'><button className='inline mx-10 px-7 py-1.5 rounded-xl bg-red text-[20px] text-white hover:bg-lightred'>Login</button></Link>
                <Link to='/register'><button className='inline ml1.5 px-5 py-1.5 rounded-xl bg-red text-[20px] text-white hover:bg-lightred'>Register</button></Link>
                
            </ul>
            
        </nav>
      </div>
    </>
  )
}

export default Navbar
