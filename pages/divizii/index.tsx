import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { formatDate } from '../../utils/formatDate'
import { db } from '../../firebase'
import { Article, Product } from '../../types'
import FeaturedProducts from '../../components/Home/Why-Us/FeaturedProducts'
import News from '../../components/Home/News/News'
import DivisionBigCard from '../../components/divizii/DivisionBigCard'
import NewsLetter from '../../components/global/newsletter'

type Props = {
  products: Product[]
  articles: Article[]
}

const Data = [
  { 
    id: 0,
    title: 'Consultify – Consultanță in Fonduri Europene',
    description: 'Consultify este partenerul tău de încredere în accesarea fondurilor europene. Cu o echipă de experți în diverse domenii, de la turism și tehnologie la agricultură durabilă și dezvoltare rurală, oferim consultanță personalizată pentru fiecare client in parte. Misiunea noastră este să simplificăm procesul complex de aplicare și să te ghidăm pe parcursul întregii călătorii, asigurându-ne că obții finanțarea necesară pentru a-ți dezvolta afacerea. Consultify se mândrește cu un număr impresionant de proiecte acceptate și cu un nivel ridicat de satisfacție a clienților.',
    experience: 190,
    transperancy: 180,
    feedback: 160,
    hr: 170,
    primary: '#CF9FFF',
    onPrimary: '#fff',
    background: '#260056',
    logo: '/images/our logos/consultify.svg',
    gif: '/images/divizii/Divizii - Consultify.gif',
    rating: 4.5
  },
  { 
    id: 1,
    title: 'Socialy – Agenție de marketing',
    description: 'La Socialy, ne dedicăm să fim partenerul preferat al afacerilor în dezvoltarea și consolidarea prezenței lor online. Suntem specializați în ads pe social media, web-design, branding, conținut organic și video marketing. Oferim soluții personalizate și inovatoare pentru a ajuta clienții să atingă succesul pe termen lung. Colaborăm strâns cu fiecare client pentru a înțelege viziunea și valorile afacerii, dezvoltând strategii de marketing eficiente și creative care să atragă și să angajeze publicul țintă. Socialy se remarcă prin creativitate, profesionalism și rezultate măsurabile, ajutând afacerile să se dezvolte și să prospere într-un mediu digital competitiv.',
    experience: 180,
    transperancy: 180,
    feedback: 160,
    hr: 160,
    primary: '#0CFF00',
    onPrimary: '#000',
    background: '#0E0E0E',
    logo: '/images/our logos/socialy.svg',
    gif: '/images/divizii/Divizii - Socialy.gif',
    rating: 4.4
  },
  { 
    id: 2,
    title: 'Creditfy - Brokeraj în credite',
    description: 'Creditfy este agenția ta de brokeraj în credite, specializată în oferirea soluțiilor financiare adaptate nevoilor tale. Cu o rețea vastă de parteneri bancari și instituții financiare, Creditfy te ajută să găsești cele mai avantajoase opțiuni de creditare. De la credite pentru dezvoltarea afacerii până la soluții pentru nevoi personale, echipa noastră îți oferă suport pe tot parcursul procesului, simplificând aplicarea și negocierea pentru a obține cele mai bune condiții. ',
    experience: 170,
    transperancy: 170,
    feedback: 170,
    hr: 170,
    primary: '#FF7A00',
    onPrimary: '#fff',
    background: '#00071E',
    logo: '/images/our logos/creditfy.svg',
    gif: '/images/divizii/Divizii - Creditfy.gif',
    rating: 4.9
  },
]

const Divisions = ({ products, articles }: Props) => {
  return (
    <>
      <Head>
        <title>{`${process.env.SITE} | Divizii`}</title>
      </Head>
      <div className='w-full'>
        <div className='relative overflow-hidden w-full bg-secondary pt-32 pb-16 md:pb-40 flex flex-col items-center'>
            <Image 
              src='/images/divizii/Polygon 3 (6).svg'
              width={512}
              height={512}
              alt="."
              className="absolute top-16 -right-4 w-[100px] lg:top-40 lg:right-28 lg:w-[130px] xl:right-40"
            />
            <Image 
              src='/images/divizii/Ellipse 19 (5).svg'
              width={512}
              height={512}
              alt="."
              className="absolute top-0 left-0 w-[160px] lg:w-[240px]"
            />

            <h1 className="text-[24px] md:text-4xl xl:text-[44px] font-extrabold md:leading-[48px] text-white md:max-w-[68%] text-center pt-20 md:pt-20 mx-4 z-50">
              Diviziile Inspirely:
            </h1>

            <div className='px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px] w-full mt-8 md:mt-24'>
              <div className="relative flex flex-col items-center px-2 w-full z-[1]">
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
            </div>

            <Image 
                src='/images/proces/Ellipse 35.svg'
                width={128}
                height={128}
                alt="."
                className="absolute hidden md:block w-[80px] xl:w-[90px] left-0 bottom-48"
            />
            <Image 
                src='/images/proces/Ellipse 53.svg'
                width={128}
                height={128}
                alt="."
                className="absolute hidden md:block w-[140px] lg:w-[180px] xl:w-[240px] 2xl:w-[280px] right-0 -bottom-32"
            />
        </div>

        <div className='px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
          { Data.map((item) => (
            <DivisionBigCard 
              key={item.id}
              data={item}
            />
          ))}
        </div>
        <div className='h-8 lg:h-12'></div>
        {/* <FeaturedProducts 
          products={products}
          title='Descoperă soluțiile digitale oferite de<br /> Inspirely pentru afacerea ta:'
        /> */}
        {/* <News
          articles={articles}
          title='Rămâi informat cu ultimele noutăți<br /> din lumea afacerilor și nu numai:'
        /> */}
        <NewsLetter 
          headingText='Alătură-te comunității Inspirely și ai acces la resurse valoroase pentru afacerea ta!'
        />
      </div>
    </>
  )
}

export default Divisions

export const getStaticProps = async () => {
  const slidesRef = query(collection(db, 'slides-homepage'), where('site', '==', process.env.SITE))
  const slidesSnap = await getDocs(slidesRef)

  const slides = slidesSnap.docs.map((doc) => (
    { id: doc.id, ...doc.data() }
  ))

  const articlesSnap = await  getDocs(query(collection(db, 'articles'), where('active', '==', true), where('featured', '==', true), orderBy('createdAt', 'desc'), limit(8)))
  var articles = articlesSnap.docs.map((doc) => {
      const { lastUpdated, createdAt, ...data } = doc.data()
      return ({ id: doc.id, formattedCreatedAt: formatDate(new Date(createdAt.seconds*1000)), ...data }) 
  })
  
  const collectionRef = query(collection(db, 'products'), where('active', '==', true), where('featured', '==', true), orderBy('lastUpdated', 'desc'), limit(8))
  const collectionSnap = await getDocs(collectionRef)
  
  const products: Product[] = collectionSnap.docs.map((doc) => {
    const { lastUpdated, ...data } = doc.data()

    return ({ id: doc.id, ...data } as Product)
  })

  return {
    props: { slides, articles, products },
    revalidate: Number(process.env.REVALIDATE)
  }
}