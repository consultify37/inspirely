import React from "react"
import Carousel from "react-elastic-carousel"
import DivisionCard from "../Home/DivisionCard"

const divisions = [
    {   
        code: 'Consultify',
        numberOfStars: 4.5,
        title: 'Consultanță în fonduri europene',
        bulletPoints: ['Peste 850 de clienți fericiți', 'Vechime de peste 5 ani', 'Peste 1 mil. € bugete investite'],
        description: 'Consultify este partenerul tău de încredere în accesarea fondurilor europene. Cu o echipă de experți în diverse domenii, de la turism și tehnologie la agricultură durabilă și dezvoltare rurală, oferim consultanță personalizată pentru fiecare client in parte. Misiunea noastră este să simplificăm procesul complex de aplicare și să te ghidăm pe parcursul întregii călătorii, asigurându-ne că obții finanțarea necesară pentru a-ți dezvolta afacerea. Consultify se mândrește cu un număr impresionant de proiecte acceptate și cu un nivel ridicat de satisfacție a clienților.',
        logo: '/images/our logos/consultify.svg',
        theme: {
            backgroundColor: '#260056',
            cardColor: '#170034',
            primaryColor: '#8717F8',
            triangle: '#7935AD',
            polygon: '#8717F8',
            circle: '#BA63FF'
        }
    },
    {   
        code: 'Socialy',
        numberOfStars: 4.4,
        title: 'Consultanță marketing',
        bulletPoints: ['Peste 150 de clienți fericiți', 'Vechime de peste 4 ani', 'Peste 850 de clienți fericiți'],
        description: 'La Socialy, ne dedicăm să fim partenerul preferat al afacerilor în dezvoltarea și consolidarea prezenței lor online. Suntem specializați în ads pe social media, web-design, branding, conținut organic și video marketing. Oferim soluții personalizate și inovatoare pentru a ajuta clienții să atingă succesul pe termen lung. Colaborăm strâns cu fiecare client pentru a înțelege viziunea și valorile afacerii, dezvoltând strategii de marketing eficiente și creative care să atragă și să angajeze publicul țintă. Socialy se remarcă prin creativitate, profesionalism și rezultate măsurabile, ajutând afacerile să se dezvolte și să prospere într-un mediu digital competitiv.',
        logo: '/images/our logos/socialy.svg',
        theme: {
            backgroundColor: '#0E0E0E',
            cardColor: '#202020',
            primaryColor: '#0CFF00',
            triangle: '#353535',
            polygon: '#656565',
            circle: '#0CFF00'
        }
    },
    {   
        code: 'Creditfy',
        numberOfStars: 4.9,
        title: 'Creditfy - Brokeraj în credite',
        bulletPoints: ['Acces la o rețea extinsă de parteneris', 'Proces simplificat de aplicare', 'Soluții financiare avantajoase'],
        description: 'Creditfy este agenția ta de brokeraj în credite, specializată în oferirea soluțiilor financiare adaptate nevoilor tale. Cu o rețea vastă de parteneri bancari și instituții financiare, Creditfy te ajută să găsești cele mai avantajoase opțiuni de creditare. De la credite pentru dezvoltarea afacerii până la soluții pentru nevoi personale, echipa noastră îți oferă suport pe tot parcursul procesului, simplificând aplicarea și negocierea pentru a obține cele mai bune condiții. ',
        logo: '/images/our logos/creditfy.svg',
        theme: {
            backgroundColor: '#00071E',
            cardColor: '#152144',
            primaryColor: '#FF7A00',
            triangle: '#D7E1FF',
            polygon: '#FF7A00',
            circle: '#FF7A00'
        }
    },
]

export default function CarouselPrograme(){
    return(
        <div className='carousel-programe w-full h-auto flex mt-12 md:mt-24 items-center flex-col relative justify-center px-7 md:px-[100px] xl:px-[160px] 2xl:px-[296px]'>
            <h2 className="text-primary text-[16px] md:text-[32px] font-bold text-center">Descoperă brandurile Inspirely,</h2>
            <h2 className="text-primary text-[16px] md:text-[32px] font-bold mb-10 md:mb-12 text-center">cei care vor face posibil succesul afacerii tale!</h2>
            <Carousel
                pagination={true}
                isRTL={false}
                disableArrowsOnEnd={false}
                className="relative w-full carousel-fonduri flex items-stretch md:-mb-8"
            >
                { divisions.map((division) => (
                    <DivisionCard 
                        code={division.code}
                        key={division.code}
                        bulletPoints={division.bulletPoints}
                        description={division.description}
                        logo={division.logo}
                        numberOfStars={division.numberOfStars}
                        theme={division.theme}
                        title={division.title}
                    />
                ))}
            </Carousel>
        </div>
    )
}