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
            id: 1, title: 'Analizarea societății', 
            text: 'Primul pas în colaborarea noastră constă într-o analiză atentă a firmei dumneavoastră și identificarea programului activ care se potrivește cel mai bine cu obiectivele și nevoile afacerii dumneavoastră. Avem o echipă dedicată de specialiști cu experiență în identificarea celor mai bune programe de finanțare și înțelegerea tuturor cerințelor și criteriilor de eligibilitate. Cu noi la bord, sunteți sigur că veți fi încadrat în programul potrivit, care va maximiza șansele de a obține finanțarea dorită.',
            titluText: "Analizarea societății și încadrarea în programul cel mai potrivit",
        },
        {
            id: 2, title: 'Pregătirea documentației',
            text: 'În pasul 2 al procesului nostru, ne concentrăm pe obținerea tuturor informațiilor necesare pentru a începe redactarea proiectului. În cadrul acestei etape, solicităm clienților noștri să ne ofere toate documentele necesare pentru a putea continua. Avem o echipă de specialiști care se ocupă de analiza atentă a informațiilor furnizate, astfel încât să ne asigurăm că proiectul este construit în conformitate cu cerințele specifice ale programului selectat. În plus, colaborăm îndeaproape cu clienții noștri pe tot parcursul procesului de redactare, pentru a ne asigura că soluțiile propuse corespund nevoilor și cerințelor lor specifice.',
            titluText: 'Pregătirea documentației necesare pentru proiect',
        },
        {
            id: 3, title: 'Depunerea proiectului', 
            text: 'Depunerea proiectului este momentul crucial în obținerea finanțării dorite. După ce am finalizat analiza și scrierea proiectului, acesta este depus cu mare atenție la instituția responsabilă. În acest punct, noi preluăm întreaga responsabilitate și ne asigurăm că proiectul depus respectă toate criteriile și normele impuse de instituție. După depunere, urmează momentul așteptării verificării proiectului, moment în care noi monitorizăm cu atenție toate etapele procesului pentru a ne asigura că acesta are loc în cele mai bune condiții.',
            titluText: 'Depunerea proiectului și verificarea lui',
        },
        {
            id: 4, title: 'Aprobarea proiectului', 
            text: 'Pasul 4 în procesul nostru de a ajuta clienții să obțină finanțarea necesară este primirea deciziei de aprobare a proiectului depus, un pas crucial pentru succesul afacerii dumneavoastră. În acest moment, intrăm în acțiune și demarăm procedurile de achiziție, astfel încât clientul să beneficieze de cele mai bune oferte. De asemenea, începem și perioada de implementare a proiectului, iar echipa noastră dedicată va monitoriza cu atenție fiecare etapă a acestui proces pentru a asigura succesul final.',
            titluText: 'Aprobarea proiectului și începerea perioadei de implementare',
        },
        {
            id: 5, title: 'Perioada de monitorizare', 
            text: 'După ce am finalizat cu succes implementarea proiectului, începem perioada de monitorizare. Suntem mereu alături de tine pentru a-ți oferi consultanță și a răspunde la întrebări pe toată durata monitorizării. Este o perioadă de grație în care savurăm succesul, dar și de a verifica dacă firma este eligibilă pentru alte programe de finanțare. Suntem mândri de parteneriatele noastre și suntem pregătiți să ajutăm și alte companii să-și atingă obiectivele lor de afaceri prin proiecte finanțate cu succes.',
            titluText: 'Perioada de monitorizare și finalizarea obligațiilor',
        },
    ]
    const [procesActive, setProcesActive] = useState(false);
    const [selectedProces, setSelectedProces] = useState(Proces[0]);

    const handleClick = (proces: ProcesData) => {
        setProcesActive(true);
        setSelectedProces(proces);
    }
    return(
        <section className="relative w-full mt-16 md:mt-32 py-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <div className="w-[136%] md:w-[120%] bg-secondary h-full absolute rotate-[-2.69deg] left-[-15%] z-[-1] top-0"></div>

            <Image src='/images/proces/circle-proces.svg' className="hidden md:block absolute right-[-80px] top-0 w-[300px] h-[300px]" alt='triangle' width={250} height={250}/>
            
            <h2 className="text-[#fff] text-xl lg:text-2xl xl:text-3xl text-center font-bold mb-20 md:mb-28">Ce putem face pentru tine?</h2>
            <div className="w-full flex relative flex-col md:flex-row justify-between items-start">
                <Image src='/images/proces/triangle-proces.svg' className="absolute right-0 2xl:-right-48 bottom-0 w-[110px] h-[110px] hidden md:block" alt='triangle' width={146} height={146}/>
                <Image src='/images/proces/hexagon.svg' className="hidden md:block absolute bottom-0 -left-56 xl:-left-64 w-[200px] h-[200px]" alt='triangle' width={250} height={250}/>
                <div className="flex items-center w-full flex-col md:mr-8">
                    {Proces.map(proces => (
                        <div className="justify-start w-full" key={proces.id}>
                            <button
                                onClick={() => handleClick(proces)}
                                className={`flex w-full max-w-[400px] flex-row items-center mb-6 py-8 px-6 justify-start ${
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
                <div className="hidden md:flex w-full md:ml-8 mt-12 flex-col items-start">
                    <h4 className="text-[#fff] text-2xl lg:text-4xl font-semibold mb-8">{selectedProces.titluText}</h4>
                    <p className="text-base font-light text-[#fff] ">{selectedProces.text}</p>
                </div>
            </div>
            <Link href='/contact' className="mt-12 md:mt-4 py-3 md:py-4 font-semibold bg-primary text-onPrimary rounded-[28.5px] px-12 flex items-center justify-center w-fit mx-auto transition-all hover:scale-[1.05]">
                Contactează-ne!
            </Link>

            <h2 className="text-[#fff] text-[20px] lg:text-[36px] text-center font-bold mt-16 md:mt-32">Organigrama Inspirely</h2>
            <div className="relative flex flex-col items-center mt-8 md:mt-24 px-2">
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
                src='/images/proces/Ellipse 53.svg'
                width={128}
                height={128}
                alt="."
                className="absolute hidden md:block w-[140px] lg:w-[180px] xl:w-[240px] 2xl:w-[280px] right-0 top-[1320px] -z-[1]"
            />

            <h2 className='text-white font-bold text-center w-full mt-20 md:mt-40 text-[20px] lg:text-[32px] mb-8 lg:mb-16'>De ce să alegi Inspirely?</h2>
            <div className='relative flex flex-wrap w-full lg:mt-10 justify-center md:justify-between gap-y-20'>
                <div className='mx-auto lg:mx-0 w-full z-[2] lg:w-[49%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-y-8'>
                    <WhyUsItem1 
                        src="/images/questions-comment.svg"
                        text="Comunicare excelentă! Răspuns rapid și soluții eficiente pentru succesul proiectelor tale."
                        title="Comunicare"
                    />
                    <WhyUsItem1
                        src="/images/rocket.svg"
                        text="Echipă tânără, inovatoare și dinamică, aducând idei proaspete și abordări moderne."
                        title="Spirit tânăr"
                    />
                    <WhyUsItem1 
                        src="/images/chess.svg"
                        text="Oferim o abordare individuală pentru a ne asigura că satisfacem nevoile și obiectivele fiecărui client."
                        title="Abordare individuală"
                    />
                    <WhyUsItem1 
                        src="/images/chart.svg"
                        text="Profesionalismul nostru este evidențiat de abordarea noastră meticuloasă și atenția la detalii în fiecare proiect."
                        title="Profesionalism"
                    />
                </div>
                <div className='relative mx-auto lg:mx-0'>
                    <Image src='/images/About/Pag - despre noi - structura misiunea noastra.png' alt='Why-Us' className='relative rounded-[35px] z-[2] w-[400px]' width={350} height={400} placeholder='blur' blurDataURL='/images/About/Pag - despre noi - structura misiunea noastra.png' />
                    <Image src='/images/About/triangle.svg' alt='triangle' width={164} height={164} className='z-[1] absolute -top-12 -left-16' /> 
                </div>
                <div className="w-full flex justify-center mt-16">
                    <Link href='/divizii' className='py-3 md:py-4 bg-tertiary text-onTertiary rounded-[28.5px] font-semibold px-20 hover:scale-[1.05] transition-all'>Diviziile Inspirely</Link>
                </div>
            </div>
            <Image src='/images/About/circle.svg' alt='triangle' width={164} height={164} className='z-[1] w-[300px] bottom-32 lg:w-[300px] xl:w-[340px] 2xl:w-[400px] absolute lg:bottom-64 xl:bottom-56 2xl:bottom-[360px] -right-48 lg:right-0' /> 
        </section>
    )
}