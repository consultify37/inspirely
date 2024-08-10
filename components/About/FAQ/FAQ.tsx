import { Key, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";

export interface FAQInterface {
    id: number,
    intrebari:string,
    raspuns: string,
}

const IntrebariStandard: FAQInterface[] = [
    {
        id: 1, intrebari: 'Ce servicii oferă Inspirely?', raspuns: 'Inspirely oferă soluții integrate pentru afaceri, inclusiv consultanță în accesarea fondurilor europene prin Consultify, strategii de marketing digital prin Socialy și soluții de creditare prin Creditfy. De asemenea, avem o platformă de e-commerce unde poți achiziționa produse și servicii digitale.',
    },
    {
        id: 2, intrebari: 'Cum pot accesa fonduri europene prin Consultify?', raspuns: 'Consultify îți oferă suport complet pentru accesarea fondurilor europene. Începem cu o evaluare a eligibilității proiectului tău, pregătim documentația necesară și te ghidăm pe parcursul întregului proces pentru a maximiza șansele de obținere a finanțării.',
    },
    {
        id: 3, intrebari: 'Ce tipuri de campanii de marketing poate crea Socialy pentru afacerea mea?', raspuns: 'Socialy dezvoltă campanii de marketing personalizate, inclusiv ads pe social media, branding, conținut organic și video marketing. Scopul nostru este să creștem vizibilitatea brandului tău și să generăm lead-uri și conversii.',
    },
    {
        id: 4, intrebari: 'Cum pot obține un credit avantajos prin Creditfy?', raspuns: 'Creditfy te ajută să găsești cele mai bune soluții de creditare adaptate nevoilor tale. Evaluăm situația financiară a afacerii tale, identificăm opțiunile de creditare potrivite și te asistăm pe tot parcursul procesului de aplicare și aprobare pentru a obține cele mai avantajoase condiții.',
    },
    {
        id: 5, intrebari: 'Ce produse și servicii digitale pot achiziționa prin platforma de e-commerce Inspirely?', raspuns: 'Platforma noastră de e-commerce oferă o gamă variată de produse și servicii digitale, de la contracte necesare desfășurării activității și ghiduri complete, până la servicii de consultanță și marketing digital. Toate produsele sunt selectate pentru a îndeplini cele mai înalte standarde de calitate.',
    },
    {
        id: 6, intrebari: 'De ce să aleg Inspirely în locul altor furnizori de servicii?', raspuns: 'Inspirely se remarcă prin soluțiile integrate și personalizate oferite de echipele Consultify, Socialy și Creditfy. Combinăm expertiza în diverse domenii pentru a oferi suport complet afacerii tale. Ne angajăm să furnizăm rezultate măsurabile și să fim partenerul tău de încredere în fiecare etapă a dezvoltării afacerii.',
    }
]

type Props = {
    intrebari?: FAQInterface[]
}

const FAQAbout = ({ intrebari=IntrebariStandard }: Props) => {
    const [toggle, setToggle] = useState<boolean>(false)

    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    const handleSelectQuestion = (id: number) => {
        if (id === selectedQuestion) {
          setSelectedQuestion(null); // Close the selected question if it's clicked again
        } else {
          setSelectedQuestion(id); // Open the clicked question
        }
    };
    
    return(
        <section id='faq' className='mt-16 md:mt-32 px-7 md:px-[100px] xl:px-[160px] 2xl:px-[370px] w-full flex flex-col items-center gap-2'>
            <h2 className='text-2xl xl:text-4xl text-secondary font-bold max-w-[80%] md:max-w-[60%] mb-6 md:mb-8'>Întrebări frecvente:</h2>
            {
                intrebari.map(faq => (
                    <article key={faq.id} className='w-full rounded-[8px] bg-admin-card'>
                        <div className='flex justify-between p-4 px-6 cursor-pointer w-full' onClick={() => handleSelectQuestion(faq.id)}>
                            <h3 className='text-sm md:text-lg text-secondary font-bold'>{faq.intrebari}</h3>
                            <Image
                                className={`w-[20px] right-[10px] top-[23px]
                                ${
                                faq.id === selectedQuestion
                                    ? "rotate-180 transition-all"
                                    : "transition-all"
                                }
                                `}
                                src="/images/arrow-qa.svg"
                                width={20}
                                height={20}
                                alt="arrow-qa"
                            />
                        </div>
                        {faq.id === selectedQuestion && (
                            <p className='p-4 px-6 text-secondary text-sm md:text-base'>
                                {faq.raspuns}
                            </p>
                        )}
                    </article>
                ))
            }
        </section>
    )
}

export default FAQAbout