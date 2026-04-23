export interface Service {
  icon: string;
  title: string;
  desc: string;
  ctaLabel: string;
  ctaHref: string;
}

export const services: Service[] = [
  {
    icon: "🧠",
    title: "1-on-1 Child Consultation",
    desc: "Personalized sessions to understand learning needs, confidence gaps, and emotional wellbeing.",
    ctaLabel: "Chat on WhatsApp",
    ctaHref: "https://wa.me/2348038592622",
  },
  {
    icon: "💬",
    title: "Parent Coaching",
    desc: "Practical strategies to support learning at home, reduce stress, and build positive routines.",
    ctaLabel: "Send an Email",
    ctaHref: "mailto:info@childfirsteduconsult.com",
  },
  {
    icon: "🏫",
    title: "School & Group Workshops",
    desc: "Interactive sessions for schools, teachers, and communities focused on inclusive learning.",
    ctaLabel: "Request a Workshop",
    ctaHref: "mailto:info@childfirsteduconsult.com",
  },
  {
    icon: "📚",
    title: "Learning Assessments",
    desc: "Insightful assessments to identify strengths, learning styles, and targeted interventions.",
    ctaLabel: "Book an Assessment",
    ctaHref: "https://wa.me/2348038592622",
  },
];
