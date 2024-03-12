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
        <h2 className='text-secondary font-bold text-xl mb-6 md:text-xl lg:text-2xl xl:text-3xl'>Misiunea Inspirely</h2>
        <p className='text-secondary font-normal text-[14px] md:text-base mt-5'>
          Ne propunem să oferim soluții personalizate și eficiente clienților noștri, ajutându-i să-și realizeze proiectele. De la început, misiunea noastră a fost să simplificăm accesarea fondurilor europene și să sprijinim antreprenorii în obținerea finanțărilor necesare pentru dezvoltarea afacerilor lor. Pe lângă aceste obiective, dorim să le subliniem și pe urmatoarele: 
        </p>
        <p className='text-secondary font-normal text-[14px] md:text-base mt-5'>
          Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
        </p>
        <div className='flex gap-4 mt-6'>
            <Link href='/divizii' className='py-3 text-[14px] lg:text-[16px] border-2 border-tertiary text-onTertiary rounded-[28.5px] font-semibold px-12 hover:scale-[1.05] transition-all'>Divizii</Link>
            <Link href='/contact' className='py-3 text-[14px] lg:text-[16px] bg-transparent text-onYellow rounded-[28.5px] bg-yellow font-semibold px-12 hover:scale-[1.05] transition-all'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Item2Story;
