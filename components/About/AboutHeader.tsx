import Image from "next/image"
import PageHeader from "../Header/PageHeader"

const AboutHeader = () => {
    return(
        <PageHeader
            title="Avem o experiență de peste 7 ani în consultanță în afaceri"
        >
            <Image src='/images/circle-hero-left.svg' width={150} height={150} className='absolute -left-4 -top-28 lg:-top-44 lg:left-0 lg:w-[250px]' alt='Circle hero green' />
            <Image src='/images/triangle-about.svg' width={100} height={100} className='absolute bottom-28 lg:bottom-5 right-8 lg:right-16 w-[90px] lg:w-[130px] z-10' alt='Yellow triangle' />
        </PageHeader>
    )
}

export default AboutHeader