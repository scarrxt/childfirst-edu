import { useRef } from "react";
import { books } from "../data/books";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export const Books = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const revealClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";
  const transitionBase = "transition duration-700 ease-out";

  return (
    <section
      id="books"
      ref={sectionRef}
      className={`bg-[#1B1F3B] py-20 text-white transition duration-700 ease-out ${revealClass}`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className={`${transitionBase} ${revealClass} delay-100`}>
          <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#5B6EF5]">
            Books
          </div>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl text-white">
            Stories and activities that meet children where they are
          </h2>
          <p className="mt-4 text-base text-white/70">
            A growing collection of books designed to uplift confidence, spark
            imagination, and support learning growth.
          </p>
        </div>

        <div
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-4 ${transitionBase} ${revealClass} delay-200`}
        >
          {books.map((book) => (
            <article
              key={book.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div
                className={`rounded-2xl bg-gradient-to-br ${book.coverGradient} p-6 text-4xl`}
                role="img"
                aria-label={`${book.title} cover`}
              >
                {book.emoji}
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                {book.category}
              </span>
              <h3 className="text-xl font-semibold text-white">{book.title}</h3>
              <p className="text-sm text-white/70">{book.desc}</p>
            </article>
          ))}
        </div>

        <a
          href="https://wa.me/2348038592622"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center rounded-full bg-[#5B6EF5] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 ${transitionBase} ${revealClass} delay-300`}
        >
          Order via WhatsApp
        </a>
      </div>
    </section>
  );
};
