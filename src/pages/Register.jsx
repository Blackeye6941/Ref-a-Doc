import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [userType, setUserType] = useState('patient'); // Default user type is patient
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    phoneNumber: '',
    age: '',
    user_type:'patient',
    specialization: '',
    availability:'false',
    hospital: '',
    password: ''
  });

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
  };

  return (
    <>
      <div className='flex'>
        <div className='bg-red w-[40%] text-center py-[18rem]'></div>
        <div className='inline '>
          <h1 className='text-[2.5em] font-mono pl-8 pt-10'>Register</h1>
          <h1 className='text-[1.5rem] pl-8 pt-8'>Create an account here..</h1>
          <h1 className='pl-8 pt-4 text-[20px] pb-10'>Enter the details below</h1>
          <form onSubmit={handleSubmit}>
            <div className='flex md:flex-col'>
              <label htmlFor='name' className='pl-8 text-[20px] pt-10 pb-5'>
                Name:
              </label>
              <input
                type='text'
                placeholder='Enter your name'
                className='pl-2 text-[20px] border-2 ml-5 w-[40rem] rounded-xl py-2'
                value={formData.name}
                name='name'
                onChange={handleInputChange}
                id='name'
                required
              />
            </div>
            <div className='flex md:flex-col'>
              <label htmlFor='email' className='pl-8 text-[20px] pt-10 pb-5'>
                Email:
              </label>
              <input
                type='email'
                placeholder='Enter your email'
                className='pl-2 text-[20px] border-2 ml-5 w-[40rem] rounded-xl py-2'
                value={formData.email}
                name='email'
                onChange={handleInputChange}
                id='email'
                required
              />
            </div>
            <div className='flex md:flex-col'>
              <label htmlFor='pn' className='pl-8 text-[20px] pt-10 pb-5'>
                Phone Number:
              </label>
              <input
                type='text'
                placeholder='Enter your phone Number'
                className=' py-2 pl-2 text-[20px] border-2 ml-5 w-[40rem] rounded-xl'
                value={formData.phoneNumber}
                name='phoneNumber'
                onChange={handleInputChange}
                id='pn'
                required
              />
            </div>
            <div className='flex md:flex-col'>
              <label htmlFor='age' className='pl-8 text-[20px] pt-10 pb-5'>
                Age:
              </label>
              <input
                type='number'
                placeholder='Enter your age'
                className='py-2 pl-2 text-[20px] border-2 ml-5 rounded-xl pr-[40px] w-[40rem]'
                value={formData.age}
                name='age'
                onChange={handleInputChange}
                id='age'
                required
              />
            </div>
            <div className='flex md:flex-col'>
              <label htmlFor='value' className='pl-8 text-[20px] pt-10 pb-5'>
                User Type:
              </label>
              <select
                value={userType}
                onChange={handleUserTypeChange}
                className='py-2 pl-2 text-[20px] border-2 ml-5 rounded-xl' id='value' required
              >
                <option value='patient'>Patient</option>
                <option value='doctor'>Doctor</option>
              </select>
            </div>
            {userType === 'doctor' && (
              <>
                <div className='flex md:flex-col'>
                  <label
                    htmlFor='spec'
                    className='pl-8 text-[20px] pt-10 pb-5'
                  >
                    Specialization:
                  </label>
                  <input
                    type='text'
                    placeholder='Enter your specialization'
                    className='py-2 pl-2 text-[20px] border-2 ml-5 w-[40rem] rounded-xl'
                    value={formData.specialization}
                    name='specialization'
                    onChange={handleInputChange}
                    id='spec'
                    required
                  />
                </div>
                <div className='flex md:flex-col'>
                  <label
                    htmlFor='hos'
                    className='pl-8 text-[20px] pt-10 pb-5'
                  >
                    Hospital:
                  </label>
                  <input
                    type='text'
                    placeholder='Enter your hospital'
                    className='py-2 pl-2 text-[20px] border-2 ml-5 w-[40rem] rounded-xl'
                    value={formData.hospital}
                    name='hospital'
                    onChange={handleInputChange}
                    id='hos'
                    required
                  />
                </div>
              </>
            )}

            <div className='flex md:flex-col'>
              <label htmlFor='pass' className='pl-8 text-[20px] pt-10 pb-5'>
                Password:
              </label>
              <input
                type='password'
                placeholder='Enter your password'
                className='py-2 pl-2 text-[20px] border-2 ml-5 mb-10 pr-[40px] rounded-xl w-[40rem]'
                value={formData.password}
                name='password'
                onChange={handleInputChange}
                id='pass'
                required
              />
            </div>
            <button className='rounded-xl ml-[18rem] my-8 text-white bg-red hover:bg-light-red mb-[20px] text-[20px] py-2 px-5'>
              Sign Up
            </button>
          </form>
          <h1 className='text-[20px] pb-[20px] pl-10'>
            Already have an account?{' '}
            <Link to='/login' className='text-blue'>
              Login here
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Register;
