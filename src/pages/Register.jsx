import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';

const Register = () => {
  const [userType, setUserType] = useState('patient'); // Default user type is patient
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: 0,
    user_type: userType,
    patient_data: {
      name: '',
      age: 0,
      gender: '',
      phone_number: 0,
    },
    doctor_data: {
      specialization: '',
      availability: false,
      hospital: '',
      name: '',
      age:0,
      phone_number: 0,
    },
  });

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'user_type') {
      setUserType(value);
      setFormData({
        ...formData,
        [name]: value,
        doctor_data: value === 'doctor' ? { specialization: '', hospital: '' } : {},
      });
    } else if (name === 'gender') {
      setFormData({
        ...formData,
        patient_data: {
          ...formData.patient_data,
          [name]: value,
        },
      });
    } else if (userType === 'doctor') { // Check if userType is doctor
      setFormData({
        ...formData,
        doctor_data: {
          ...formData.doctor_data,
          [name]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('response', res);
      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate('/');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  const navigate = useNavigate();

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
                onChange={(e) => handleInputChange(e)}
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
              <label htmlFor='phoneNumber' className='pl-8 text-[20px] pt-10 pb-5'>
                Phone Number:
              </label>
              <input
                type='text'
                placeholder='Enter your phone Number'
                className=' py-2 pl-2 text-[20px] border-2 ml-5 w-[40rem] rounded-xl'
                value={formData.phoneNumber}
                name='phone_number'
                onChange={handleInputChange}
                id='phoneNumber'
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
              <label htmlFor='gender' className='pl-8 text-[20px] pt-10 pb-5'>
                Gender:
              </label>
              <input
                type='text'
                placeholder='M-male F-female O-other'
                className='py-2 pl-2 text-[20px] border-2 ml-5 rounded-xl pr-[40px] w-[40rem]'
                value={formData.patient_data.gender}
                name='gender'
                onChange={(e) => handleInputChange(e)}
                id='gender'
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
                    value={formData.doctor_data.specialization}
                    name='specialization'
                    onChange={(e) => handleInputChange(e)}
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
                    value={formData.doctor_data.hospital}
                    name='hospital'
                    onChange={(e) => handleInputChange(e)}
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
