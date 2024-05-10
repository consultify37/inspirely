import React from "react"
import Carousel from "react-elastic-carousel"
import DivisionCard from "../Home/DivisionCard"

const divisions = [
    {   
        code: 'Consultify',
        numberOfStars: 4.4,
        title: 'Consultanță fonduri europene',
        bulletPoints: ['Consultanță fonduri europene', 'Vechime de peste 5 ani', 'Peste 850 de clienți fericiți'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh vel massa iaculis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ac orci at convallis. Vivamus a auctor sapien, sed viverra erat. Cras aliquam auctor urna. Pellentesque molestie orci quis leo ornare dapibus. Nulla auctor finibus aliquam. Etiam vitae efficitur orci, id gravida sapien. Nulla facilisis est lorem, tincidunt elementum felis bibendum eu.',
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
        numberOfStars: 4.5,
        title: 'Consultanță marketing',
        bulletPoints: ['Consultanță fonduri europene', 'Vechime de peste 5 ani', 'Peste 850 de clienți fericiți'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh vel massa iaculis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ac orci at convallis. Vivamus a auctor sapien, sed viverra erat. Cras aliquam auctor urna. Pellentesque molestie orci quis leo ornare dapibus. Nulla auctor finibus aliquam. Etiam vitae efficitur orci, id gravida sapien. Nulla facilisis est lorem, tincidunt elementum felis bibendum eu.',
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
        title: 'Dezvoltarea afacerii tale',
        bulletPoints: ['Consultanță fonduri europene', 'Vechime de peste 5 ani', 'Peste 850 de clienți fericiți'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh vel massa iaculis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ac orci at convallis. Vivamus a auctor sapien, sed viverra erat. Cras aliquam auctor urna. Pellentesque molestie orci quis leo ornare dapibus. Nulla auctor finibus aliquam. Etiam vitae efficitur orci, id gravida sapien. Nulla facilisis est lorem, tincidunt elementum felis bibendum eu.',
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
            <h2 className="text-primary text-[16px] md:text-[32px] font-bold mb-2 md:mb-4 text-center">cei care vor face posibil succesul afacerii tale</h2>
            <Carousel
                pagination={true}
                isRTL={false}
                disableArrowsOnEnd={false}
                className="relative w-full carousel-fonduri mt-8 md:-mb-8"
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