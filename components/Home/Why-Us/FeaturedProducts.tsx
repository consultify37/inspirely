/* eslint-disable react/jsx-key */
import React, { createRef, useEffect, useRef, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Product } from '../../../types'
import { backCarousel, nextCarousel } from '../../../utils/functions'
import ProductCard from '../../shop/ProductCard'
import Link from 'next/link'

type Props = {
  products: Product[]
  dark?: boolean
  title?: string
}

const FeaturedProducts = ({ products, dark=false, title='Inspirely vine în ajutorul tău cu produse digitale<br /> pentru scalarea afacerii tale:' }: Props) => {
  const [scrollAmount, setScrollAmount] = useState(0)
  const [cardRef, setCardRef] = useState< any >([])
  const carouselRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    // add or remove refs
    setCardRef((cardRefs: any) =>
      Array(products.length)
        .fill(undefined)
        .map((_, i) => cardRefs[i] || createRef())
    )
  }, [products, products.length])
  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return console.log("nu exista")
    carouselRef.current.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    }) //
  }, [scrollAmount])

  return(
    <div className="flex flex-col mt-20 lg:mt-40">
      <div className="flex justify-between w-full items-center">
        <h2 
          className="md:text-xl lg:text-2xl xl:text-[32px] text-primary font-bold pl-7 md:pl-[80px] xl:pl-[140px] 2xl:pl-[276px]"
          style={{color: dark ? 'white' : '#0F52FF' }}
        >
          { title.split('<br />').map((item, index) => <>{item}{ index != title.split('<br />').length -1 ? <br/> : null}</>)}
        </h2>
        <div className="flex flex-row pr-7 md:pr-[80px] xl:pr-[140px] 2xl:pr-[276px]">
          <span
            className="bg-primary w-[43px] h-[43px] flex items-center justify-center rounded-full cursor-pointer mr-2 hover:scale-105 transition-all"
            onClick={() =>
              backCarousel(setScrollAmount, carouselRef, cardRef[0])
            }
          >
            <AiOutlineArrowLeft className="text-onPrimary" size={18} />
          </span>
          <span
            className="bg-primary w-[43px] h-[43px] flex items-center justify-center rounded-full cursor-pointer mr-2 hover:scale-105 transition-all"
            onClick={() =>
              nextCarousel(setScrollAmount, carouselRef, cardRef[0])
            }
          >
            <AiOutlineArrowRight className="text-onPrimary" size={18} />
          </span>
        </div>
      </div>
      <div
        className="flex gap-4 md:gap-5 xl:gap-6 items-stretch overflow-y-auto scrollbar-none pb-6 pt-6"
        ref={carouselRef}
      >
        { products.map((item, index) => (
          <div key={item.id!+index} className={ index == 0 ? ' ml-7 md:ml-[80px] xl:ml-[140px] 2xl:ml-[276px] ' : '' }>
            <ProductCard 
              cardRef={cardRef[index]}
              hasMargin={index == products.length - 1}
              product={item}
              className="w-[280px] min-w-[280px]"
            />
          </div>
        ))}
      </div>

      <Link
        href='/shop'
        className='py-3 lg:py-4 w-fit self-center px-16 bg-primary flex items-center justify-center rounded-full hover:scale-105 transition-all mt-8 lg:mt-12 lg:mb-6 mb-12'
      >
        <p className='text-onPrimary font-semibold text-[14px]'>Vezi toate produsele</p>
      </Link>
    </div>
  )
}

export default FeaturedProducts