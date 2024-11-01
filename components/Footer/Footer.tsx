import Image from "next/image"
import Link from "next/link"
import { email, facebook, instagram, tiktok } from "../../utils/constants"

const Footer = () => {
    return (
        <footer className='w-full mt-12 md:mt-24'>
            <div className='flex flex-wrap flex-col justify-between md:flex-row gap-10 px-7 md:px-12'>
                <div className='flex flex-col gap-2 w-full lg:max-w-[20%]'>
                    <Image src='/images/logo-invert.svg' alt='Footer logo' width={200} height={53} className='aspect-auto w-[177px] md:w-[200px]' />
                    <p className='text-secondary text-[14px] md:text-[16px] mt-4'>
                        Inspirely este partenerul tău de încredere în obținerea finanțărilor nerambursabile, oferind soluții personalizate pentru dezvoltarea afacerii tale.
                    </p>
                </div>
                <div className='flex flex-col gap-1 lg:max-w-[20%]'>
                    <h3 className='font-bold text-secondary text-[24px]'>Navigație</h3>
                    <ul className='list-none flex flex-col gap-1'>
                        <li>
                            <Link href='/' className='font-semibold text-primary text-[16px]'>Acasă</Link>
                        </li>
                        <li>
                            <Link href='/despre' className='font-semibold text-primary text-[16px]'>Despre</Link>
                        </li>
                        <li>
                            <Link href='/divizii' className='font-semibold text-primary text-[16px]'>Divizii</Link>
                        </li>
                        <li>
                            <Link href='https://consultify.ro/blog' className='font-semibold text-primary text-[16px]'>Blog</Link>
                        </li>
                        {/* <li>
                            <Link href='/shop' className='font-semibold text-primary text-[16px]'>Shop</Link>
                        </li> */}
                        <li>
                            <Link href='/contact' className='font-semibold text-primary text-[16px]'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-1 lg:max-w-[20%]'>
                    <h3 className='font-bold text-secondary text-[24px]'>Legal</h3>
                    <ul className='list-none flex flex-col gap-1'>
                        <li>
                            <p className='font-semibold text-primary text-[16px]'>MHC INSPERON SRL</p>
                        </li>
                        <li>
                            <p className='font-semibold text-primary text-[16px]'>J40/6137/2020</p>
                        </li>
                        <li>
                            <p className='font-semibold text-primary text-[16px]'>RO42607998</p>
                        </li>
                        <li>
                            <Link href='/termeni' className='font-semibold text-primary text-[16px]'>Termeni și Condiții</Link>
                        </li>
                        <li>
                            <Link href='/politica-cookie' className='font-semibold text-primary text-[16px]'>Politica Cookies</Link>
                        </li>
                        <li>
                            <Link href='/politica-confidentialitate' className='font-semibold text-primary text-[16px]'>Politică de Confidențialitate</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-1 lg:max-w-[20%]'>
                    <h3 className='font-bold text-secondary text-[24px]'>Contact</h3>
                    <ul className='list-none flex flex-col gap-1'>
                        <li>
                            <p className='font-semibold text-primary text-[16px]'>Adresa: Strada Crișul Alb, Numărul 6, Sector 4, București.</p>
                        </li>
                        <li>
                            <Link href='tel:+40727153317' className='font-semibold text-primary text-[16px]'>Număr de telefon: 0771 059 932</Link>
                        </li>
                        <li>
                            <Link href={`mailto:${email}`} className='font-semibold text-primary text-[16px]'>Email: {email}</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col lg:max-w-[20%]">
                    <h3 className='font-bold text-secondary text-[24px]'>Social Media</h3>
                    <div className='flex flex-col gap-2'>
                        <Link href='https://anpc.ro/ce-este-sal/' target="_blank">
                            <Image src='/images/anpc.png' alt='Anpc logo' width={180} height={49} className='aspect-auto' />
                        </Link>
                        <Link href='https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage' target="_blank">
                            <Image src='/images/litigii.png' alt='Litigii logo' width={180} height={49} className='aspect-auto' />
                        </Link>
                    </div>
                    <div className='flex flex-row gap-6 mt-4'>
                        <Link href={facebook} target="_blank">
                            <Image
                                src="/images/contact/facebook.svg"
                                alt="facebook"
                                width={60}
                                height={60}
                                className="z-[5] w-[30px] h-[30px]"
                            />
                        </Link>

                        <Link href={instagram} target="_blank">
                            <Image
                                src="/images/contact/instagram.svg"
                                alt="instagram"
                                width={60}
                                height={60}
                                className="z-[5] w-[30px] h-[30px]"
                            />
                        </Link>

                        <Link href={tiktok} target="_blank">
                            <Image
                                src="/images/contact/tiktok.svg"
                                alt="tiktok"
                                width={60}
                                height={60}
                                className="z-[5] w-[30px] h-[30px]"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='w-full mt-5 text-center px-7 md:px-12'>
                <p className='text-primary text-[16px] font-normal border-t-[3px] border-secondary py-4 px-4 md:px-0'>
                    Copyright © 2020-2024 {process.env.SITE} | Toate drepturile sunt rezervate.
                    {/* | Made with love by &nbsp; */}
                    {/* <Link href='https://marize.io' className="hover:text-[#8817f89b]" target='_blank'>Marize</Link> */}
                </p>
            </div>
        </footer>
    )
}

export default Footer