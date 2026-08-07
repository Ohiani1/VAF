export const causes = [
  {
    slug: "economic-empowerment",
    title: "Economic Empowerment & Craft Training",
    summary:
      "Hands-on training that turns real skills — bag-making, tailoring, small business basics — into steady income for the women in our network.",
    image: "/images/carousel/vaf3.jpeg",
    body: [
      "We partner with local makers and business owners to run practical, paid-outcome training for women — from Ankara bag production to the fundamentals of running a small business.",
      "The goal isn't a certificate. It's a woman leaving the program with a skill she can sell, and a first customer to sell it to.",
    ],
  },
  {
    slug: "e1x-tech-academy",
    title: "Tech Skills Partnership with E1X Academy",
    summary:
      "A partnership offering 19 in-demand tech courses — data, AI, software, design, and digital marketing — to help young people build future-proof careers.",
    image: "/images/eix_academy_poster.jpeg",
    body: [
      "Alongside E1X Academy, VAF supports access to industry-relevant, expert-led training across Data & Analytics, AI, Software & Engineering, Design & Product, and Marketing & Business.",
      "Courses are hands-on and career-focused, built for young people looking to start, switch, or scale into a tech career — not just collect a certificate.",
    ],
    signup: {
      url: "https://link.nextaflow.net/widget/form/fCJKuf3pXp719wDty5hn",
      qr: "/images/eix-signup-qr.png",
      label: "Enrol in the current cohort",
    },
  },
  {
    slug: "community-outreach",
    title: "Community Feeding & Relief Outreach",
    summary:
      "Seasonal feeding programs and relief distribution that bring food and essentials directly to families and children in underserved neighbourhoods.",
    image: "/images/carousel/vaf11.jpeg",
    body: [
      "Our outreach team works directly in communities across Lagos, distributing food parcels and essentials during the festive season and in response to immediate need.",
      "These drives are volunteer-powered and built on direct relationships with the families and community leaders we serve.",
    ],
  },
];

export function getCause(slug) {
  return causes.find((c) => c.slug === slug);
}

