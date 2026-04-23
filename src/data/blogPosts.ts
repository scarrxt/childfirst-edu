export interface BlogPost {
  emoji: string;
  bgClass: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    emoji: "📖",
    bgClass: "bg-[#EDE9FE] dark:bg-[#1E1B4B]",
    tag: "Reading Support",
    title: "Understanding reading difficulties early",
    excerpt:
      "Signs to watch for, what to ask your child, and how to build confidence one page at a time.",
    readTime: "6 min read",
  },
  {
    emoji: "🧩",
    bgClass: "bg-[#DBEAFE] dark:bg-[#1E293B]",
    tag: "Learning Motivation",
    title: "How to grow a love of learning at home",
    excerpt:
      "Simple routines and language shifts that make learning feel safe, curious, and exciting.",
    readTime: "5 min read",
  },
  {
    emoji: "💛",
    bgClass: "bg-[#FEF9C3] dark:bg-[#3B2F14]",
    tag: "Emotional Intelligence",
    title: "Helping children name and manage big emotions",
    excerpt:
      "A practical guide for parents on empathy, validation, and calm problem-solving.",
    readTime: "7 min read",
  },
];
