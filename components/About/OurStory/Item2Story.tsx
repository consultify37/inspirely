import Image from "next/image";
import Link from "next/link";

const Item2Story = () => {
  return (
    <div className='flex flex-wrap-reverse lg:flex-wrap gap-y-10 gap-x-[6rem] mt-10 md:mt-32 justify-between items-center'>
      <div className='relative w-full md:md:max-w-[450px]'>
        <Image src='/images/About/Pag - despre noi - structura calitati.jpg' alt='About home 2' className='rounded-[28.5px] w-full md:w-[450px] md:h-[400px] object-cover mx-auto lg:mx-0' object-fit='cover' placeholder='blur' width={400} height={400} blurDataURL='/images/About/Pag - despre noi - structura calitati.jpg' />
        <Image src='/images/patrat.svg' className='absolute left-[-1.25rem] lg:left-[-4.25rem] bottom-[-2rem] rotate-2 w-[150px]' width={150} height={150} alt='Polygon img' />
      </div>
      <div className='w-full xl:max-w-[48%]'>
        <h2 className='text-secondary font-bold text-xl mb-6 md:text-xl lg:text-2xl xl:text-3xl'>Misiunea Inspirely:</h2>
        <p className='text-secondary font-normal text-[14px] md:text-base mt-5'>
          La Inspirely, sprijinim afacerile în fiecare etapă a dezvoltării lor prin soluții integrate și personalizate. Credem în colaborare și inovație pentru a transforma provocările în oportunități. Oferim consultanță de top în accesarea fondurilor europene prin Consultify, strategii de marketing eficiente prin Socialy și soluții de creditare avantajoase prin Creditfy. Ne angajăm să fim partenerul tău de încredere, asigurându-ne că ai toate resursele necesare pentru a-ți atinge obiectivele și a-ți dezvolta afacerea. Pe lângă asta ne-am propus următoarele targete:
        </p>
        {/* <p className='text-secondary font-normal text-[14px] md:text-base mt-5'>
          //
        </p> */}
        <ul className='list-none mt-4'>
            <li className='flex gap-5 items-start'>
                <span className='text-onTertiary px-[15px] w-8 h-8 rounded-[50%] bg-tertiary flex items-center justify-center font-semibold'>1</span>
                <p className='text-secondary text-[14px] md:text-base'>Obținerea a 400 de finanțări nerambursabile noi în următorul an.</p>
            </li>
            <li className='flex gap-5 items-start mt-4'>
                <span className='text-onPrimary px-[15px] w-8 h-8 rounded-[50%] bg-primary flex items-center justify-center font-semibold'>2</span>
                <p className='text-secondary text-[14px] md:text-base'>Creșterea vizibilității online pentru 200 de afaceri prin campanii de marketing personalizate.</p>
            </li>
            <li className='flex gap-5 items-start mt-4'>
                <span className='text-onYellow px-[15px] w-8 h-8 rounded-[50%] bg-yellow flex items-center justify-center font-semibold'>3</span>
                <p className='text-secondary text-[14px] md:text-base'>Facilitarea accesului la credite avantajoase pentru 150 de companii.</p>
            </li>
        </ul>
        <div className='flex gap-4 mt-6 md:mt-8'>
            <Link href='/divizii' className='py-3 text-[14px] lg:text-[16px] border-2 border-tertiary text-onTertiary rounded-[28.5px] font-semibold px-12 hover:scale-[1.05] transition-all'>Divizii</Link>
            <Link href='/contact' className='py-3 text-[14px] lg:text-[16px] bg-transparent text-onYellow rounded-[28.5px] bg-yellow font-semibold px-12 hover:scale-[1.05] transition-all'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Item2Story;
