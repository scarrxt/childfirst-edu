import { useEffect, useState } from "react";

type NavbarProps = {
  isDark: boolean;
  onToggle: () => void;
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Books", href: "#books" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = ({ isDark, onToggle }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? "shadow-lg backdrop-blur bg-[#FAF8F3]/95 dark:bg-[#0F1120]/95"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-cormorant text-2xl font-bold text-[#1B1F3B] dark:text-white">
            Childfirst
          </span>
          <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#5B6EF5]">
            Educational Consult
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#2C2C3E] transition hover:text-[#5B6EF5] dark:text-[#CBD5E1]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center md:flex">
          <a
            href="https://wa.me/2348038592622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#5B6EF5] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            📲 Book a Session
          </a>
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={onToggle}
            className="ml-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E3D8] transition hover:border-[#5B6EF5] dark:border-[#2D3155]"
          >
            {isDark ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 text-[#F59E0B]"
                fill="none"
              >
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 2V5M12 19V22M4.22 4.22L6.34 6.34M17.66 17.66L19.78 19.78M2 12H5M19 12H22M4.22 19.78L6.34 17.66M17.66 6.34L19.78 4.22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 text-[#5B6EF5]"
                fill="none"
              >
                <path
                  d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={onToggle}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E3D8] transition hover:border-[#5B6EF5] dark:border-[#2D3155]"
          >
            {isDark ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 text-[#F59E0B]"
                fill="none"
              >
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 2V5M12 19V22M4.22 4.22L6.34 6.34M17.66 17.66L19.78 19.78M2 12H5M19 12H22M4.22 19.78L6.34 17.66M17.66 6.34L19.78 4.22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 text-[#5B6EF5]"
                fill="none"
              >
                <path
                  d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E3D8] dark:border-[#2D3155]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal={isOpen}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] flex min-h-screen flex-col overflow-y-auto bg-[#FAF8F3] px-6 py-6 transition duration-300 ease-out dark:bg-[#0F1120] ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
          <div className="flex items-center justify-between">
            <span className="font-cormorant text-2xl font-bold text-[#1B1F3B] dark:text-white">
              Childfirst
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E3D8] text-lg dark:border-[#2D3155]"
            >
              X
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-8 text-2xl font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#1B1F3B] transition hover:text-[#5B6EF5] dark:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/2348038592622"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#5B6EF5] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            📲 Book a Session
          </a>
      </div>
    </nav>
  );
};
