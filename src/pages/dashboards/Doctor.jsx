import React from 'react'

const Doctor = () => {
  return (
    <>
      <div className='flex'>
        <div className='bg-lightred w-[32%] ml-[30px] pb-[3.5rem] mt-[40px] rounded-3xl text-animation'>
          <div className="pl-10 pt-10 text-white text-[30px] text-animation">Name : Dr.Pranav</div>
          <div className="text-white pl-10 pt-3 text-[30px] text-animation">Specialization : Neurology </div>
          <div className="text-white pl-10 pt-3 text-animation text-[30px]">Hospital : PRS Hospital</div>
          <div className="text-white pl-10 pt-3 text-animation text-[30px]">Is Available : Yes</div>
        </div>
        <div class="inline ml-10 mt-10 border-y-0 border-r-0 border-[5px] rounded-sm border-gray">
          <h1 className="text-[35px] pl-[5rem] pt-[40px] underline">Book Appointments</h1>
        </div>
      </div>
    </>
  )
}

export default Doctor
