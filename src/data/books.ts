export interface Book {
  emoji: string;
  coverGradient: string;
  category: string;
  title: string;
  desc: string;
}

export const books: Book[] = [
  {
    emoji: "🌟",
    coverGradient: "from-[#5B6EF5] via-[#8B5CF6] to-[#F59E0B]",
    category: "Confidence & Mindset",
    title: "The Brave Little Dreamer",
    desc: "A gentle story that helps children build courage, curiosity, and self-belief.",
  },
  {
    emoji: "🎨",
    coverGradient: "from-[#22C55E] via-[#14B8A6] to-[#0EA5E9]",
    category: "Activity & Play",
    title: "Learn & Play Activity Book",
    desc: "Engaging activities that spark creativity, focus, and joyful learning.",
  },
  {
    emoji: "🌈",
    coverGradient: "from-[#F97316] via-[#FB7185] to-[#A855F7]",
    category: "Emotional Growth",
    title: "Rising From Within",
    desc: "Guiding children through big feelings with empathy, hope, and resilience.",
  },
  {
    emoji: "🚀",
    coverGradient: "from-[#0EA5E9] via-[#2563EB] to-[#1E1B4B]",
    category: "Purpose & Potential",
    title: "You Were Made for More",
    desc: "A powerful reminder that every child has unique gifts worth celebrating.",
  },
];
