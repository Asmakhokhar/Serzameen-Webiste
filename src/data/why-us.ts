export interface WhyUsItem {
  number: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  featured?: boolean;
}

export const whyUsItems: WhyUsItem[] = [
  {
    number: "01.",
    title: "Curated Properties",
    description:
      "We carefully select properties that stand out for their location, quality, design and long-term potential.",
    icon: "✦",
  },
  {
    number: "02.",
    title: "Expert Guidance",
    description:
      "From your first enquiry to your final decision, we bring market knowledge, thoughtful advice and a clear understanding of what matters to you.",
    icon: "◈",
    image: "/why2.jfif",
    featured: true,
  },
  {
    number: "03.",
    title: "Market Insight",
    description:
      "Our understanding of local markets helps you identify opportunities with genuine value and lasting potential.",
    icon: "↗",
  },
  {
    number: "04.",
    title: "Trusted Service",
    description:
      "Transparent communication and a client-first approach keep every step of your property journey simple and confident.",
    icon: "◇",
  },
];
