// Central place for business details.
export const siteConfig = {
  name: "Reverse Physio",
  tagline: "Reverse pain. Restore movement. Reclaim life.",
  valueProp:
    "45–60 minute appointments combining technology, hands-on manual therapy, and high-performance training.",
  url: "https://reversephysio.com",
  email: "hello@reversephysio.com",

  whatsapp: {
    display: "+65 8991 2816",
    e164: "6589912816",
    bookingHref:
      "https://wa.me/6589912816?text=Hi%20Reverse%20Physio%2C%20I%27d%20like%20to%20book%20an%20appointment",
    generalHref: "https://wa.me/6589912816",
  },

  hoursNote: "By appointment only",
  hours: [
    {
      label: "Tuesday – Saturday",
      timeLabel: "9:00 AM – 8:00 PM",
      schemaDays: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      label: "Sunday – Monday",
      timeLabel: "Closed",
      schemaDays: [],
      opens: null,
      closes: null,
    },
  ],

  locations: [
    {
      slug: "anson-road",
      shortName: "Anson Road",
      name: "International Plaza, Anson Road",
      street: "10 Anson Road, #02-20, International Plaza",
      postalCode: "079903",
      country: "SG",
      fullAddress: "10 Anson Road, #02-20, International Plaza, Singapore 079903",
      mrt: "2 min from Tanjong Pagar MRT, Exit J",
    },
    {
      slug: "new-bridge-road",
      shortName: "New Bridge Road",
      name: "New Bridge Road",
      street: "325 New Bridge Road, #03-00",
      postalCode: "088760",
      country: "SG",
      fullAddress: "325 New Bridge Road, #03-00, Singapore 088760",
      mrt: "3 min from Outram Park MRT, Exit 4",
    },
  ],

  // Prefixed with the homepage path so these links also work from other
  // pages (e.g. the privacy policy) — a bare "#anchor" href only scrolls
  // if you're already on the page containing that section.
  nav: [
    { label: "Services", href: `${import.meta.env.BASE_URL}#physiotherapy-services-singapore` },
    { label: "About", href: `${import.meta.env.BASE_URL}#about-eugene-foo` },
    { label: "Reviews", href: `${import.meta.env.BASE_URL}#patient-reviews` },
    { label: "FAQ", href: `${import.meta.env.BASE_URL}#physiotherapy-faq-singapore` },
    { label: "Locations", href: `${import.meta.env.BASE_URL}#clinic-locations-singapore` },
  ],
} as const;

export function mapEmbedSrc(fullAddress: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
}

export type SiteConfig = typeof siteConfig;
