import Image from "next/image"
import Link from "next/link"

const Item1About = () => {
  return (
    <div className="w-full mx-auto px-7 md:px-[40px] xl:px-[140px] 2xl:px-[276px] gap-[6rem] flex gap-y-20 justify-between flex-wrap z-[2]">
      <div className="w-full flex-1 z-[2] gap-5 font-light">
        <h2 className="text-xl font-bold text-onSecondary z-[2] md:text-xl lg:text-2xl xl:text-4xl">
          Despre Inspirely
        </h2>
        <p className="text-white font-base max-w-[600px] text-[16px] mt-5 z-[2] mb-8">
          Bine ați venit la Inspirely, platforma care reunește soluții complete pentru afacerea ta, sub un singur nume. Inspirely aduce împreună branduri de top precum Consultify, specializată în accesarea fondurilor europene, Socialy, o agenție de marketing de elită, și Creditfy, experți în brokeraj de credite. În plus, oferim un e-commerce cu produse și servicii digitale disponibile online.
        </p>
        <p className="text-white font-base max-w-[600px] text-[16px] mt-5 z-[2]">
          La Noi credem în puterea colaborării și a soluțiilor integrate. La Inspirely, ne concentrăm pe nevoile și obiectivele tale specifice, oferindu-ți acces la resurse esențiale și expertiză de top. Fie că ai nevoie de consultanță pentru finanțare, strategii de marketing eficiente sau soluții de creditare, Inspirely este partenerul tău de încredere pentru a-ți dezvolta și crește afacerea.
        </p>
        <div className="flex gap-4 mt-6 z-[2]">
          <Link
            href="/despre"
            className="py-3 bg-transparent text-onSecondary flex items-center rounded-[28.5px] border-2 font-semibold border-primary px-10 sm:px-12 transition-all hover:scale-[1.05]"
          >
            Află mai mult
          </Link>
          <Link
            href="https://consultify.ro/blog"
            className="py-3 bg-tertiary text-onTertiary flex items-center font-semibold rounded-[28.5px] px-10 sm:px-12 transition-all hover:scale-[1.05]"
          >
            Noutăți
          </Link>
        </div>
      </div>
      <Image
        src="/images/home-about-1.png"
        alt="About home 1"
        className="relative rounded-[28.5px] w-full md:w-[450px] mx-auto z-[4]"
        width={400}
        height={400}
      />
    </div>
  )
}

export default Item1About