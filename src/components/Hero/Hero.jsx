function Hero() {
  return (
    <section className="bg-[#15181A]">

      <div className="mx-auto flex min-h-[88vh] max-w-[1200px] items-center justify-center px-6">

        <div className="flex max-w-3xl flex-col items-center text-center">

          <p className="mb-4 text-lg font-semibold text-orange-500">
            Restricted by opportunities?
          </p>

          <h1 className="mb-6 text-[54px] font-bold leading-[1.15] text-white lg:text-[72px]">
            Get the tech career
            <br />
            you deserve. Faster.
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-8 text-gray-400">
            Structured learning, expert mentorship, and career support to help
            you achieve your dream tech career.
          </p>

          <button className="rounded-xl bg-orange-500 px-8 py-3.5 text-lg font-semibold text-white transition hover:bg-orange-600">
            Explore Offerings
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;