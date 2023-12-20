import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NewsLetter from "../../components/global/newsletter";
import Head from "next/head";
import CTA from "../../components/CTA";
import Axios from "axios";
import toast from "react-hot-toast";
import Proces from "../../components/Proces";
import OurServices from "../../components/OurServices";
import Garantii from "../../components/Garantii";
import PageHeader from "../../components/Header/PageHeader";

export default function Servicii() {
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [scrollAmount]);
  
  const [newsletter, setNewsletter] = useState('Adresa ta de email');
  // const [buttonNews, setButtonNews] = useState('Mă abonez')
  
  const upload = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    Axios.get('https://api.inspiredconsulting.ro/newsletter', {
      params: {
        email: newsletter
      },
    })
    .then(function (response) {
      console.log(response.data)
      if (response.data == 'Esti deja abonat la newsletter') {
        toast.error('Esti deja abonat la newsletter')
      } else {
        toast.success("Te-ai abonat la newsletter cu succes")
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  };
  return (
    <>
        <Head>
            <title>Socialy | Servicii</title>
        </Head>
        <PageHeader
          title="Împreună pentru succesul tău: servicii și produse de calitate"
        >
          <Image
              src="/images/star.svg"
              alt="Hero blue circle"
              width={100}
              height={200}
              className="absolute -right-12 bottom-24 md:bottom-12 z-[5] w-[120px] md:w-[200px]"
          />
          <Image
              src="/images/proces/hexagon.svg"
              width={130}
              height={130}
              className="absolute bottom-[88px] -left-12 md:bottom-5 md:left-0 w-[100px] md:w-[130px]"
              alt="Yellow triangle"
          />
        </PageHeader>
        <OurServices />
        <Proces />
        <Garantii />
        <CTA
          title="Acțiunea ta contează - Începe-ți <purple>proiectul<purple> de succes acum!"
          linkText="Completează formularul!"
          linkHref="/contact"
        />
        {/* <div className="w-full mt-32 px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]">
            <div className="flex justify-start items-start">
                <h3 className="md:text-xl lg:text-2xl xl:text-[32px] text-[#8717F8] font-bold">
                  Crește eficiența și productivitatea cu serviciile  <br /> și produsele digitale oferite de Consultify și Inspirely!
                </h3>
            </div>
            <WhyUsCart />
            <Link href='/shop' className="bg-[#8717F8] flex items-center justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 text-white rounded-[28.5px] hover:scale-[1.05] transition-all">
                Vezi toate produsele
            </Link>
        </div> */}
        {/* <News /> */}
        <NewsLetter headingText='Alătură-te comunității noastre și fii la curent cu cele mai noi oportunități de finanțare!' />
    </>
  );
}
