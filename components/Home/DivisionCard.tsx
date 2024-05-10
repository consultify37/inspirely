import Image from 'next/image'
import React from 'react'
import Stars from '../About/Stars'
import Link from 'next/link'

type Props = {
  code: string
  numberOfStars: number
  title: string
  bulletPoints: string[]
  description: string
  logo: string
  theme: {
    backgroundColor: string
    cardColor: string
    primaryColor: string
    triangle: string
    polygon: string
    circle: string
  }
}

const DivisionCard = ({ bulletPoints, description, logo, numberOfStars, title, theme, code }: Props) => {
  return (
    <div 
      className='w-full relative flex flex-col lg:flex-row justify-end rounded-[20px] mx-1 sm:mx-8 p-6 lg:px-16 py-8 lg:py-16 pb-24 lg:pb-32'
      style={{backgroundColor: theme.backgroundColor }}
    >
      <div className='flex flex-col lg:w-[calc(100%-280px-48px)]'>
        <p className='text-[20px] font-extrabold text-white sm:hidden'>{ code } - </p>
        <p className='text-[20px] font-extrabold text-white sm:hidden'>{ title }</p>

        <p className='text-[20px] lg:text-[28px] font-extrabold text-white hidden sm:block'>{ code } - { title }</p>

        <p className='text-[13px] text-white mt-6 lg:text-[15px]'>{ description }</p>
      </div>

      <div className='w-[85%] max-w-[calc(0.80*640px)] sm:w-[80%] sm:max-w-[calc(0.65*768px)] md:w-[65%] lg:max-w-[280px] absolute self-center lg:self-auto lg:left-16 flex flex-col items-center -bottom-60 lg:-bottom-[102px] p-4 py-6 rounded-[18px]' style={{backgroundColor: theme.cardColor }}>
          <div className='w-[240px] px-8'>
            <Image 
              src={logo}
              width={256}
              height={256}
              alt='.'
              className='w-full h-auto'
            />
          </div>

          <Stars 
            numberOfStars={code == 'Creditfy' ? null : numberOfStars}
          />

          <ul className="list-disc list-inside mt-4">
            { bulletPoints.map((bulletPoint, index) => (
              <li key={index} className="text-white font-semibold text-[15px] xl:text-base mb-4">{ bulletPoint }</li>
            ))}
          </ul>
          { code != 'Creditfy' ?
            <Link 
              className="py-3 mt-2  flex items-center rounded-[28.5px] font-semibold px-11 text-center text-[14px] md:text-[16px] sm:px-12 hover:scale-[1.05] transition-all" 
              href={`https://${code}.ro`}
              target='_blank'
              style={{backgroundColor: theme.primaryColor, color: code == 'Socialy' ? '#000' : '#FFF'}}
            >
              Vezi mai mult
            </Link> :
            <div 
              className="py-3 mt-2  flex items-center rounded-[28.5px] font-semibold px-11 text-center text-[14px] md:text-[16px] sm:px-12" 
              style={{backgroundColor: theme.primaryColor, color: '#FFF'}}
            >
              Coming soon...
            </div>
          }
        </div>

        <svg width="163" height="87" viewBox="0 0 163 87" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden lg:block absolute top-0 left-0'>
          <circle cx="55" cy="-21" r="105" stroke={theme.circle} strokeWidth="6"/>
        </svg>

        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden lg:block absolute top-20 left-64'>
          <path d="M0.920043 10.825C-0.686365 4.87982 4.7455 -0.5749 10.6974 1.00651L65.2986 15.514C71.2505 17.0954 73.2585 24.5269 68.913 28.8906L29.0486 68.9229C24.7031 73.2867 17.2632 71.3099 15.6568 65.3647L0.920043 10.825Z" fill={theme.triangle}/>
        </svg>

        <svg width="105" height="106" viewBox="0 0 105 106" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden lg:block absolute bottom-2 right-24'>
          <path d="M61.0142 0.673111C66.4324 -0.132635 71.9227 1.57277 75.9309 5.30656L98.3454 26.1866C102.354 29.9204 104.443 35.2762 104.023 40.7379L101.674 71.2807C101.254 76.7424 98.3693 81.7156 93.8372 84.7924L68.493 101.999C63.9609 105.076 58.2744 105.921 53.0431 104.296L23.7889 95.2093C18.5576 93.5843 14.3509 89.6657 12.3597 84.5625L1.22446 56.025C-0.766758 50.9219 -0.325822 45.1897 2.42245 40.4512L17.7913 13.9525C20.5395 9.21392 25.296 5.98472 30.7143 5.17898L61.0142 0.673111Z" fill={theme.polygon}/>
        </svg>
    </div>
  )
}

export default DivisionCard