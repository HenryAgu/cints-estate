"use client";

import { Mail, MapPin } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
import { useEffect, useState } from "react";

const termsSections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "acceptance", title: "2. Acceptance of Terms" },
  { id: "use", title: "3. Use of the Platform" },
  { id: "responsibilities", title: "4. User Responsibilities" },
  { id: "listings", title: "5. Property Listings" },
  { id: "intellectual", title: "6. Intellectual Property" },
  { id: "termination", title: "7. Termination" },
  { id: "law", title: "8. Governing Law" },
  { id: "contact", title: "9. Contact Information" },
];

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});

export default function TermsOfUse() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.3 }
    );

    termsSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex lg:flex-row flex-col min-h-screen text-[#121212] font-serif px-4 lg:px-20 py-8 lg:py-14">
      {/* Sidebar */}
      <aside
        className={`${HelveticaNeue.className} w-full lg:w-64 bg-white py-4 lg:p-4 lg:sticky lg:top-0 h-fit lg:h-screen`}
      >
        <nav className="space-y-2">
          {termsSections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={`block px-4 py-2 rounded transition text-base lg:text-lg font-normal lg:leading-[140%] ${
                activeId === section.id
                  ? "bg-brand-secondary-500 text-white"
                  : "hover:bg-brand-secondary-500 hover:text-white"
              }`}
            >
              {section.title.replace(/^\d+\.\s/, "")}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:px-6 py-5 space-y-8 lg:space-y-10 overflow-y-auto scroll-smooth">
        {termsSections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="text-xl lg:text-[26px] lg:leading-[140%] text-black font-bold mb-2">
              {section.title}
            </h2>
            <p
              className={`${HelveticaNeue.className} text-base lg:text-lg text-black font-light lg:leading-[180%]`}
            >
              {getSectionText(section.id)}
            </p>
          </section>
        ))}

        {/* Contact Section with Icons */}
        <section id="contact">
          <p className={`${HelveticaNeue.className} text-lg text-black font-light leading-[180%]`}>If you have any questions, please contact us at:</p>
          <div className="lg:mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span
                className={`${HelveticaNeue.className} text-base lg:text-lg text-black font-light lg:leading-[180%]`}
              >
                support@cintsestate.co.uk
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span
                className={`${HelveticaNeue.className} text-base lg:text-lg text-black font-light lg:leading-[180%]`}
              >
                124 Kensington High Street, London, W8 7RG
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Section content helper
function getSectionText(id: string) {
  const content: Record<string, string> = {
    introduction:
      "Welcome to Cints Estate. By accessing or using our platform, you agree to be bound by these Terms of Use. If you do not agree, please refrain from using the website or services.",
    acceptance:
      "These Terms govern your access to and use of our services. By using the platform, you confirm that you are at least 18 years old and legally capable of entering into contracts.",
    use: "You agree to use Cints Estate only for lawful purposes. You may not misuse the platform, interfere with its functionality, or attempt to gain unauthorized access.",
    responsibilities:
      "You're responsible for the accuracy of any information you provide and for maintaining the confidentiality of your account credentials.",
    listings:
      "We verify listings to the best of our ability, but we do not guarantee the accuracy of third-party content. Always conduct your own due diligence.",
    intellectual:
      "All content, trademarks, and logos on this site are the property of Cints Estate or its licensors. You may not copy, distribute, or reproduce any part without permission.",
    termination:
      "We reserve the right to suspend or terminate your access to the platform if you violate these Terms.",
    law: "These Terms are governed by the laws of England and Wales.",
    contact: "",
  };
  return content[id] ?? "";
}
