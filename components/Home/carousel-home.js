import Carousel from 'react-elastic-carousel'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomeCarousel = ({ slides }) => {
    return(
        <Carousel
            isRTL={false}
            pagination={true}
            disableArrowsOnEnd={false}
            autoPlaySpeed={10000}
            enableAutoPlay={true}
        >
            {
                slides.map((slide) => (
                    <Link href={slide.link} className='w-full flex items-center relative justify-center' key={slide.id}>    
                        <Image
                            id="hero-video"
                            src={slide.image}
                            alt="Hero video"
                            width={2000}
                            height={2000}
                            className="w-full h-auto rounded-[18px] md:rounded-[36px] lg:w-[90%] z-[5]"
                        />
                    </Link>
                ))
            }
        </Carousel>
    )
}

export default HomeCarousel