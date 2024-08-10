import Image from "next/image"

type Props = {
    textColor?: string 
    text: string
    title: string
    src: string
}

const WhyUsItem1 = ({textColor='white', title, src, text }: Props) => {
    return(
        <div className={`flex flex-row md:flex-col mb-4 md:mb-0 text-${textColor}`}>
            <span className='h-[51px] w-[51px] min-w-[51px] flex items-center bg-[#0F52FF61] rounded-[10px] mr-4 md:mr-0'>
                <Image src={src} className='mx-auto' alt='Questions comment' width={21} height={21} />
            </span>
            <div className="flex flex-col gap-2  md:mt-4">
                <h3 className='font-bold text-[16px] md:text-[24px] md:mt-3'>{ title }</h3>
                <p className='font-normal text-[14px] md:text-[16px]'>
                    { text }
                </p>
            </div>
        </div>
    )
}

export default WhyUsItem1