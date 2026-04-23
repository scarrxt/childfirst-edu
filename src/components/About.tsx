import { useRef } from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const tags = [
  "Child Psychology",
  "Published Author",
  "School Partnerships",
  "Parent Coaching",
  "Learning Assessment",
];

export const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const revealClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";
  const transitionBase = "transition duration-700 ease-out";

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`bg-white py-20 transition duration-700 ease-out dark:bg-[#1A1D35] ${revealClass}`}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <div className={`relative ${transitionBase} ${revealClass} delay-100`}>
          <div className="rounded-3xl bg-[#F4F1E8] p-10 text-center shadow-xl dark:bg-[#1E1B4B]">
            <div className="text-7xl" role="img" aria-label="Mrs. Ebele Iwogbe portrait">
              👩🏽‍🏫
            </div>
            <p className="mt-4 text-sm text-[#6B6B80] dark:text-[#CBD5E1]">
              Mrs. Ebele Iwogbe
            </p>
          </div>
          <div className="absolute -top-4 left-6 rounded-full bg-[#F59E0B] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
            10+ Years
          </div>
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-3xl bg-[#EDE9FE] dark:bg-[#1E1B4B]" />
        </div>

        <div className={`${transitionBase} ${revealClass} delay-200`}>
          <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#5B6EF5]">
            About Childfirst
          </div>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Building confident learners with heart, structure, and clarity
          </h2>
          <p className="mt-6 text-base text-[#6B6B80] dark:text-[#64748B]">
            Childfirst Educational Consult partners with families and schools to
            guide children through learning challenges, emotional transitions, and
            growth milestones with empathy and expertise.
          </p>
          <p className="mt-4 text-base text-[#6B6B80] dark:text-[#64748B]">
            From tailored assessments to parent coaching, every service is rooted
            in a simple promise: every child deserves to feel seen, supported, and
            capable.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#EDE9FE] px-4 py-2 text-sm font-semibold text-[#1B1F3B] dark:bg-[#1E1B4B] dark:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
