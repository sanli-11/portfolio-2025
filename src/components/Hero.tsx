function Hero() {
  return (
    <article className="mx-auto h-dvh w-full max-w-7xl py-12">
      <section className="flex flex-col items-start justify-start gap-y-9">
        <hgroup className="flex flex-col gap-y-6">
          <h1 className="font-display max-w-7xl text-7xl/[1.1] tracking-wide">
            Developing websites <span className="font-sans">&</span> apps
            <span className="block">for immersive digital experiences.</span>
          </h1>
          <p className="max-w-3xl text-3xl text-stone-500">
            We create and deliver websites and apps that position your business
            for long-term success.
          </p>
        </hgroup>
        <button
          className="rounded-full border border-black bg-black px-5 py-2 font-bold tracking-tight text-white shadow-2xs transition-colors hover:border-stone-400 hover:bg-white hover:text-black"
          type="button"
        >
          Let's Talk
        </button>
      </section>
    </article>
  );
}

export default Hero;
