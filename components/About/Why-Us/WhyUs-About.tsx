import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import WhyUsItem1 from "../../Home/Why-Us/Item1"
import WhyUs from "../../Home/WhyUs"
import OurStats from "./OurStats"

export interface ProcesData {
    id: number
    title: string,
    text: string,
    titluText: string,
}

export default function WhyUsAbout(){
    const Proces: ProcesData[] = [
        {
            id: 1, title: 'Produse și Servicii Digitale', 
            text: 'Utilizând platforma noastră de e-commerce, ai acces la o gamă variată de produse și servicii digitale disponibile prin achiziție directă online. Oferim soluții digitale care sprijină fiecare aspect al afacerii tale, asigurând acces rapid și ușor la tot ceea ce ai nevoie pentru a-ți dezvolta afacerea eficient și profesionist.',
            titluText: "Achiziții rapide și eficiente prin platforma noastră de e-commerce",
        },
        {
            id: 2, title: 'Consultanță in Fonduri Europene',
            text: 'Îți oferim consultanță specializată pentru accesarea fondurilor europene prin Consultify. Echipa noastră de experți analizează nevoile și obiectivele tale și dezvoltă o strategie personalizată pentru a obține finanțările nerambursabile necesare dezvoltării afacerii tale. Consultify simplifică procesul de aplicare și te ghidează pe tot parcursul acestuia pentru a asigura succesul proiectelor tale. Începem printr-o evaluare detaliată a eligibilității proiectului tău, urmată de pregătirea și depunerea documentației necesare. Pe parcursul implementării proiectului, oferim suport continuu pentru a te ajuta să îndeplinești toate cerințele și să maximizezi șansele de succes.',
            titluText: 'Accesarea fondurilor europene prin Consultify',
        },
        {
            id: 3, title: 'Strategii de Marketing Personalizate', 
            text: 'Dezvoltă și implementeăza strategii de marketing personalizate cu ajutorul Socialy. Echipa noastră de specialiști creează campanii de marketing eficiente, gestionează ads pe social media, dezvoltă website-uri și produce conținut organic de calitate. Obiectivul nostru este să maximizăm vizibilitatea brandului tău și să generăm lead-uri și conversii pentru creșterea afacerii tale. Începem cu o analiză aprofundată a afacerii tale și a pieței țintă, pentru a dezvolta strategii personalizate. Implementăm campaniile de marketing pe multiple platforme, monitorizăm performanța acestora și facem ajustările necesare pentru a asigura rezultate optime.',
            titluText: 'Dezvoltarea prezenței online prin Socialy',
        },
        {
            id: 4, title: 'Soluții de Creditare', 
            text: 'Facilităm accesul la soluții de creditare avantajoase prin Creditfy. Echipa noastră îți oferă suportul necesar pentru a găsi cele mai bune opțiuni de creditare, adaptate nevoilor tale. Cu o rețea extinsă de parteneri bancari și instituții financiare, Creditfy simplifică procesul de aplicare și negociere pentru a obține suma necesară. Începem prin evaluarea situației tale financiare și a nevoilor specifice, identificăm cele mai potrivite produse de creditare și te asistăm pe parcursul procesului de aplicare și aprobare. Negociem în numele tău pentru a obține cele mai bune condiții și oferim suport continuu până la finalizarea procesului.',
            titluText: 'Obținerea finanțării necesare cu Creditfy',
        }
    ]
    const [procesActive, setProcesActive] = useState(false)
    const [selectedProces, setSelectedProces] = useState(Proces[0])

    const handleClick = (proces: ProcesData) => {
        setProcesActive(true)
        setSelectedProces(proces)
    }
    return(
        <section className="relative w-full mt-20 md:mt-40 py-20 md:py-32">
            <div className="w-[136%] md:w-[120%] bg-secondary h-full absolute rotate-[-2.69deg] left-[-16%] z-[-1] top-0"></div>

            <Image src='/images/proces/circle-proces.svg' className="hidden md:block absolute right-[-80px] top-0 w-[300px] h-[300px]" alt='triangle' width={250} height={250}/>
            <div className="px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
                <h2 className="text-[#fff] text-[18px] lg:text-[36px] text-center font-bold mb-20 md:mb-28 ">Uite cum te putem ajuta:</h2>
                <div className="w-full flex relative flex-col md:flex-row justify-between items-start">
                    <Image src='/images/proces/triangle-proces.svg' className="absolute right-0 2xl:-right-48 bottom-0 w-[110px] h-[110px] hidden md:block" alt='triangle' width={146} height={146}/>
                    <Image src='/images/proces/hexagon.svg' className="hidden md:block absolute bottom-0 -left-56 xl:-left-64 w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>
                    <div className="flex items-center w-full flex-col">
                        {Proces.map(proces => (
                            <div className="justify-start w-full" key={proces.id}>
                                <button
                                    onClick={() => handleClick(proces)}
                                    className={`flex w-full max-w-[400px] flex-row items-center py-8 px-6 justify-start ${
                                        proces.id == selectedProces.id
                                            ? "bg-primary rounded-2xl mb-6 md:mb-4"
                                            : "md:mb-4"
                                    }`}
                                >
                                    <Image
                                        src="/images/proces/check.svg"
                                        className="mr-4"
                                        width={31}
                                        height={31}
                                        alt="check"
                                    />
                                    <span
                                        className={`text-lg sm:text-xl font-bold text-start ${
                                            proces.id === selectedProces.id
                                                ? "text-onPrimary"
                                                : "text-onSecondary"
                                        }`}
                                    >
                                        {proces.id}. {proces.title}
                                    </span>
                                </button>
                                <h4 className={`text-[#fff] text-lg  ${proces.id == selectedProces.id ? "" : "hidden"} md:hidden font-semibold px-6 mb-4`}>{selectedProces.titluText}</h4>
                                <p className={`${proces.id == selectedProces.id ? "" : "hidden"} md:hidden text-onSecondary text-[14px] px-6`}>{ proces.text }</p>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:flex w-full flex-col items-start">
                        <h4 className="text-[#fff] text-2xl lg:text-4xl font-bold mb-8">{selectedProces.titluText}</h4>
                        <p className="text-base font-light text-[#fff] ">{selectedProces.text}</p>
                    </div>
                </div>
                <Link href='/shop' className="mt-12 hidden py-3 md:py-4 font-semibold bg-primary text-onPrimary rounded-[28.5px] px-12 flex items-center justify-center w-fit mx-auto transition-all hover:scale-[1.05]">
                    Vezi produsele noastre!
                </Link>
            </div>
            
            {/* <OurStats /> */}
            
            <WhyUs inverted={true}/>
            <Link href='/divizii' className="bg-tertiary mt-12 md:mt-24 text-[14px] md:text-[16px] flex font-semibold items-center justify-center w-[max-content] mx-auto justify-self-center px-16 py-3 md:py-4 text-onTertiary rounded-[28.5px] hover:scale-[1.05] transition-all">
                Diviziile noastre
            </Link>
        </section>
    )
}