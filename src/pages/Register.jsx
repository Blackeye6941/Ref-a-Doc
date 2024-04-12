import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div className='flex'>
        <div className='bg-red w-[40%] text-center py-[18rem]' >
        </div>
        <div className='inline '>
           <h1 className='text-[2.5em] font-mono pl-8 pt-10'>Register</h1>
           <h1 className='text-[1.5rem] pl-8 pt-8'>Create an account here..</h1>
           <h1 className='pl-8 pt-4 text-[20px] pb-10'>Enter the details below</h1>
           <form>
            <div className='flex md:flex-col'>
                <label htmlFor="" className="pl-8 text-[20px] pt-10 pb-5">Name:</label>
                <input type="text" placeholder='Enter your name' className="pl-2 text-[20px] border-2 ml-5 w-[40rem] rounded-xl py-2" />
            </div>
            <div className='flex md:flex-col'>
                <label htmlFor="" className="pl-8 text-[20px] pt-10 pb-5">Phone Number:</label>
                <input type="text" placeholder='Enter your phone Number' className=" py-2 pl-2 text-[20px] border-2 ml-5 w-[40rem] rounded-xl" />
            </div>
            <div className='flex md:flex-col'>
                <label htmlFor="" className="pl-8 text-[20px] pt-10 pb-5">Age:</label>
                <input type="number" placeholder='Enter your age' className="py-2 pl-2 text-[20px] border-2 ml-5 rounded-xl pr-[40px] w-[40rem]" />
            </div>
            <div className='flex md:flex-col'>
                <label htmlFor="" className="pl-8 text-[20px] pt-10 pb-5">Password:</label>
                <input type="text" placeholder='Enter your password' className="py-2 pl-2 text-[20px] border-2 ml-5 mb-10 pr-[40px] rounded-xl w-[40rem]" min='8'/>
            </div>
            <button className="rounded-xl ml-[18rem] my-8 text-white bg-red hover:bg-light-red mb-[20px] text-[20px] py-2 px-5">Sign Up</button>
           </form>
           <h1 className='text-[20px] pb-[20px] pl-10'>Already have an account? <Link to='/login' className='text-blue'>Login here</Link></h1>
        </div>
      </div>
    </>
  )
}

export default Register
