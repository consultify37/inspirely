import React from 'react'
import Image from 'next/image'
import WhyUsItem2 from './Why-Us/WhyUsItem2'

type Props = {
    inverted?: boolean
}

const WhyUs = ({ inverted=false }: Props) => {
  return (
    <section id='why-us' className='mt-16 md:mt-32 w-full relative px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
        <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute top-12 right-16 w-[100px] hidden md:block' />
        <Image src='/images/About/Ellipse 34 (1).svg' alt='.' width={164} height={164} className='z-[1] absolute top-0 2xl:-top-12 left-0 w-[320px] 2xl:w-[360px] hidden lg:block' />
        <h2 
            className='text-primary text-center font-bold md:text-base text-xl lg:text-2xl xl:text-4xl mb-12 lg:mb-32'
            style={{color: inverted ? "white" : "006CFF"}}
        >
            Iată rezultatele noastre
        </h2>
        <div className='relative flex flex-wrap w-full lg:mt-10 justify-center items-center md:justify-between md:items-start gap-y-20'>
            {/* Left-Side */}
            <div className='relative mx-auto lg:mx-0'>
                <Image src='/images/contact/pag - contact - structura calitati.png' alt='Why-Us' className='relative rounded-[35px] z-[2] w-[400px]' width={350} height={400} placeholder='blur' blurDataURL='/images/About/Pag - despre noi - structura misiunea noastra.png' />
                <Image src='/images/About/Rectangle 392 (1).svg' alt='triangle' width={164} height={164} className='z-[10] absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-[80px] md:w-[110px]' />
            </div>
            {/* Right-Side */}
            <div className='mx-auto lg:mx-0 w-full z-[2] lg:w-[49%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-y-8'>
              <WhyUsItem2 
                  number='500+'
                  text="Comunicare excelentă! Răspuns rapid și soluții eficiente pentru succesul proiectelor tale."
                  title="Comunicare"
                  textColor={inverted ? "white" : "secondary"}
              />
              <WhyUsItem2 
                  number='500+'
                  text="Echipă tânără, inovatoare și dinamică, aducând idei proaspete și abordări moderne."
                  title="Spirit tânăr"
                  textColor={inverted ? "white" : "secondary"}
              />
              <WhyUsItem2 
                  number='500+'
                  text="Oferim o abordare individuală pentru a ne asigura că satisfacem nevoile și obiectivele fiecărui client."
                  title="Abordare individuală"
                  textColor={inverted ? "white" : "secondary"}
              />
              <WhyUsItem2 
                  number='500+'
                  text="Profesionalismul nostru este evidențiat de abordarea noastră meticuloasă și atenția la detalii în fiecare proiect."
                  title="Profesionalism"
                  textColor={inverted ? "white" : "secondary"}
              />
            </div>          
        </div>
        {/* <Link href='#' className="bg-primary mt-12 flex font-semibold items-center justify-center w-[max-content] mx-auto justify-self-center px-16 py-3 md:py-4 text-onPrimary rounded-[28.5px] hover:scale-[1.05] transition-all">
            Vreau să completez!
        </Link> */}
    </section>
  )
}

export default WhyUs