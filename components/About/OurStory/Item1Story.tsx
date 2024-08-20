import Image from "next/image";
import Link from "next/link";

const Item1Story = () => {
  return (
    <article className="flex flex-wrap gap-y-10 gap-x-[6rem] mt-10 md:mt-32 justify-between items-center">
      <div className="flex-1">
        <h2 className="text-secondary font-bold text-xl mb-6 md:text-xl lg:text-2xl xl:text-3xl">
          Care este povestea noastră?
        </h2>
        <p className="text-secondary font-normal text-[14px] md:text-base">
          Inspirely s-a născut din nevoia de a crea un ecosistem de servicii care să susțină afacerile în toate etapele lor de creștere. Fondată de o echipă de specialiști, Inspirely integrează expertiza Consultify în accesarea fondurilor europene, creativitatea Socialy în marketing digital și eficiența Creditfy în soluțiile de creditare. 
        </p>
        <br />
        <p className="text-secondary font-normal text-[14px] md:text-base">
          Povestea noastră este despre inovație și parteneriat. De la primele colaborări și până astăzi, am rămas dedicați misiunii de a furniza soluții de înaltă calitate, ajutând clienții noștri să depășească provocările și să se dezvolte sustenabil.
        </p>
        <div className="flex gap-4 mt-6 md:mt-8">
          <Link
            href="/blog" 
            className="bg-tertiary py-3 text-[14px] lg:text-[16px] text-onTertiary font-semibold rounded-[28.5px] px-12 hover:scale-[1.05] transition-all"
          >
            Noutăți
          </Link>
          <Link
            href="#"
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
