const Jumbotron = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <section className="bg-[#f8f5f0] ml-10 mr-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-normal tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          {subtitle}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"></div>
      </div>
    </section>
  );
};

export default Jumbotron;
