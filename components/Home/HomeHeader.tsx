import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import HomeCarousel from './carousel-home'
const HomeHeader = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [margin, setMargin] = useState<number>(0);
  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      setMargin(document.getElementById("hero-video")!.clientHeight);
    }, 250);
    window.addEventListener("resize", editMargin);
    return () => {
      window.removeEventListener("resize", editMargin);
    };
  }, []);
  const editMargin = () => {
    setMargin(document.getElementById("hero-video")!.clientHeight);
  };
  return (
    <>
      <section
        ref={sectionRef}
        id="HeroContainer"
        className={`relative flex flex-col w-full items-center justify-start relative px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]`}
        >
        <div className="z-10 w-full flex flex-col items-center gap-9 relative pt-12">
          <div className="relative flex items-center justify-center mb-8">
            <h1 className="text-white text-2xl lg:text-4xl 2xl:text-5xl font-bold text-center">
              Finanțarea potrivită <br className="block md:hidden"/> pentru firma potrivită!
            </h1>
            <Image
              id="hero-video"
              src="/images/home-header/home-line.svg"
              alt="Hero like"
              width={500}
              height={500}
              className="absolute w-[625px] right-0 -bottom-6 lg:w-[380px] 2xl:w-[500px] lg:-bottom-6 2xl:-bottom-10"
              />
          </div>
          <p className="text-white text-center text-[18px] lg:max-w-[60%]">
            Consultify este partenerul tău de încredere în obținerea finanțărilor nerambursabile, oferind soluții personalizate pentru dezvoltarea afacerii tale.
          </p>
          <button
            type="button"
            className="px-10 py-4 bg-[#BA63FF] text-[#fff] rounded-[28.5px] mb-12 text-base"
            >
            cum pot accesa fonduri?
          </button>
          <div className="relative w-[100%] home-carousel flex items-center justify-center mx-auto">
            <HomeCarousel />
            <Image
              id="hero-video"
              src="/images/polygon.svg"
              alt="Hero video"
              width={120}
              height={120}
              className="absolute z-[4] w-[100px] md:w-[160px] -top-10 -left-4 md:-top md:-top-10 xl:-left-4 xl:-top-14"
              />
          </div>
          </div>
        <span className="absolute block md:hidden -left-[4rem] -top-12 bg-[#260056] w-[127vw] h-[118%] -rotate-[5deg] z-[4] rounded-[0_0_165px_100px] overflow-hidden"/>
        <Image
          src="/images/circle-hero-right.svg"
          alt="Hero blue circle"
          width={200}
          height={200}
          className="block md:hidden absolute -right-36 -top-56 xl:top-0 z-[5] w-[321px]"
          />
        <Image
          src="/images/triangle-hero.svg"
          alt="Hero blue circle"
          width={140}
          height={140}
          className="block md:hidden absolute w-[82px] -right-0 bottom-[180px] z-[11]"
          />
        <Image
          src="/images/circle-hero-left.svg"
          alt="Hero green circle"
          width={200}
          height={200}
          className="block md:hidden absolute w-[176px] -left-20 -top-64 z-[100]"
        />
      </section>
      <span className="absolute hidden md:block -left-4 top-0 bg-[#260056] w-[102vw] md:h-[600px] z-[4] -rotate-[5deg] rounded-[0_0_164px_144px] xl:rounded-[0_0_200px_250px] overflow-hidden">
        <Image
          src="/images/circle-hero-right.svg"
          alt="Hero blue circle"
          width={200}
          height={200}
          className="absolute -right-12 -top-4 xl:top-0 z-[5] w-[140px] xl:w-[378px]"
          />
        <Image
          src="/images/triangle-hero.svg"
          alt="Hero blue circle"
          width={140}
          height={140}
          className="absolute -right-8 w-24 xl:w-[140px] bottom-[1.5rem] z-[100] xl:right-[300px] xl:bottom-28 z-[11]"
          />
        <Image
          src="/images/circle-hero-left.svg"
          alt="Hero green circle"
          width={200}
          height={200}
          className="absolute w-[100px] md:w-[250px] md:left-0 md:-top-30 z-[100]"
        />
      </span>
    </>
  );
};
export default HomeHeader;
