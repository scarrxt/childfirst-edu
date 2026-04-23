import { useRef } from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const revealClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";
  const transitionBase = "transition duration-700 ease-out";

  return (
    <section
      id="top"
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden pt-24 transition duration-700 ease-out ${revealClass}`}
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-0 h-80 w-80 rounded-full bg-[#5B6EF5]/20 blur-3xl" />

      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 py-12 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <span
            className={`inline-flex items-center gap-2 rounded-full bg-[#EDE9FE] px-4 py-2 text-xs font-semibold text-[#5B6EF5] dark:bg-[#1E1B4B] ${transitionBase} ${revealClass} delay-100`}
          >
            Certified Educational Consultant
          </span>
          <h1
            className={`mt-6 text-4xl font-semibold md:text-5xl lg:text-6xl ${transitionBase} ${revealClass} delay-200`}
          >
            Helping every child find their
            <span className="italic text-[#5B6EF5]"> confident voice</span> in learning
          </h1>
          <p
            className={`mt-6 text-base text-[#6B6B80] dark:text-[#64748B] md:text-lg ${transitionBase} ${revealClass} delay-300`}
          >
            Mrs. Ebele Iwogbe partners with families and schools to nurture
            confidence, curiosity, and emotional wellbeing for children.
          </p>

          <div
            className={`mt-8 flex flex-wrap items-center gap-4 ${transitionBase} ${revealClass} delay-300`}
          >
            <a
              href="https://wa.me/2348038592622"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              WhatsApp Now
            </a>
            <a
              href="#services"
              className="rounded-full border border-[#5B6EF5] px-6 py-3 text-sm font-semibold text-[#5B6EF5] transition hover:bg-[#5B6EF5] hover:text-white"
            >
              Explore Services
            </a>
          </div>

          <div
            className={`mt-10 grid grid-cols-3 gap-6 ${transitionBase} ${revealClass} delay-300`}
          >
            {[
              { value: "200+", label: "Children" },
              { value: "12", label: "Books" },
              { value: "10+", label: "Years" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[#1B1F3B] dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#6B6B80] dark:text-[#64748B]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden w-full justify-center lg:flex lg:w-1/2">
          <div
            className={`relative w-full max-w-sm ${transitionBase} ${revealClass} delay-200`}
          >
            <div className="rounded-3xl bg-white p-10 text-center shadow-2xl dark:bg-[#1A1D35]">
              <div className="text-7xl" role="img" aria-label="Consultant portrait placeholder">
                👩🏽‍🏫
              </div>
              <p className="mt-4 text-sm text-[#6B6B80] dark:text-[#64748B]">
                Child-first guidance and care
              </p>
            </div>

            <div className="absolute -top-6 -left-8 rounded-2xl bg-white px-4 py-3 text-xs shadow-lg animate-bounce-slow dark:bg-[#1A1D35]">
              📘 Reading Support
            </div>
            <div className="absolute -bottom-6 right-4 rounded-2xl bg-white px-4 py-3 text-xs shadow-lg animate-bounce-slower dark:bg-[#1A1D35]">
              💬 Parent Coaching
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
