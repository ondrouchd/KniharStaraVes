import ContactCardDetails from "../components/ContactCardDetails";

const ContactPage = () => {
  return (
    <section className="bg-white ml-10 mr-10 h-50 grid grid-cols-1 lg:grid-cols-30/70 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 flex flex-col items-center">
        <h1 className="mb-4 text-gray-900 text-xl font-normal tracking-tight leading-none md:text-2xl lg:text-3xl">
          Kontakt
        </h1>
        <ContactCardDetails
          name="Radka Darebníčková"
          street="Stará Ves 15"
          city="750 02 Přerov"
          phone="775 150 919"
          email="radka.darebnickova@seznam.cz"
          ico="03683257"
          description="Jsem plátce DPH"
        />
        
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.862307624938!2d17.44932811570669!3d49.45895827935292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712d4f7d6c0a9d5%3A0x5e8d4b2f1c6b1e2d!2sStar%C3%A1%20Ves%2015%2C%20750%2002%20P%C5%99erov%2C%20%C4%8Cesko!5e0!3m2!1scs!2sus!4v1632362847138!5m2!1scs!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
