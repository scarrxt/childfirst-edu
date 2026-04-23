export const Footer = () => {
  return (
    <footer className="bg-[#12152B] text-[#CBD5E1]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-cormorant text-2xl font-semibold text-white">
            Childfirst
          </div>
          <p className="mt-4 text-sm text-white/70">
            Educational consult by Mrs. Ebele Iwogbe. Building confident learners
            through care, clarity, and collaboration.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Services</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Child Consultation</li>
            <li>Parent Coaching</li>
            <li>School Workshops</li>
            <li>Learning Assessments</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Books</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>The Brave Little Dreamer</li>
            <li>Learn & Play Activity Book</li>
            <li>Rising From Within</li>
            <li>You Were Made for More</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a
                href="https://wa.me/2348038592622"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:info@childfirsteduconsult.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                info@childfirsteduconsult.com
              </a>
            </li>
            <li>Awka, Anambra State</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>(c) 2026 Childfirst Educational Consult. All rights reserved.</span>
          <span>Awka, Anambra State, Nigeria</span>
        </div>
      </div>
    </footer>
  );
};
