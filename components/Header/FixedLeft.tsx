import Image from "next/image"
import Link from "next/link"

const FixedLeft = () => {
    return(
        <div>
            <div className='fixed top-[50%] hidden xl:flex flex-col gap-6 translate-y-[-50%] bg-white rounded-[38.5px] px-3 py-[41px] shadow-lg z-[9999] left-4'>
                <Link href='/' className='relative w-[56px] h-[56px]'>
                    <Image src='/images/left bar logos/logo-inspirely.svg' alt='Fixed 1' fill object-fit='contain' />
                </Link>
                <Link href='https://consultify.ro' target="_blank" className='relative w-[56px] h-[56px]'>
                    <Image src='/images/left bar logos/logo-consultify-bw.svg'  alt='Fixed 1' fill object-fit='contain' />
                </Link>
                <Link href='https://socialy.ro' target="_blank" className='relative w-[56px] h-[56px]'>
                    <Image src='/images/left bar logos/logo-socialy-bw.svg' alt='Fixed 1' fill object-fit='contain' />
                </Link>
            </div>
            <div className='fixed bottom-0 sm:hidden flex flex-row bg-white rounded-t-[40px] w-full justify-evenly -translate-x-4 py-4 pb-5 shadow-[0_25px_54px_-12px_rgba(0,0,0)] z-[9999] left-4'>
                <Link href='/' className='relative w-[50px] h-[50px]'>
                    <Image src='/images/left bar logos/logo-inspirely.svg' alt='Fixed 1' fill object-fit='contain' />
                </Link>
                <Link href='https://consultify.ro' target="_blank" className='relative w-[50px] h-[50px]'>
                    <Image src='/images/left bar logos/logo-consultify-bw.svg'  alt='Fixed 1' fill object-fit='contain' />
                </Link>
                <Link href='https://socialy.ro' target="_blank" className='relative w-[50px] h-[50px]'>
                    <Image src='/images/left bar logos/logo-socialy-bw.svg' alt='Fixed 1' fill object-fit='contain' />
                </Link>
            </div>
        </div>
    )
}

export default FixedLeft