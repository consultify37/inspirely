import Image from "next/image";
import Link from "next/link";

const Item2About = () => {
    return(
        <div className='w-full mt-16 mx-auto px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] flex gap-y-20 gap-5 justify-between flex-col-reverse md:flex-row z-[2]'>
            <div className='relative w-full md:w-auto'>
                <Image src='/images/home-about-2.png' alt='About home 2' className='rounded-[28.5px] w-full md:w-[450px] mx-auto lg:mx-0' object-fit='cover' placeholder='blur' width={400} height={400} blurDataURL='/images/home-about-1.png' />
                <Image src='/images/polygon 1.svg' className='absolute left-[-1.25rem] lg:left-[-4.25rem] bottom-[-2rem] rotate-2 w-[100px] lg:w-[150px]' width={150} height={150} alt='Polygon img' />
            </div>
            <div className='w-full md:w-[48%] font-light'>
                <h2 className='text-xl font-bold text-onSecondary z-[2] md:text-xl lg:text-2xl xl:text-4xl'>Misiunea noastră este:</h2>
                <p className='text-white text-[16px] mt-5 max-w-[560px]'>
                    Misiunea noastră la Inspirely este să oferim soluții integrate și personalizate pentru a sprijini afacerile în fiecare etapă a dezvoltării lor. Prin platforma noastră de e-commerce, oferim o gamă variată de produse și servicii digitale, disponibile pentru achiziție directă online, asigurând acces rapid la tot ceea ce ai nevoie pentru a-ți dezvolta afacerea eficient. 
                    Reunind expertiza brandurilor Consultify, Socialy și Creditfy, ne dedicăm să furnizăm consultanță de top, strategii de marketing eficiente și soluții de creditare avantajoase.
                </p>
                <ul className='list-none mt-4'>
                    <li className='flex gap-5 items-start'>
                        <span className='text-onTertiary px-[15px] w-8 h-8 rounded-[50%] bg-tertiary flex items-center justify-center font-semibold'>1</span>
                        <p className='text-white text-[16px]'>Furnizarea de soluții complete și integrate pentru afaceri, acoperind consultanța în fonduri europene, marketing-ul și brokerajul in credite.</p>
                    </li>
                    <li className='flex gap-5 items-start mt-4'>
                        <span className='text-onPrimary px-[15px] w-8 h-8 rounded-[50%] bg-primary flex items-center justify-center font-semibold'>2</span>
                        <p className='text-white text-[16px]'>Maximizarea succesului clienților noștri prin strategii inovatoare și personalizate.</p>
                    </li>
                    <li className='flex gap-5 items-start mt-4'>
                        <span className='text-onYellow px-[15px] w-8 h-8 rounded-[50%] bg-yellow flex items-center justify-center font-semibold'>3</span>
                        <p className='text-white text-[16px]'>Dezvoltarea unor parteneriate puternice și durabile cu companii din diverse domenii.</p>
                    </li>
                </ul>
                <div className='flex gap-6 mt-6'>
                    <Link href='/shop' className='py-3 bg-primary font-semibold text-onPrimary flex items-center rounded-[28.5px] px-12 transition-all hover:scale-[1.05]'>Shop</Link>
                    <Link href='/divizii' className='py-3 bg-transparent font-semibold text-onSecondary flex items-center rounded-[28.5px] border-2 border-tertiary px-12 transition-all hover:scale-[1.05]'>Divizii</Link>
                </div>
            </div>
        </div>
    )
}
export default Item2About
