import Image from 'next/image'
import React from 'react'
import Stars from '../About/Stars'
import Link from 'next/link'

type Props = {
  data: {
    id: number
    title: string
    description: string
    experience: number
    transperancy: number
    feedback: number
    hr: number
    primary: string
    onPrimary: string
    background: string
    logo: string
    rating: number
  }
}

const DivisionBigCard = ({ data }: Props) => {
  return (
    <div 
      className={'relative w-full rounded-[18px] ' + (data.id == 0 ? 'mt-16 lg:mt-32' : 'mt-32 lg:mt-40')}
      style={{backgroundColor: data.background}}
    >
      <div className='relative w-full rounded-t-[18px]'>
        <Image 
          src='/images/divizii/8228a77d4e03af852a0d4c74e0d6a45c.jpeg'
          width={4096}
          height={2646}
          alt='.'
          className='w-full h-[400px] object-cover rounded-t-[18px]'
        />
        <div className='absolute inset-0 w-full h-full bg-black opacity-[56%] rounded-t-[18px]'></div>
        <Image 
          src={data.logo}
          width={4096}
          height={2646}
          alt='.'
          className='absolute m-auto top-0 bottom-0 left-0 right-0  w-[180px] lg:w-[240px] z-[1]'
        />
      </div>

      <div className='flex flex-col px-6 lg:flex-row'>
        <div className='flex flex-col lg:w-1/2'>
          <Stars 
            numberOfStars={data.rating}
          />

          <div className="flex flex-row mt-4 items-center">
            <div className="w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] border-2 rounded-md mr-4" style={{borderColor: data.primary}}>
              <div className="rounded-e-md p-1 py-[2px]" style={{width: (data.experience/2).toString()+'%', backgroundColor: data.primary}}>
                <p className="text-[14px] font-semibold" style={{ color: data.onPrimary}}>Experiență</p>
              </div>
            </div>
            <p className="text-onSecondary font-semibold text-[15px] min-w-[68px]">{data.experience} / 200</p>
          </div>

          <div className="flex flex-row mt-[10px] items-center">
            <div className="w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] border-2 rounded-md mr-4" style={{borderColor: data.primary}}>
              <div className="rounded-e-md p-1 py-[2px]" style={{width: (data.transperancy/2).toString()+'%', backgroundColor: data.primary}}>
                <p className="text-[14px] font-semibold" style={{color: data.onPrimary}}>Transparență</p>
              </div>
            </div>
            <p className="text-onSecondary font-semibold text-[15px] min-w-[68px]">{data.transperancy} / 200</p>
          </div>

          <div className="flex flex-row mt-[10px] items-center" >
            <div className="w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] border-[#079800] border-2 rounded-md mr-4" style={{borderColor: data.primary}}>
              <div className="rounded-e-md p-1 py-[2px]" style={{width: (data.feedback/2).toString()+'%', background: data.primary}}>
                <p className=" text-[14px] font-semibold" style={{color: data.onPrimary}}>Feedback</p>
              </div>
            </div>
            <p className="text-onSecondary font-semibold text-[15px] min-w-[68px]">{data.feedback} / 200</p>
          </div>

          <div className="flex flex-row mt-[10px] items-center">
            <div className="w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] border-2 rounded-md mr-4" style={{borderColor: data.primary}}>
              <div className=" rounded-e-md p-1 py-[2px]" style={{width: (data.hr/2).toString()+'%', background: data.primary}}>
                <p className="text-[14px] font-semibold" style={{color: data.onPrimary}}>Resurse umane</p>
              </div>
            </div>
            <p className="text-onSecondary font-semibold text-[15px] min-w-[68px]">{data.hr} / 200</p>
          </div>
        </div>

        <div className='hidden lg:block ml-12 mt-6 w-1/2'>
          <h2 className='text-[22px] text-onSecondary font-bold'>{data.title}</h2>
          <p className='text-onSecondary text-[14px] mt-4'>{data.description}</p>
        </div>
      </div>

      <Link
        href='https://consultify.ro'
        className='relative px-12 lg:px-16 flex items-center justify-center mt-4 lg:mt-8 top-6 rounded-full w-fit mx-auto py-4 hover:scale-105 transition-all'
        style={{backgroundColor: data.primary}}
      >
        <p 
          className='text-[14px] font-semibold'
          style={{color: data.onPrimary}}
        >
          Vizitează website-ul
        </p>
      </Link>

      {
        data.id == 0 &&
        <Image 
          src='/images/divizii/path94.svg'
          width={64}
          height={64}
          alt='.'
          className='absolute z-[-1] w-[120px] -left-2 -bottom-[120px] lg:-bottom-[140px] lg:left-auto lg:right-32 lg:w-[140px] h-auto'
        />
      }
      {
        data.id == 1 &&
        <Image 
          src='/images/divizii/path94 (1).svg'
          width={64}
          height={64}
          alt='.'
          className='absolute z-[-1] w-[120px] -right-2 -bottom-[120px] lg:-bottom-[140px] lg:right-auto lg:left-32 lg:w-[140px] h-auto'
        />
      }
    </div>
  )
}

export default DivisionBigCard