import React from 'react'

type Props = {
  textColor?: string 
  text: string
  title: string
  number: string
}

const WhyUsItem2 = ({textColor='white', title, text, number }: Props) => {
  return(
      <div className={`flex flex-row md:flex-col mb-4 md:mb-0 text-${textColor}`}>
          <div className="flex flex-col gap-2">
            <h3 className='font-bold text-[26px] md:text-[48px] leading-3 md:mt-2'>{ number }</h3>
              <h3 className='font-bold text-[16px] md:text-[24px] text-primary md:mt-2'>{ title }</h3>
              <p className='font-normal text-[14px] md:text-[16px]'>
                  { text }
              </p>
          </div>
      </div>
  )
}

export default WhyUsItem2