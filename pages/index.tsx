import React from "react"
import Head from "next/head"
import HomeHeader from "../components/Home/HomeHeader"
import AboutHome from "../components/Home/About/About"
import TrustSRL from "../components/Home/Trust"
import CarouselPrograme from "../components/fonduri/index"
import Proces from "../components/Proces"
import NewsLetter from "../components/global/newsletter"
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../firebase"
import { Article, Product, Program, Slide } from "../types"
import News from "../components/Home/News/News"
import { formatDate } from "../utils/formatDate"
import FeaturedProducts from "../components/Home/Why-Us/FeaturedProducts"
import WhyUs from "../components/Home/WhyUs"

type Props = {
  slides: Slide[]
  products: Product[]
  articles: Article[]
}

export default function Home({ slides, products, articles }: Props) {
  return (
    <>
      {/* pageSettings */}
      <Head>
        <title>{`${process.env.SITE} | Acasă`}</title>
      </Head>
      <HomeHeader slides={slides} />
      <TrustSRL />
      <AboutHome />
      <CarouselPrograme />
      <div id="proces"></div>
      <Proces />
      <WhyUs />
      {/* <FeaturedProducts 
        products={products}
      /> */}
      <News
         articles={articles}
      />
      <NewsLetter headingText={'Alătură-te comunității Inspirely! Abonează-te la newsletter pentru a primi cele mai bune soluții pentru afacerea ta.'} />
    </>
  )
}

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
