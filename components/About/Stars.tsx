import React from 'react'

type Props = {
  numberOfStars: number
}

const Stars = ({ numberOfStars }: Props) => {
  return (
    <div className='mt-4 flex flex-row'>
      <div className='flex flex-row items-center'>
        {
          [1,2,3,4,5].map((star) => (
            <div key={star}>
              { star <= Math.round(numberOfStars) ?
                <svg className='w-[18px] h-[18px] mr-1' viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.38491 0.360537C8.63663 -0.120179 9.36374 -0.120179 9.61546 0.360537L11.865 4.65726C11.9649 4.84823 12.1581 4.9804 12.3815 5.01108L17.4119 5.70005C17.9745 5.77719 18.1993 6.42905 17.792 6.80314L14.1521 10.1476C13.9905 10.2962 13.9166 10.5102 13.9548 10.7201L14.8141 15.4426C14.9103 15.9708 14.322 16.3737 13.8187 16.1243L9.31921 13.8947C9.11933 13.7956 8.8807 13.7956 8.6808 13.8947L4.18133 16.1243C3.67805 16.3736 3.08975 15.9708 3.18592 15.4426L4.0451 10.7201C4.08338 10.5102 4.00952 10.2962 3.84793 10.1476L0.207967 6.80314C-0.199293 6.42902 0.0254719 5.77719 0.588106 5.70005L5.61846 5.01108C5.84195 4.9804 6.03513 4.84823 6.13497 4.65726L8.38491 0.360537Z" fill="#FFCE00"/>
                </svg> : null
              }
            </div>
          ))
        }
      </div>
      <p className='text-[14px] md:text-[16px] text-[#FFCE00] ml-2 pt-1'>
        <span className='text-[#FFCE00]'>{numberOfStars}</span> / 5
      </p>
    </div>
  )
}

export default Stars