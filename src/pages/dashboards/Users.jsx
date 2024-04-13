import React from 'react'

const Users = () => {
  return (
    <>
      <div className="hero-container">
        <h1 className="text-animation pl-5 font-sans font-semibold text-[5.5rem]">Hi There...</h1>
        <h1 className="text-animation font-semibold px-[15rem] text-[5.5rem]">Pranaveeee</h1>
      </div>
      <div className='text-animation w-[45rem] h-1 bg-black'></div>
      <div className='pt-[30px] pl-7'>
      <label htmlFor="" className='text-[35px] text-red'>Search for a Doctor</label>
      <input type="text" placeholder="Search here" className='block  pr-[16rem] mt-7 py-3 rounded-[15px] pl-[50px] border-2 text-[20px]'/><IconContext.Provider value= {{className: 'text-[35px] -translate-y-[45px] pl-3 absolute'}}>
      <FaSearch/>
      </IconContext.Provider>
      </div>
    </>
  )
}

export default Users
