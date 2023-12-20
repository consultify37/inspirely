/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react"
import Image from "next/image"
import NewsLetter from "../../components/global/newsletter"
import Head from "next/head"
import CTA from "../../components/CTA"
import TabsComponent from "../../components/TabsComponent"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase"
import { Program } from "../../types"
import PageHeader from "../../components/Header/PageHeader"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import FonduriComponent from "../../components/fonduri/FonduriComponent"

type Props = {
    categories: string[]
    programe: Program[]
}

export default function Programe({categories, programe}: Props) {
    const [category, setCategory] = useState('Toate')
    const [page, setPage] = useState(0)
    let maxPages = Math.ceil(programe.filter((program) => program.categorie == category || category == 'Toate').length/4)

    useEffect(() => {
        setPage(0)
    }, [category])

    const handleNext = () => {
        if ( page < maxPages-1 ) {
            window.scrollTo({top: 280, left: 0, behavior: "instant"})
            setPage(page+1)
        }
    }

    const handlePrev = () => {
        if ( page != 0 ) {
            window.scrollTo({top: 280, left: 0, behavior: "instant"})
            setPage(page-1)
        }
    }

    return (
        <>
            <Head>
                <title>Socialy | Campanii</title>
            </Head>
            <PageHeader 
                title="Alege programul potrivit pentru tine:"
            >
                <Image src='/images/circle-hero-left.svg' width={150} height={150} className='absolute -left-4 -top-28 lg:-top-56 lg:left-0 lg:w-[250px]' alt='Circle hero green' />
                <Image src='/images/proces/hexagon.svg' width={100} height={100} className='absolute bottom-[96px] lg:-bottom-20 right-0 lg:right-16 w-[120px] lg:w-[150px] z-10' alt='Yellow triangle' />
            </PageHeader>
            <section className="flex flex-col gap-5 pb-20 items-stretch justify-center px-7 lg:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                {/* <div className="bg-[#ECECEC] mb-12 flex items-center px-4 justify-center w-full rounded-full">
                    <select className="bg-[#ECECEC] px-4 rounded-full py-4 text-xl w-full outline-none" name="categorie">
                        <option value="toate">Toate</option>
                        <option value="fonduri-europene">Fonduri europene</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div> */}
                <TabsComponent 
                    values={['Toate', ...categories]}
                    setSelectedValue={setCategory}
                />
                <div className="md:px-8">
                    {
                        programe.filter((program) => program.categorie == category || category == 'Toate').filter((program, index) => (index >= page*4 && index < (page+1)*4) ).map((program, index) => (
                            <FonduriComponent program={program} index={index} key={program.id +index} />
                        ))
                    }
                </div>
                <div className='mt-32 flex items-center justify-center w-full gap-2'>
                    <RiArrowLeftSLine size={24} onClick={handlePrev} className={`${page === 0 ? 'text-[#CDCDCD]' : 'text-[#260056]'} cursor-pointer`} />
                    {
                        maxPages > 0 &&
                            Array.from({length: maxPages}, (_, i) =>
                                <p key={i} onClick={() => {window.scrollTo({top: 280, left: 0, behavior: "instant"}); setPage(i)}} className={`${i === page ? 'bg-secondary text-onSecondary' : 'text-secondary'} cursor-pointer h-8 w-8 rounded-full flex items-center justify-center`}>{i+1}</p>
                            )
                    }
                    <RiArrowRightSLine size={24} onClick={handleNext} className={`${page === maxPages - 1 ? 'text-onSecondary' : 'text-secondary'} cursor-pointer`} />
                </div>
            </section>
            <div className="-mt-24">
                <CTA
                    title="Aplică acum la fonduri <purple>nerambursabile<purple> pentru afacerea ta!"
                    linkText="Completează formularul!"
                    linkHref="/contact"
                />
            </div>
            {/* <div className="w-full mt-32 px-7 lg:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <div className="flex justify-start items-start">
                    <h3 className="text-2xl lg:text-3xl text-[#8717F8] font-bold">
                    Consultify vine în ajutorul tău cu produse digitale pentru scalarea
                    afacerii tale
                    </h3>
                </div>
                <WhyUsCart />
                <Link href='/shop' className="bg-[#8717F8] flex items-center justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 text-white rounded-[28.5px] hover:scale-[1.05] transition-all">
                    Vezi toate produsele
                </Link>
            </div>
            <News /> */}
            <NewsLetter headingText={'Abonează-te și află secretele succesului în obținerea finanțăriilor europene!'} />
        </>
    );
}

export const getStaticProps = async () => {
    const programeRef = query(collection(db, 'programe-fonduri'), where('site', '==', process.env.SITE))
    const programeSnap = await getDocs(programeRef)

    const programe = programeSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

    const categoriesRef = query(collection(db, 'categories'), where('site', '==', process.env.SITE))
    const categoriesSnap = await getDocs(categoriesRef)

    const categories = categoriesSnap.docs.map((doc) => ( doc.data().category )) 

    return {
        props: {
            categories, programe
        },
        revalidate: Number(process.env.REVALIDATE)
    }
} 
