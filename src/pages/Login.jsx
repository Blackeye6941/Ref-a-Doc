import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDoctorLogin = () => {
    // Implement doctor login logic here
  };

  const handlePatientLogin = () => {
    // Implement patient login logic here
  };

  return (
    <>
      <div>
        <div className=' mx-[30rem] pb-[2rem] mt-5 rounded-[30px] border-2 border-red'>
            <h1 className='text-[40px] py-10 font-mono text-center text-red'>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className='text-[25px] pt-[30px] pl-5'>Email: </label>
                <input type="Email" placeholder='Enter the Name' id="email" className='block mx-5 py-[2px] my-4 text-[25px] rounded-[10px] border-2 border-red pl-6 pr-[13rem]' name='email' onChange={handleInputChange}/>
                <label htmlFor="pass" className='text-[25px] pt-[30px] pl-5 mb-[20px]'>Password: </label>
                <input type="password" placeholder='Enter the Password' id="pass" className='block mx-5 my-4 py-[2px] text-[25px] rounded-[10px] border-2 border-red pl-6 pr-[13rem] ' name='password' onChange={handleInputChange}/>

                 <Link><button className='bg-red text-white text-[25px] px-5  py-[3px] ml-[20px] mt-[50px] rounded-[10px] hover:bg-lightred' onClick={handleDoctorLogin}>Login as Doctor</button></Link>
                 <Link><button className='bg-red text-white text-[25px] px-5  py-[3px] ml-[90px] mt-[50px] rounded-[10px] hover:bg-lightred' onClick={handlePatientLogin}>Login as Patient</button></Link>
                 <h1 className='text-[20px] pt-[20px] pl-6'>Don't have an account? <Link to='/register' className='text-blue underline'>Register Here</Link></h1>
            </form>
        </div>
      </div>
    </>
  )
}

export default Login
