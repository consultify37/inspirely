import Image from "next/image";
import Link from "next/link";

const Item1Story = () => {
  return (
    <article className="flex flex-wrap gap-y-10 gap-x-[6rem] mt-10 md:mt-32 justify-between items-center">
      <div className="flex-1">
        <h2 className="text-secondary font-bold text-xl mb-6 md:text-xl lg:text-2xl xl:text-3xl">
          Ne diferențiem prin:
        </h2>
        <p className="text-secondary font-normal text-[14px] md:text-base">
          Abilitatea noastră de a fi un partener de încredere pentru clienții noștri, ajutându-i să obțină finanțarea necesară pentru a-și atinge obiective. La Consultify, lucrăm strâns cu clienții noștri, oferindu-le soluții personalizate pentru fiecare proiect.
        </p>
        <br />
        <p className="text-secondary font-normal text-[14px] md:text-base">
          Echipa noastră tânără și dinamică este dedicată clienților și lucrează individual cu fiecare dintre ei pentru a înțelege și aborda nevoile specifice. De la evaluarea inițială până la prezentarea finală a proiectului, suntem mereu alături de clienții noștri, asigurându-ne că obțin finanțarea necesară. Cu o rată de succes ridicată și o abordare personalizată, Consultify este partenerul ideal în accesarea fondurilor europene.
        </p>
        <div className="flex gap-4 mt-6">
          <Link
            href="/blog" 
            className="bg-tertiary py-3 text-[14px] lg:text-[16px] text-onTertiary font-semibold rounded-[28.5px] px-12 hover:scale-[1.05] transition-all"
          >
            Noutăți
          </Link>
          <Link
            href="/shop"
            className="py-3 text-[14px] lg:text-[16px] bg-transparent font-semibold text-secondary flex items-center rounded-[28.5px] border-2 border-primary px-12 hover:scale-[1.05] transition-all"
          >
            Shop
          </Link>
        </div>
      </div>
      <Image
        src="/images/About/Pag - despre noi - structura despre noi.png"
        alt="Our Story 2"
        className="w-full md:max-w-[450px] md:h-[400px] object-cover rounded-[35px]"
        width={300}
        height={300}
      />
    </article>
  );
};

export default Item1Story;
