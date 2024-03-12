import React from 'react'

const OurStats = () => {
  return (
    <div className='flex flex-col lg:flex-row mt-16 lg:mt-32 w-full justify-center lg:gap-20'>
      <div className='flex flex-col items-center'>
        <p className='text-[36px] lg:text-[40px] font-semibold text-onSecondary'>5</p>
        <p className='text-[20px] lg:text-[28px] font-semibold text-tertiary'>branduri partenere</p>
      </div>
      <div className='flex flex-col items-center mt-16 lg:mt-0'>
        <p className='text-[36px] lg:text-[40px] font-semibold text-onSecondary'>7+</p>
        <p className='text-[20px] lg:text-[28px] font-semibold text-yellow'>ani de activitate</p>
      </div>
      <div className='flex flex-col items-center mt-16 lg:mt-0'>
        <p className='text-[36px] lg:text-[40px] font-semibold text-onSecondary'>4</p>
        <p className='text-[20px] lg:text-[28px] font-semibold text-[#FB8351]'>birouri în Romania</p>
      </div>
    </div>
  )
}

export default OurStats