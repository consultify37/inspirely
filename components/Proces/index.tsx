import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WhyUsItem1 from "../Home/Why-Us/Item1";

export interface ProcesData {
    id: number;
    title: string,
    text: string,
    titluText: string,
}

export default function Proces(){
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
    const [procesActive, setProcesActive] = useState(false);
    const [selectedProces, setSelectedProces] = useState(Proces[0]);

    const handleClick = (proces: ProcesData) => {
        setProcesActive(true);
        setSelectedProces(proces);
    }
    return(
        <section className="relative w-full mt-20 md:mt-40 py-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <div className="w-[146%] md:w-[120%] bg-secondary h-full absolute rotate-[-2.69deg] left-[-20%] md:left-[-15%] z-[-1] top-0"></div>

            <Image src='/images/proces/circle-proces.svg' className="hidden md:block absolute right-[-80px] top-0 w-[300px] h-[300px]" alt='triangle' width={250} height={250}/>
            
            <h2 className="text-[#fff] text-[18px] lg:text-[36px] text-center font-bold mb-20 md:mb-28">Uite cum te putem ajuta:</h2>
            <div className="w-full flex relative flex-col md:flex-row justify-between items-start">
                <Image src='/images/proces/triangle-proces.svg' className="absolute right-0 2xl:-right-48 bottom-0 w-[110px] h-[110px] hidden md:block" alt='triangle' width={146} height={146}/>
                <Image src='/images/proces/hexagon.svg' className="hidden md:block absolute bottom-0 -left-56 xl:-left-64 w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>
                <div className="flex items-center w-full flex-col">
                    {Proces.map(proces => (
                        <div className="justify-start items-stretch w-full" key={proces.id}>
                            <button
                                onClick={() => handleClick(proces)}
                                className={`flex w-full max-w-[460px] flex-row items-start mb-6 py-8 px-6 justify-start ${
                                    proces.id == selectedProces.id
                                        ? "bg-primary rounded-2xl"
                                        : ""
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
                <div className="hidden md:flex w-full mt-12 md:mt-0 flex-col items-start">
                    <h4 className="text-[#fff] text-[18px] lg:text-[32px] font-bold mb-8">{selectedProces.titluText}</h4>
                    <p className="text-[14px] md:text-base text-[#fff] ">{selectedProces.text}</p>
                </div>
            </div>
            <Link href='/shop' className="mt-8 md:mt-24 py-4 md:py-4 text-[15px] md:text-base font-semibold bg-primary text-onPrimary rounded-[28.5px] px-12 flex items-center justify-center w-fit mx-auto transition-all hover:scale-[1.05]">
                Vezi produsele noastre!
            </Link>

            <h2 className="text-[#fff] text-[20px] lg:text-[36px] text-center font-bold mt-12 md:mt-24">Organigrama Inspirely</h2>
            <div className="relative flex flex-col items-center mt-12 md:mt-16 px-2">
                <Image 
                    src='/images/proces/proces.svg'
                    width={512}
                    height={512}
                    alt="."
                    className="w-full max-w-[360px] h-auto md:hidden"
                />
                <Image 
                    src='/images/proces/proces xl.svg'
                    width={512}
                    height={512}
                    alt="."
                    className="w-full h-auto hidden md:block"
                />
            </div>

            <Image 
                src='/images/proces/Ellipse 35.svg'
                width={128}
                height={128}
                alt="."
                className="absolute hidden md:block w-[80px] xl:w-[90px] left-0 top-[1120px]"
            />
            <Image 
                src='/images/proces/triangle-proces.svg' 
                className="absolute hidden md:block w-[80px] xl:w-[90px] left-20 xl:left-40 top-[1320px]" 
                alt='triangle' 
                width={146} 
                height={146}
            />
            <Image 
                src='/images/proces/Ellipse 532.svg'
                width={128}
                height={128}
                alt="."
                className="absolute hidden md:block w-[140px] lg:w-[180px] xl:w-[240px] 2xl:w-[340px] right-0 top-[1170px] -z-[1]"
            />

            <h2 className='text-white font-bold text-center w-full mt-20 md:mt-40 text-[20px] lg:text-[32px] mb-12 lg:mb-28'>De ce să alegi Inspirely?</h2>
            <div className='relative flex flex-wrap w-full lg:mt-10 justify-center md:justify-between gap-y-20'>
                <div className='mx-auto lg:mx-0 w-full z-[2] lg:w-[49%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
                    <WhyUsItem1 
                        src="/images/questions-comment.svg"
                        text="Oferim soluții bazate pe date concrete, asigurându-ne că fiecare acțiune are un impact pozitiv și cuantificabil asupra afacerii tale."
                        title="Rezultate măsurabile"
                    />
                    <WhyUsItem1
                        src="/images/rocket.svg"
                        text="Platforma noastră de e-commerce îți permite să achiziționezi rapid și ușor produse și servicii digitale, optimizând procesele și economisind timp."
                        title="E-commerce eficient"
                    />
                    <WhyUsItem1 
                        src="/images/chess.svg"
                        text="Cu o echipă de experți și branduri partenere de renume, Inspirely se bucură de încrederea și satisfacția unui număr mare de clienți mulțumiți."
                        title="Reputație solidă"
                    />
                    <WhyUsItem1 
                        src="/images/chart.svg"
                        text="Avem colaborări strânse cu numeroși parteneri din diverse industrii, oferindu-ți acces la resurse și soluții diverse, adaptate nevoilor tale."
                        title="Rețea extinsă de parteneri"
                    />
                </div>
                <div className='relative mx-auto lg:mx-0'>
                    <Image src='/images/About/Pag - despre noi - structura misiunea noastra.png' alt='Why-Us' className='relative rounded-[35px] z-[2] w-[400px]' width={350} height={400} placeholder='blur' blurDataURL='/images/About/Pag - despre noi - structura misiunea noastra.png' />
                    <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] w-[120px] md:w-[164px] absolute -top-12 -left-16' /> 
                </div>
                <div className="w-full flex justify-center md:mt-16">
                    <Link href='/divizii' className='py-3 md:py-4 text-[15px] md:text-base bg-tertiary text-onTertiary rounded-[28.5px] font-semibold px-20 hover:scale-[1.05] transition-all'>Diviziile Inspirely</Link>
                </div>
            </div>
            <Image 
                src='/images/proces/Ellipse 53.svg'
                width={128}
                height={128}
                alt="."
                className="absolute w-[140px] lg:w-[180px] xl:w-[240px] 2xl:w-[360px] right-0 bottom-[500px] md:bottom-[320px] -z-[1]"
            />
            <Image src='/images/About/circle.svg' alt='triangle' width={164} height={164} className='z-[1] w-[300px] bottom-32 lg:w-[300px] xl:w-[340px] 2xl:w-[400px] absolute lg:bottom-64 xl:bottom-56 2xl:bottom-[360px] -right-48 lg:right-0' /> 
        </section>
    )
}