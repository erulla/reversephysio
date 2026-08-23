import { useState } from "react";

type FaqParagraph = { label?: string; text: string };
type FaqItem = { question: string; answer: FaqParagraph[] };

interface Props {
  items: readonly FaqItem[];
}

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-forest/10 rounded-2xl border border-forest/10 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-forest hover:text-teal sm:px-6"
              >
                <span>{item.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                >
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="space-y-3 px-5 pb-5 text-sm leading-relaxed text-forest/70 sm:px-6"
            >
              {item.answer.map((paragraph, pIndex) => (
                <p key={pIndex}>
                  {paragraph.label && (
                    <strong className="font-semibold text-forest">{paragraph.label}: </strong>
                  )}
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
