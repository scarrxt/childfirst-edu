export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarEmoji: string;
  avatarGradient: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mrs. Iwogbe helped us understand our son's learning style. His confidence has soared.",
    name: "Adaeze Okonkwo",
    role: "Parent of a 7-year-old",
    avatarEmoji: "👩🏽‍🦱",
    avatarGradient: "from-[#F59E0B] to-[#F97316]",
  },
  {
    quote:
      "The coaching sessions gave us tools we use daily. Our home is calmer and learning feels joyful.",
    name: "Emeka Nwosu",
    role: "Father and educator",
    avatarEmoji: "👨🏾‍🏫",
    avatarGradient: "from-[#22C55E] to-[#14B8A6]",
  },
  {
    quote:
      "Her workshop was engaging and practical. Our teachers left with real strategies they love.",
    name: "Chioma Eze",
    role: "School administrator",
    avatarEmoji: "👩🏾‍💼",
    avatarGradient: "from-[#6366F1] to-[#A855F7]",
  },
];
