import { useRef } from "react";
import { testimonials } from "../data/testimonials";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const revealClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";
  const transitionBase = "transition duration-700 ease-out";

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`bg-white py-20 transition duration-700 ease-out dark:bg-[#1A1D35] ${revealClass}`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className={`${transitionBase} ${revealClass} delay-100`}>
          <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#5B6EF5]">
            Testimonials
          </div>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Families and educators share their stories
          </h2>
        </div>

        <div
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${transitionBase} ${revealClass} delay-200`}
        >
          {testimonials.map((testimonial, index) => {
            const isHighlighted = index === 1;
            return (
              <article
                key={testimonial.name}
                className={`flex h-full flex-col gap-6 rounded-2xl p-6 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl ${
                  isHighlighted
                    ? "bg-[#1B1F3B] text-white"
                    : "bg-[#FAF8F3] text-[#1B1F3B] dark:bg-[#0F1120] dark:text-white"
                }`}
              >
                <div className="text-sm">★★★★★</div>
                <p className="text-base italic">"{testimonial.quote}"</p>
                <div className="mt-auto flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.avatarGradient} text-xl`}
                    role="img"
                    aria-label={testimonial.name}
                  >
                    {testimonial.avatarEmoji}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{testimonial.name}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-white/70">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
