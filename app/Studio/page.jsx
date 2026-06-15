"use client";
import React from "react";

const StudioPage = () => {
  const methodology = [
    {
      step: "01",
      title: "Consultation",
      description:
        "An immersive dialogue to understand the client's ethos, site context, and functional aspirations. We establish the foundational narrative that will guide every design decision.",
    },
    {
      step: "02",
      title: "Concept",
      description:
        "Translating the narrative into spatial concepts. We explore massing, light studies, and preliminary material palettes, presenting initial visual directions for alignment.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "Rigorous detailing and technical resolution. Every joint, surface transition, and integrated system is meticulously planned to ensure flawless execution of the minimalist aesthetic.",
    },
    {
      step: "04",
      title: "Implementation",
      description:
        "Close collaboration with master builders and artisans. We maintain rigorous oversight during construction to protect the design intent and ensure uncompromising quality.",
    },
    {
      step: "05",
      title: "Final Curation",
      description:
        "The delicate process of styling the completed architecture. We assist in selecting furniture, art, and objects that complement the spatial atmosphere, completing the vision.",
    },
  ];

  const team = [
    {
      name: "Marcus Vance",
      role: "Senior Architect",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCIj9zqO3qx2H62OW5rA2K2pI2B3e_OAdhZH_8ZLXqpigXt3Y6j_JXuBlhLg_Bbw7Sb1XubRLCWgYMwCqCxsIpK0y-Nh7QgxEo4ywFinKtCPj37KQ6aaHfJoY9NNPfgMNNjRXkuwy7K_qOZ4wIjShNoFldcV0J5BE1bjjGXnG2kWK7i4RErQhuayivOljis7gIeoD76yHNa0VDZ4oOu8CShpjJ82VIUpCeHp0k1Huj8yM9WNtw1cZ_8mtNHLPxEx_OuBYN4mb1rhSQo",
    },
    {
      name: "Sarah Lin",
      role: "Director of Interiors",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "David Chen",
      role: "Landscape Architect",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBOrWHQ8sTdVpOA__Xbc7Crr8jXkRjTC_U6bI13zoYxAm77oi4KG9VKnZcMfzuQJSXDg4NrK-TFwcvU_s06ua-dps5HaRxVuPbDW2K1fRa_C5LLJuIMH7q1JLFl96xVPGoWNJgv_2jefWmjJMYAdQY_FK9tWCJaii2ZN0tgjTqsYW3MlE8_zL27jQWX1YqPH7pppamuHulFPl8GcoL0TOoBmqyfN8YI7QNRitMywtVYvZbBS9cAU3nxGzTiqtFOHzXfgpLbr_EKVFf8",
    },
    {
      name: "Chloe Bennett",
      role: "Project Manager",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB9GS-ox7fmWEiVVaSKjLhIXUlA2iiDeaw8J2WpZvanHBu6L97uvYME5tg3xd4G0wbsIJfVZ3MuvmmhYMG2CncliBpFAMhwwtaI37v23WPxWX6B1y9tAriTmAvz7oHF6i3SoUNCLgqu9DNov9ZW8O1U0iIX2ZEtTZly7OtRbKkxEfDCOun7x4ImxkA_0MYhQU5rn2Jq5kCjMXJ-B98xocexFjLMzpCCqpbsfo1gnLv_z6XupFWD-rOG9gHlTFi8GnbowBeTMFPnJ-nO",
    },
  ];

  const accolades = [
    {
      year: "2023",
      award: "Global Architecture Masterprize",
      category: "Residential Architecture - Single Family",
    },
    {
      year: "2022",
      award: "Dezeen Awards",
      category: "Minimalist Interior of the Year",
    },
    {
      year: "2021",
      award: "AIA National Honor Awards",
      category: "Excellence in Architecture",
    },
  ];

  return (
    <div className="w-full bg-[#fbf9f9] min-h-screen pt-32 md:pt-48 pb-section-gap">
      {/* 1. Studio Introduction */}
      <section className="px-margin-mobile md:px-margin-desktop pb-section-gap max-w-container-max mx-auto fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-10 md:col-start-2 text-center">
            <p className="font-sans text-[12px] font-semibold text-[#747878] mb-6 uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="text-[#735a3a]">•</span> The Studio
            </p>
            <h1 className="font-serif text-[42px] md:text-[80px] leading-[48px] md:leading-[96px] text-[#1a1a1a] mb-12">
              We sculpt light, space, and materiality to craft enduring environments of quiet luxury.
            </h1>
            <div className="w-24 h-[1px] bg-[#c4c7c7] mx-auto mb-12"></div>
            <p className="font-sans text-[18px] text-[#444748] max-w-3xl mx-auto leading-relaxed">
              Ananthu Nibin is an architectural design studio dedicated to the pursuit of minimalist elegance. Our philosophy is rooted in the belief that true luxury is found in restraint, precision, and the thoughtful curation of every detail. We approach each project as an opportunity to create spaces that resonate on an emotional level, fostering a sense of calm and enduring beauty.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Founder Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-2">
            <div className="aspect-[3/4] overflow-hidden bg-[#efeded] relative">
              <img
                alt="Elena Sterling, Founder"
                className="w-full h-full object-cover object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoKX1h8V3knmzApAz_eLbT_XjGifgnmAFKk7muY2uUk3YRqhlAy5lUhmeviGJD-0ZqnDGHqUkU0hMvtN9cuSeF7EKEOmixFqkvvnsnKIeGkIJMgGcggElfVKV7IqPadoOYqalA0OvC9GUq1teFDhCuMC7eQOERno3ri-A5Q8jDTa5N8GSjfIpFiqDzEYT0i58xwvkmJkQRYeQVynMjKCbO4EuRTMGEVZCgvg5l2NZaWHlq-XJ0fMv0fFX_iy0nBVSau65rYDiQ3bM-"
              />
            </div>
          </div>
          <div className="md:col-span-5 mt-12 md:mt-0 md:pl-12">
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] text-[#1a1a1a] mb-2">
              Elena Sterling
            </h2>
            <p className="font-sans text-[12px] font-semibold text-[#735a3a] mb-8 uppercase tracking-widest">
              Founder &amp; Principal Architect
            </p>
            <p className="font-serif text-[18px] italic text-[#444748] mb-6 leading-relaxed border-l-2 border-[#735a3a] pl-4">
              "Architecture is not merely about constructing shelter; it is about orchestrating atmosphere. My journey began with a fascination for the interplay between light and solid form. Over two decades, I've sought to refine that interaction, stripping away the superfluous to reveal the essential character of a space."
            </p>
            <p className="font-sans text-[16px] text-[#444748] mb-6 leading-relaxed">
              Prior to establishing his studio, Elena honed her craft at leading international firms in Tokyo and Copenhagen, deeply influencing her approach to contextual modernism and material honesty. She believes that every project must be a deeply personal reflection of its inhabitants, harmonizing with its environment in a dialogue of quiet strength.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Design Process */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto bg-[#f5f3f3] my-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-4 py-8">
          <div className="md:col-span-4 md:col-start-2">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#1a1a1a] mb-8 md:sticky md:top-32">
              The Methodology
            </h2>
            <p className="font-sans text-[16px] text-[#444748] mb-8 md:sticky md:top-48 leading-relaxed">
              A rigorous, deeply collaborative journey from initial vision to final curation.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="space-y-16 border-l border-[#c4c7c7] pl-8 relative">
              {methodology.map((stage, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[37px] top-2 w-2.5 h-2.5 rounded-full bg-[#735a3a]"></div>
                  <h3 className="font-serif text-[24px] text-[#1a1a1a] mb-4">
                    {stage.step}. {stage.title}
                  </h3>
                  <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Showcase */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto fade-in-up">
        <div className="text-center mb-16">
          <h2 className="font-serif text-[32px] md:text-[48px] text-[#1a1a1a] mb-4">
            The Collective
          </h2>
          <div className="w-12 h-[1px] bg-[#c4c7c7] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
          {team.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden mb-6 bg-[#efeded] relative image-zoom">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0"
                  src={member.image}
                />
              </div>
              <h3 className="font-serif text-[24px] text-[#1a1a1a] mb-1">
                {member.name}
              </h3>
              <p className="font-sans text-[12px] text-[#707070] uppercase tracking-widest">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Awards & Recognition */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-3 md:col-start-2">
            <h2 className="font-serif text-[32px] text-[#1a1a1a] mb-8">
              Selected Accolades
            </h2>
          </div>
          <div className="md:col-span-7">
            <div className="border-t border-[#c4c7c7]">
              {accolades.map((award, index) => (
                <div
                  key={index}
                  className="py-6 border-b border-[#c4c7c7]/40 flex flex-col sm:flex-row sm:justify-between sm:items-center group hover:bg-[#f5f3f3]/50 transition-colors duration-300 px-2"
                >
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-sans text-[18px] text-[#1a1a1a] font-medium">
                      {award.award}
                    </h3>
                    <p className="font-sans text-[14px] text-[#707070] mt-1">
                      {award.category}
                    </p>
                  </div>
                  <span className="font-sans text-[12px] text-[#735a3a] font-semibold uppercase tracking-widest">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudioPage;
