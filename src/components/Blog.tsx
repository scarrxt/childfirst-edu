import { useRef } from "react";
import { blogPosts } from "../data/blogPosts";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export const Blog = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const revealClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";
  const transitionBase = "transition duration-700 ease-out";

  return (
    <section
      id="resources"
      ref={sectionRef}
      className={`bg-[#FAF8F3] py-20 transition duration-700 ease-out dark:bg-[#0F1120] ${revealClass}`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className={`${transitionBase} ${revealClass} delay-100`}>
          <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#5B6EF5]">
            Resources
          </div>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Insights for parents, teachers, and caregivers
          </h2>
          <p className="mt-4 text-base text-[#6B6B80] dark:text-[#64748B]">
            Practical guidance for building strong learning habits and emotional
            resilience.
          </p>
        </div>

        <div
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 ${transitionBase} ${revealClass} delay-200`}
        >
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl dark:bg-[#1A1D35] ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div
                className={`flex items-center justify-center rounded-2xl p-6 text-4xl ${post.bgClass}`}
                role="img"
                aria-label={post.tag}
              >
                {post.emoji}
              </div>
              <span className="w-fit rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-semibold text-[#5B6EF5] dark:bg-[#1E1B4B]">
                {post.tag}
              </span>
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-[#6B6B80] dark:text-[#64748B]">
                {post.excerpt}
              </p>
              <div className="mt-auto text-xs uppercase tracking-[0.18em] text-[#6B6B80] dark:text-[#64748B]">
                By Childfirst - {post.readTime}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
