import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '../config';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      console.log('Response:', res); // Log the raw response
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await res.json();
      console.log('Data:', data); // Log the parsed JSON data
      // Rest of your code...
    } catch (err) {
      console.error('Error:', err);
      setLoading(false);
    }
  };
  
  
  
  const handleGetResponse = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}users/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
        // Add any necessary query parameters or headers
      });
      const data = await res.json();
      console.log('GET response:', data); // Log the response data to the console
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className=' mx-[30rem] pb-[2rem] mt-5 rounded-[30px] border-2 border-red'>
          <h1 className='text-[40px] py-10 font-mono text-center text-red'>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className='text-[25px] pt-[30px] pl-5'>Email: </label>
            <input onChange={handleInputChange} name='email' type="Email" placeholder='Enter the Name' id="email" className='block mx-5 py-[2px] my-4 text-[25px] rounded-[10px] border-2 border-red pl-6 pr-[13rem]' />
            <label htmlFor="pass" className='text-[25px] pt-[30px] pl-5 mb-[20px]'>Password: </label>
            <input onChange={handleInputChange} name='password' type="password" placeholder='Enter the Password' id="pass" className='block mx-5 my-4 py-[2px] text-[25px] rounded-[10px] border-2 border-red pl-6 pr-[13rem] ' />

            <button type="submit" className='bg-red text-white text-[25px] px-5  py-[3px] ml-[230px] mt-[20px] rounded-[10px] hover:bg-lightred'>Login</button>
            <button className='bg-blue text-white text-[25px] px-5  py-[3px] ml-[230px] mt-[20px] rounded-[10px] hover:bg-lightblue' onClick={handleGetResponse}>Get Response</button>
            <h1 className='text-[20px] pt-[20px] pl-6'>Don't have an account? <Link to='/register' className='text-blue underline'>Register Here</Link></h1>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
