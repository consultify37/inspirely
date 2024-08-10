import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import NewsLetter from "../../components/global/newsletter"
import Head from "next/head"
import toast from "react-hot-toast"
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import ReCAPTCHA from "react-google-recaptcha"
import PageHeader from "../../components/Header/PageHeader"
import ReactLoading from 'react-loading'
import { facebook, instagram, tiktok } from "../../utils/constants"
import WhyUs from "../../components/Home/WhyUs"
import TrustSRL from "../../components/Home/Trust"
import { collection } from "firebase/firestore"
 
export default function Contact() {
    const [nume, setNume] = useState('')
    const [prenume, setPrenume] = useState('')
    const [telefon, setTelefon] = useState('')
    const [email, setEmail] = useState('')
    const [mesaj, setMesaj] = useState('')
    const [nevoie, setNevoie] = useState('')
    const [cui, setCui] = useState('')
    const [firma, setFirma] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [newsletter, setNewsletter] = useState(true)

    const [isChecked, setIsChecked] = useState(false)
    const [captchaVerified, setCaptchaVerified] = useState(false)

    const upload = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        if (!isChecked) {
            toast.error('Acceptă termenii și condițiile mai întăi.')
            setIsLoading(false)
            return
        }

        if (!captchaVerified) {
            toast.error('Verifică Captcha mai întăi.')
            setIsLoading(false)
            return
        }

        try {
            const collectionRef = collection(db, 'contactForms')

            await addDoc(collectionRef, { nume, prenume, firma, cui, telefon, email, subscribe: newsletter, nevoie, mesaj, website: process.env.SITE, createdAt: serverTimestamp() } )
            newsletter && await addDoc(collection(db, 'newsletter'), { website: process.env.SITE, email: email })

            toast.success(`Mulțumim! Un reprezentant ${process.env.SITE} te va contacta în curând. 🚀`, { duration: 5000, style: { textAlign: 'center' } })
            setCui("")
            setEmail("")
            setIsChecked(false)
            setFirma("")
            setMesaj("")
            setNevoie("")
            setNume('')
            setPrenume('')
            setTelefon('')

        } catch (e) {
            setIsLoading(false)
            toast.error('Ceva nu a mers bine. Încearcă din nou!')
        }

        setIsLoading(false)
    }
  
    return (
        <>
            <Head>
                <title>{`${process.env.SITE} | Contact`}</title>
            </Head>
            <PageHeader
                title="Suntem aici pentru tine!"
            >
                <Image
                    src="/images/Polygon 3.svg"
                    alt="Hero blue circle"
                    width={100}
                    height={200}
                    className="absolute -right-8 md:right-28 top-28 md:top-4 z-[5] w-[96px] md:w-[160px]"
                />
                <Image
                    src="/images/circle-contact.svg"
                    width={130}
                    height={130}
                    className="absolute top-0 -left-32 md:left-32 md:bottom-0 w-[320px]"
                    alt="Yellow triangle"
                />
            </PageHeader>
            <div className="bg-[#F2F4FF] w-[100vw] h-[130vh] lg:h-[83vh] absolute top-0 left-0 z-[-1]"></div>
            <section className="w-full flex flex-col lg:flex-row items-start my-32 justify-between px-4 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <div className="flex flex-col w-full mr-12 bg-secondary rounded-3xl p-8">
                    <div className="flex flex-row mb-6">
                        <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-primary p-3 lg:p-4 h-[max-content] jutify-center mr-4">
                            <Image
                                src="/images/mail-white.svg"
                                alt="Hero blue circle"
                                width={60}
                                height={60}
                                className="z-[5] h-[max-content] w-[15px] lg:w-[36px] lg:h-[36px]"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h5 className="text-xl text-white font-bold">Email:</h5>
                            <Link href={`mailto:contact@inspirely.ro`} className="text-lg md:text:xl text-white font-bold hover:text-primary transition-all">contact@inspirely.ro</Link>
                        </div>
                    </div>
                    <div className="flex flex-row mb-6">
                        <div className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-xl bg-primary p-3 lg:p-4 h-[max-content] jutify-center mr-4">
                            <Image
                                src="/images/phone.svg" 
                                alt="Hero blue circle"
                                width={60}
                                height={60}
                                className="z-[5] h-[max-content] w-[15px] lg:w-[36px] lg:h-[36px]"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h5 className="text-xl text-white font-bold">Telefon:</h5>
                            <span className="text-lg md:text-xl text-white font-bold hover:text-primary transition-all"><Link href='tel:0771 059 932'>0771 059 932</Link></span>
                        </div>
                    </div>
                    <h6 className="text-xl text-white mb-4 font-bold text-center">Sau ne poți găsi și aici:</h6>
                    <div className="flex flex-row w-full justify-center">
                        <Link href={instagram} target="_blank" className="w-[-webkit-fill-available] max-w-[fit-content] flex items-center rounded-full bg-[#fff] p-5 lg:p-4 h-[max-content] jutify-center mr-2 hover:scale-105 transition-all">
                            <Image
                                src="/images/contact/instagram.svg"
                                alt="instagram"
                                width={60}
                                height={60}
                                className="z-[5] h-[max-content w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                            />
                        </Link>
                        <Link href={facebook} target="_blank" className="w-[-webkit-fill-available] max-w-[fit-content] ml-2 flex items-center rounded-full bg-[#fff] p-5 lg:p-4 h-[max-content] jutify-center mr-2 hover:scale-105 transition-all">
                            <Image
                                src="/images/contact/facebook.svg"
                                alt="facebook"
                                width={60}
                                height={60}
                                className="z-[5] w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                            />
                        </Link>
                        <Link href={tiktok} target="_blank" className="w-[-webkit-fill-available] max-w-[fit-content] ml-2 flex items-center rounded-full bg-[#fff] p-5 lg:p-4 h-[max-content] jutify-center mr-2 hover:scale-105 transition-all">
                            <Image
                                src="/images/contact/tiktok.svg"
                                alt="tiktok"
                                width={60}
                                height={60}
                                className="z-[5] w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                            />
                        </Link>
                    </div>
                </div>
                <form 
                    className="mt-12 lg:mt-0 lg:ml-12 rounded-3xl shadow-box bg-[#fff] w-full max-w-[1000px] p-8 px-4 md:px-8 flex flex-col"
                    onSubmit={upload}
                >
                    <h2 className="text-xl text-secondary font-bold mb-10 md:text-2xl text-center">Ia legătura cu noi!</h2>
                    <div className="flex w-full flex-col items-center md:flex-row justify-between mb-6">
                    <div className="flex flex-col w-full">
                            <span className="text-md mb-2 font-semibold">
                                Nume și prenume*
                            </span>
                            <input
                                required 
                                type="text"
                                name="Nume"
                                className="rounded-xl w-full border-primary text-ms leading-6 border-2 p-[14px] outline-none" 
                                placeholder="ex: Popescu Andrei"
                                onChange={(e) => setNume(e.target.value)}
                                value={nume}
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-between mb-6">
                        <div className="flex flex-col w-full md:mr-2">
                            <span className="text-md mb-2 font-semibold">
                                Telefon*
                            </span>
                            <PhoneInput
                                defaultCountry="ro"
                                value={telefon}
                                name="Telefon"
                                required
                                onChange={(phone) => setTelefon(phone)}
                                className="rounded-xl w-full border-primary text-ms leading-6 border-2 p-2 mb-6 outline-none"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <span className="text-md mb-2 font-semibold">
                                Email*
                            </span>
                            <input
                                required 
                                type="email"
                                name="Email"
                                className="rounded-xl w-full border-primary text-ms leading-6 border-2 p-[14px] outline-none" 
                                placeholder="ex: exemplu@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center md:flex-row justify-between mb-6 outline-none">
                        <div className="flex flex-col w-full md:w-[47%] md:mr-2 mb-6 md:mb-0">
                            <span className="text-md mb-2 font-semibold">
                                Nume firmă (opțional)
                            </span>
                            <input
                                type="text"
                                name="Nume Firma"
                                className="rounded-xl w-full border-primary text-ms leading-6 border-2 p-[14px] outline-none" 
                                placeholder="Nume firmă"
                                onChange={(e) => setFirma(e.target.value)}
                                value={firma}
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-[47%] md:mr-2">
                            <span className="text-md mb-2 font-semibold">
                                CUI (opțional)
                            </span>
                            <input
                                type="text"
                                name="CUI"
                                className="rounded-xl w-full border-primary text-ms leading-6 border-2 p-[14px] outline-none" 
                                placeholder="CUI"
                                onChange={(e) => setCui(e.target.value)}
                                value={cui}
                            />
                        </div>
                    </div>
                    <input className="hidden" type="text" name="Categorie" value={nevoie} onChange={() => {}} />
                    <div className="flex flex-col w-full">
                            <span className="text-md mb-2 font-semibold">
                                De ce anume ai nevoie?
                            </span>
                            <select 
                                className="rounded-xl w-full border-primary text-ms leading-6 border-2 h-[60px] px-[14px] p-2 outline-none" 
                                name="categorie"
                                onChange={(e) => setNevoie(e.target.value)}
                                value={nevoie}
                            >
                                <option value="Selectează aici" className="hidden">Selectează aici</option>
                                <option value="Suport vânzări">Suport vânzări</option>
                                <option value="Sesizări comandă">Sesizări comandă</option>
                                <option value="Colaborări & Angajări">Colaborări & Angajări</option>
                                <option value="Feedback și sugestii">Feedback și sugestii</option>
                                <option value="Oferte personalizate">Oferte personalizate</option>
                                <option value="Altele">Altele</option>
                            </select>
                        </div>
                    <div className="flex flex-col w-full my-6">
                        <span className="text-md mb-2 font-semibold">
                            Oferă-ne câteva detalii*
                        </span>
                        <textarea
                            className="rounded-xl w-full bg-[#fff] h-48 border-primary text-ms border-2 p-[14px] outline-none" 
                            placeholder="Scrie aici mesajul tău"
                            required
                            name="Detalii"
                            onChange={(e) => setMesaj(e.target.value)}
                            value={mesaj}
                        ></textarea>
                    </div>
                    <div className="flex items-center self-start justify-center mb-6 ml-1">
                        <input 
                            checked={isChecked} onChange={(e) => setIsChecked(!isChecked) }
                            id="link-checkbox" type="checkbox" className="w-4 min-w-[16px] cursor-pointer h-4 text-secondary rounded border-[2px] bg-[#F2F4FF] border-primary outline-none" />
                        <label htmlFor="link-checkbox" className="ml-2 text-md font-bold text-secondary">Accept <Link href="/termeni" target="_blank" className="text-secondary underline">Termenii și Condițiile.</Link></label>
                    </div>
                    <div className="flex self-start justify-center mb-6 ml-1">
                        <input 
                            checked={newsletter} onChange={(e) => setNewsletter(!newsletter) }
                            id="checkbox-newsletter" type="checkbox" className="w-4 min-w-[16px] cursor-pointer h-4 text-secondary rounded border-[2px] bg-[#F2F4FF] border-primary outline-none" />
                        <label htmlFor="checkbox-newsletter" className="ml-2 -mt-[3px] text-md font-bold text-secondary">Aboneaza-te la newsletter-ul nostru pentru a primi cele mai bune oferte!</label>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center w-full items-center">
                        <ReCAPTCHA
                            sitekey="6LdWV_AoAAAAAMMdYLnmy_NUtbetbPGYWHOOhery"
                            onChange={(e) => setCaptchaVerified(!captchaVerified)}
                        />
                        { isLoading ? 
                            <div className='w-full flex items-center justify-center px-16 mt-4 md:mt-0'>
                                <ReactLoading type="spin" color="#0CFF00" width={32} height={32} />
                            </div> :
                            <button                      
                                className='py-3 md:py-4 mt-4 md:mt-0 md:ml-4 bg-primary h-fit text-onPrimary rounded-[28px] font-semibold px-14 text-center text-md md:text-[16px] hover:scale-[1.05] transition-all'
                                type="submit"
                            >
                                Trimite!
                            </button>
                        }
                    </div>
                </form>
            </section>
            {/* <Rezultate contact={false} /> */}
            <WhyUs />
            <div className="h-0 md:h-32"></div>
            <TrustSRL />
            <Link href='#' className="bg-primary mt-12 flex font-semibold items-center justify-center w-[max-content] mx-auto justify-self-center px-12 md:px-16 py-3 md:py-4 text-onPrimary rounded-[28.5px] hover:scale-[1.05] transition-all">
              Vreau să iau legătura cu voi!
            </Link>
            <div className="h-12 md:h-4"></div>
            <NewsLetter headingText={'Alătură-te comunității noastre și primește ultimele noutăți!'} />
        </>
    )
}
