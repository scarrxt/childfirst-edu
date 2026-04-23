import { useRef } from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export const Contact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const revealClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";
  const transitionBase = "transition duration-700 ease-out";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`bg-gradient-to-br from-[#1B1F3B] to-[#2D325A] py-20 text-white transition duration-700 ease-out ${revealClass}`}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div className={`${transitionBase} ${revealClass} delay-100`}>
          <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#5B6EF5]">
            Contact
          </div>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl text-white">
            Let's support your child with a clear, caring plan
          </h2>
          <p className="mt-4 text-base text-white/70">
            Reach out for consultations, assessments, or book orders. Every
            message is welcomed.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="https://wa.me/2348038592622"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                  💬
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-white/70">
                    WhatsApp
                  </div>
                  <div className="text-base font-semibold">+234 803 859 2622</div>
                </div>
              </div>
              <span aria-hidden="true">-&gt;</span>
            </a>

            <a
              href="mailto:info@childfirsteduconsult.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                  ✉️
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-white/70">
                    Email
                  </div>
                  <div className="text-base font-semibold">
                    info@childfirsteduconsult.com
                  </div>
                </div>
              </div>
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>

        <div
          className={`rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur ${transitionBase} ${revealClass} delay-200`}
        >
          <h3 className="text-2xl font-semibold text-white">Session Info</h3>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li>
              <span className="font-semibold text-white">Response time:</span> Within
              24 hours
            </li>
            <li>
              <span className="font-semibold text-white">Formats:</span> Virtual or
              in-person (Awka)
            </li>
            <li>
              <span className="font-semibold text-white">Age range:</span> Early years
              to pre-teen
            </li>
            <li>
              <span className="font-semibold text-white">Book orders:</span> Nationwide
              delivery available
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
