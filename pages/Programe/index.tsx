/* eslint-disable react/jsx-key */
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import NewsLetter from "../../components/global/newsletter"
import Head from "next/head"
import CTA from "../../components/CTA"
import TabsComponent from "../../components/TabsComponent"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { Category, Program } from "../../types"

type Props = {
    categories: string[]
    programe: Program[]
}

export default function Programe({categories, programe}: Props) {
    const [category, setCategory] = useState('toate')

    return (
        <>
            <Head>
                <title>Consultify | Programe</title>
            </Head>
            <section
                id="about-header"
                className="relative bg-[#260056] mb-20 sm:mb-32 w-full pt-[130px] pb-12 flex flex-col items-center justify-center overflow-visible"
            >
                <h1 className="text-xl lg:text-4xl font-bold text-white lg:max-w-[50%] text-center pt-20 lg:pt-20">
                    Alege programul potrivit pentru tine:
                </h1>
                <span className="bg-[#260056] rounded-[0_0_200px_250px] w-[115vw] lg:w-[103vw] -rotate-2 z-[-1] absolute -left-5 -bottom-[3rem] h-32" />
                <Image
                    src="/images/Star 1.svg"
                    alt="Hero blue circle"
                    width={100}
                    height={200}
                    className="absolute right-0 top-0 z-[5] w-[80px] lg:w-[120px]"
                />
                <Image
                    src="/images/proces/hexagon.svg"
                    width={130}
                    height={130}
                    className="absolute top-7 -left-2 lg:bottom-5 lg:left-0 w-[100px] lg:w-[130px]"
                    alt="Yellow triangle"
                />
            </section>
            <section className="flex flex-col gap-5 pb-20 items-stretch justify-center px-7 lg:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                {/* <div className="bg-[#ECECEC] mb-12 flex items-center px-4 justify-center w-full rounded-full">
                    <select className="bg-[#ECECEC] px-4 rounded-full py-4 text-xl w-full outline-none" name="categorie">
                        <option value="toate">Toate</option>
                        <option value="fonduri-europene">Fonduri europene</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div> */}
                <TabsComponent 
                    values={['toate', ...categories]}
                    setSelectedValue={setCategory}
                />
                {
                    programe.filter((program) => program.categorie == category || category == 'toate').map((program, index) => (
                        index % 2 === 0 ? (
                            <div 
                                className="rounded-[35px] mx-2 md:mx-[30px] relative w-full h-auto flex flex-col-reverse md:flex-row justify-between px-4 md:px-20 py-2 bg-cover bg-no-repeat align-center mt-[8rem]"
                            >   
                                <div style={{background: "url('/images/fonduri/fonduri-img-1.png'), rgba(0, 0, 0, 0.45)", }} className="w-full h-[70%] md:h-full absolute rounded-[35px] left-0 z-[1] top-0"></div>
                                <div style={{background: "rgba(0, 0, 0, 0.45)", }} className="w-full h-[70%] md:h-full absolute rounded-[35px] left-0 z-[1] top-0"></div>
                                <div className="flex flex-col justify-center items-center rounded-2xl relative top-[30px] md:top-[100px] z-[5] bg-[#260056] py-8 px-8">
                                    <h5 className="text-white text-xl md:text-4xl mb-6">{program.title}</h5>
                                    <ul className="list-disc list-inside">
                                        { program.bulletPoints.map((bulletPoint, index) => (
                                            <li key={index} className="text-[#EDD7FF] text-md mb-4">{ bulletPoint }</li>
                                        ))}
                                    </ul>
                                    <Link className="py-3 bg-[#BA63FF] text-[#fff] flex items-center rounded-[28.5px] font-xl px-12 hover:scale-[1.05] transition-all" href={"/Programe/" + program.id}>Aplică acum!</Link>
                                </div>
                                <div className='flex flex-col items-end justify-center pt-12'>
                                    <h5 className='text-white text-xs lg:text-xl mb-2'>
                                        {program.text1}
                                    </h5>
                                    <h4 className='text-white text-xl lg:text-4xl mb-2 font-bold'>
                                        { program.text2 }
                                    </h4>
                                    <h6 className='text-white text-xl lg:text-4xl font-bold'>
                                        { program.suma }
                                    </h6>
                                </div>
                            </div>
                        ) : (
                            <div 
                                className={"rounded-3xl relative w-full h-auto flex flex-col-reverse lg:flex-row-reverse justify-between px-4 lg:px-20 py-2 bg-cover bg-no-repeat align-center" + (index == 0 ? " mt-10" : " mt-[8rem]")}
                            >   
                                <div style={{background: "url('/images/fonduri/fonduri-img-1.png'), rgba(0, 0, 0, 0.45)", }} className="w-full h-[70%] md:h-full absolute rounded-[35px] left-0 z-[1] top-0"></div>
                                <div style={{background: "rgba(0, 0, 0, 0.45)", }} className="w-full h-[70%] md:h-full absolute rounded-[35px] left-0 z-[1] top-0"></div>
                                <div className="flex flex-col justify-center items-center rounded-2xl relative top-[100px] z-[5] bg-[#260056] py-8 px-8">
                                    <h5 className="text-white text-xl lg:text-4xl mb-6">{ program.title }</h5>
                                    <ul className="list-disc list-inside">
                                        { program.bulletPoints.map((bulletPoint, index) => (
                                            <li key={index} className="text-[#EDD7FF] text-md mb-4">{ bulletPoint }</li>
                                        ))}
                                    </ul>
                                    <Link className="py-3 bg-[#BA63FF] text-[#fff] flex items-center rounded-[28.5px] font-xl px-12 hover:scale-[1.05] transition-all" href={"/Programe/" + program.id}>Aplică acum!</Link>
                                </div>
                                <div className='flex flex-col items-start justify-center z-[5] pt-12'>
                                    <h5 className='text-white text-xs lg:text-xl mb-2'>
                                        { program.text1 }
                                    </h5>
                                    <h4 className='text-white text-xl lg:text-4xl mb-2'>
                                        { program.text2 }
                                    </h4>
                                    <h6 className='text-white text-xl lg:text-4xl'>
                                        { program.suma }
                                    </h6>
                                </div>
                            </div>
                        )
                    ))
                }
            </section>
            <CTA
                title="Aplică acum la fonduri nerambursabile pentru afacerea ta!"
                linkText="Completează formularul!"
                linkHref="/contact"
            />
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
            <NewsLetter headingText={'Fii la curent cu cele mai recente informații despre fonduri europene!'} />
        </>
    );
}

export const getStaticProps = async () => {
    const programeRef = collection(db, 'programe-fonduri')
    const programeSnap = await getDocs(programeRef)

    const programe = programeSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

    const categoriesRef = collection(db, 'categories')
    const categoriesSnap = await getDocs(categoriesRef)

    const categories = categoriesSnap.docs.map((doc) => ( doc.data().category )) 

    return {
        props: {
            categories, programe
        },
        revalidate: Number(process.env.REVALIDATE)
    }
} 
