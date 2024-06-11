import ContactCard from "./ContactCard";

const Content = () => {
  return (
    <section className="bg-white ml-10 mr-10 h-50 grid grid-cols-1 lg:grid-cols-70/30 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-gray-900 text-xl font-normal tracking-tight leading-none md:text-2xl lg:text-3xl">
          Vazba diplomových prací v okolí Přerova, vázání publikací, výroba
          desek
        </h1>
        <p className="mb-8 text-gray-500 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
          Jmenuji se Radka Darebníčková, pocházím ze Staré Vsi, v okrese Přerov,
          a provádím knihařské práce. Zajišťuji skládání archů (max. 4 lomy),
          vazbu diplomových prací, vázání a převazování knih, vazbu
          malonákladového tisku do 1000 ks, V1, V2, V8, výrobu různých desek,
          dle návrhu zákazníka.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"></div>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 flex flex-col items-center">
        <h1 className="mb-4 text-gray-900 text-xl font-normal tracking-tight leading-none md:text-2xl lg:text-3xl">
          Více informací
        </h1>
        <p>
          Pro více informací volejte na uvedené telefonní číslo. Těším se na
          vaši poptávku. Najdete mě ve Staré Vsi u Přerova.
        </p>
        <ContactCard
          name="Radka Darebníčková"
          street="Stará Ves 15"
          city="750 02 Přerov"
          phone="775 150 919"
        />
      </div>
    </section>
  );
};

export default Content;
