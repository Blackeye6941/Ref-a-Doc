import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { IconContext } from "react-icons";

const Doctors = () => {
  return (
    <>
      <div className="hero-container">
        <h1 className="text-animation pl-5 font-sans font-semibold text-[5.5rem]">Hi There...</h1>
        <h1 className="text-animation font-semibold px-[15rem] text-[5.5rem]">Pranaveeee</h1>
      </div>
      <div className='text-animation w-[45rem] h-1 bg-black'></div>
      <div className='pt-[30px] pl-7'>
        <div className='text-[35px] text-red'>Are you available for consultation currently?</div>
        <button className='text-[30px] mt-10 px-10 bg-green rounded-lg hover:bg-lightgreen'>YES</button>
        <button className='text-[30px] mt-10 ml-[20rem] bg-red px-10 rounded-lg hover:bg-lightred'>NO</button>
      </div>
      <div className='pt-[25px] text-[25px] px-6'>This field gets updated daily!!</div>
      
    </>
  )
}

export default Doctors
