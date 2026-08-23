export type ServiceCategory = {
  slug: string;
  title: string;
  anchorId: string;
  description: string;
  techniques: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "manual-therapy",
    title: "Manual Therapy",
    anchorId: "manual-therapy-singapore",
    description:
      "Hands-on and technology-assisted treatment that eases pain and stiffness at the source, so the rest of your plan has something to build on.",
    techniques: [
      "Focal/Radial Shockwave Therapy",
      "Trigger Point/Electro-Dry Needling",
      "Sports/Clinical Massage",
      "Joint Mobilization",
      "Ultrasound Therapy",
      "Instrument-Assisted Soft Tissue Mobilization",
      "Myofascial Decompression (Cupping)",
      "Electrotherapy",
      "Cryotherapy",
    ],
  },
  {
    slug: "rehabilitation",
    title: "Rehabilitation",
    anchorId: "rehabilitation-singapore",
    description:
      "Structured recovery programs for surgery, injury, and everyday wear — rebuilding function one stage at a time, at a pace your body can sustain.",
    techniques: [
      "Pre/Post-Surgical Rehab",
      "Orthopaedic Rehab",
      "Sports Injury Rehab",
      "Musculoskeletal Rehab",
      "Geriatric Rehab",
    ],
  },
  {
    slug: "strength-conditioning",
    title: "Strength & Conditioning",
    anchorId: "strength-conditioning-singapore",
    description:
      "Performance training built on real data, for anyone moving from recovered to resilient — from first steps back to competition-ready.",
    techniques: [
      "Dynamometry",
      "Blood Flow Restriction Training",
      "Pilates",
      "Sports/Performance Based Conditioning",
      "Laser Jump Tester",
    ],
  },
];

export const practitioner = {
  name: "Eugene Foo",
  roles: [
    "Lead Physiotherapist, Singapore Gurkha Contingent",
    "Fitness Consultant, Singapore Police Force",
    "Lead Physiotherapist & Founder, Reverse Physio",
  ],
  qualifications: [
    "Doctor of Physical Therapy (DPT)",
    "Bachelor of Science (Honours) Physiotherapy",
    "Certified Strength and Conditioning Specialist® (CSCS)",
  ],
  bio: "Whether you're an athlete chasing a personal best or someone simply tired of living with persistent pain, Eugene's philosophy is simple: combine skilled hands-on manual therapy, smart technology, and personalized exercise to reverse your limitations and restore your confidence.",
  gurkhaLine:
    "Eugene divides his time between the Singapore Gurkha Contingent and Reverse Physio, bringing the same military and elite-athlete rehab standards to every patient here — which is exactly why the clinic runs strictly by appointment.",
};

export type FaqParagraph = {
  label?: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: FaqParagraph[];
};

export const faqItems: FaqItem[] = [
  {
    question: "What can I expect for my first session?",
    answer: [
      { text: "Your first visit is a 60-minute, one-on-one session in three parts." },
      {
        label: "Assessment",
        text: "we review your medical history, imaging reports, symptoms, lifestyle, and goals.",
      },
      {
        label: "Framework",
        text: "Our physiotherapist will explain what's driving your condition and what the session will focus on, so you understand the plan before treatment begins.",
      },
      {
        label: "Treatment",
        text: "a combination of manual therapy and strength & conditioning work to create meaningful, lasting change.",
      },
    ],
  },
  {
    question: "Is a doctor's referral required for physiotherapy?",
    answer: [
      {
        text: "No referral is required to see a physiotherapist in Singapore. Some insurers or employers may require one for reimbursement claims, so it's worth confirming your coverage with them directly before your visit.",
      },
    ],
  },
  {
    question: "What should I bring or wear?",
    answer: [
      {
        text: "Bring any relevant medical records, diagnostic reports (MRI, X-ray, etc.), a doctor's referral if you have one, and a list of your current medications.",
      },
      {
        text: "Wear attire appropriate to your issue — shorts for hip or knee conditions, or a singlet for back, neck, or shoulder conditions.",
      },
    ],
  },
  {
    question: "How do I cancel or reschedule my appointment?",
    answer: [
      { text: "Please let us know at least 24 hours in advance via WhatsApp." },
      {
        text: "Cancellations or reschedules within 24 hours are charged 50% of the session fee, and no-shows are charged in full.",
      },
      {
        text: "Exceptions apply for personal medical reasons or compassionate reasons involving immediate family.",
      },
    ],
  },
  {
    question: "What are your charges?",
    answer: [
      { text: "Initial assessment: $258, 60 minutes." },
      { text: "Follow-up sessions: $198/$258, 45/60 minutes." },
    ],
  },
];
