import { useRef } from "react";
import { services } from "../data/services";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export const Services = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const revealClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";
  const transitionBase = "transition duration-700 ease-out";

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`bg-[#FAF8F3] py-20 transition duration-700 ease-out dark:bg-[#0F1120] ${revealClass}`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div
          className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${transitionBase} ${revealClass} delay-100`}
        >
          <div>
            <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#5B6EF5]">
              Services
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Practical guidance for every learning journey
            </h2>
            <p className="mt-4 text-base text-[#6B6B80] dark:text-[#64748B]">
              Targeted support that blends child psychology, evidence-based
              strategies, and compassionate coaching.
            </p>
          </div>
          <a
            href="https://wa.me/2348038592622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#5B6EF5] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Book a Session
          </a>
        </div>

        <div
          className={`grid gap-8 md:grid-cols-2 ${transitionBase} ${revealClass} delay-200`}
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-[#E8E3D8] border-l-4 border-l-transparent bg-white p-8 shadow-sm transition hover:-translate-y-1.5 hover:border-l-[#5B6EF5] hover:shadow-xl dark:border-[#2D3155] dark:bg-[#1A1D35]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE9FE] text-2xl dark:bg-[#1E1B4B]">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-[#6B6B80] dark:text-[#64748B]">
                {service.desc}
              </p>
              <a
                href={service.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5B6EF5]"
              >
                {service.ctaLabel} <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
