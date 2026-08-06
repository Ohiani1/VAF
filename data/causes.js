export const causes = [
  {
    slug: "send-food",
    title: "Help Us Send Food",
    summary:
      "Emergency food support for families facing hunger in Surulere and neighbouring communities.",
    raised: 5000,
    goal: 9000,
    body: [
      "Food insecurity remains one of the most immediate barriers to a stable life for the families we work with. This fund provides staple groceries, cooked meals, and emergency food parcels to households referred through our community outreach.",
      "Every donation goes directly toward sourcing and distributing food within Lagos, with priority given to households supporting children and elderly relatives.",
    ],
  },
  {
    slug: "clothes-for-everyone",
    title: "Clothes for Everyone",
    summary:
      "Seasonal clothing drives that put dignity and comfort within reach for youths and women rebuilding their lives.",
    raised: 5000,
    goal: 9000,
    body: [
      "A change of clothes sounds small until you don't have one. This fund collects, sorts, and distributes clothing to young people and women coming through our training and shelter programs.",
      "We work with local tailors where possible, turning part of each drive into paid mending and alteration work for women in our economic empowerment track.",
    ],
  },
  {
    slug: "water-for-all",
    title: "Water for All Children",
    summary:
      "Clean, reliable water access for children in underserved neighbourhoods, reducing preventable illness.",
    raised: 5000,
    goal: 9000,
    body: [
      "Access to clean water changes school attendance, health outcomes, and the daily workload placed on young girls in particular. This fund supports water points, filtration, and community education on safe storage.",
      "We prioritise sites near schools and community centres so the benefit compounds across a whole neighbourhood, not just one household.",
    ],
  },
];

export function getCause(slug) {
  return causes.find((c) => c.slug === slug);
}
