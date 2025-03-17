import WorkImage from "./WorkImage";

function WorkCarousel() {
  return (
    <article className="my-6 flex flex-col gap-y-10">
      <div className="h-0.25 w-full bg-stone-200/75" />
      <section className="flex cursor-col-resize snap-x items-center justify-start gap-x-4 overflow-x-scroll scroll-smooth px-12 select-none [scrollbar-width:none]">
        <WorkImage />
      </section>
      <div className="h-0.25 w-full bg-stone-200/75" />
    </article>
  );
}

export default WorkCarousel;
