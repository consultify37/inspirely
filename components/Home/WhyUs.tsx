import React from 'react'
import Image from 'next/image'
import WhyUsItem2 from './Why-Us/WhyUsItem2'

type Props = {
    inverted?: boolean
}

const WhyUs = ({ inverted=false }: Props) => {
  return (
    <section id='why-us' className='mt-24 md:mt-40 w-full relative px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
        <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute rotate-90 top-12 right-16 w-[100px] hidden md:block' />
        <Image src='/images/About/Ellipse 34 (1).svg' alt='.' width={164} height={164} className='z-[1] absolute top-0 2xl:-top-12 left-0 w-[320px] 2xl:w-[360px] hidden lg:block' />
        <h2 
            className='text-primary text-center font-bold md:text-base text-xl lg:text-[36px] mb-12 lg:mb-32'
            style={{color: inverted ? "white" : "006CFF"}}
        >
            Rezultatele noastre:
        </h2>
        <div className='relative flex flex-wrap w-full lg:mt-10 justify-center items-center md:justify-between md:items-start gap-y-20'>
            {/* Left-Side */}
            <div className='relative mx-auto lg:mx-0'>
                <Image src='/images/contact/pag - contact - structura calitati.png' alt='Why-Us' className='relative rounded-[35px] z-[2] w-[400px]' width={350} height={400} placeholder='blur' blurDataURL='/images/About/Pag - despre noi - structura misiunea noastra.png' />
                <Image src='/images/About/Rectangle 392 (1).svg' alt='triangle' width={164} height={164} className='z-[10] absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-[80px] md:w-[110px]' />
            </div>
            {/* Right-Side */}
            <div className='mx-auto lg:mx-0 w-full z-[2] lg:w-[49%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
              <WhyUsItem2 
                  number='200+'
                  text="Peste 200 de produse digitale și servicii au fost achiziționate prin platforma noastră de e-commerce, ajutând afacerile să își optimizeze procesele și să crească eficiența."
                  title="Produse Cumpărate"
                  textColor={inverted ? "white" : "secondary"}
              />
              <WhyUsItem2 
                  number='3+'
                  text="Inspirely reunește trei divizii de top: Consultify pentru consultanță în fonduri europene, Socialy pentru strategii de marketing și Creditfy pentru soluții de creditare, oferind soluții integrate pentru dezvoltarea afacerilor."
                  title="Divizii Inspirely"
                  textColor={inverted ? "white" : "secondary"}
              />
              <WhyUsItem2 
                  number='1000+'
                  text="Peste 1000 de clienți au beneficiat de serviciile oferite de diviziile noastre, contribuind la succesul și creșterea afacerilor lor prin consultanță, marketing și soluții de creditare."
                  title="Clienți Mulțumiți"
                  textColor={inverted ? "white" : "secondary"}
              />
              <WhyUsItem2 
                  number='25+'
                  text="Am dezvoltat peste 25 de parteneriate durabile cu companii din diverse industrii, asigurând acces la resurse și soluții diverse pentru clienții noștri."
                  title="Parteneriate Durabile"
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