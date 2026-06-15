"use client";
import React from "react";
import Link from "next/link";

const Home = () => {
  const featuredProjects = [
    {
      title: "The Glass Pavilion",
      category: "RESIDENTIAL",
      location: "LOS ANGELES, CA",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0nkS7yjI6gj-ygzfi1HPdC2y3AAdYDrGFbSjJIqomDa-YsaYPQackR1QCGjBXdm1r4hwXW6Kmat7TTBORAiCJDIZdIYyUHtqfojvjeHdEZ6SCDFLDUl3uwVZX_-puHIZxdQJwesL-Jd1pjEMdELFZynrIYXRhmorHe2UMYa_S_s4nrbvSookDrZNSC1q_oFCnntjjV6IxtPz160pO9CyaJHV7etPPHLjrEVRvi3vTtlnvoWSdRGc6RUE7VMZL3MQUNA5dAbkF2i9c",
    },
    {
      title: "Onyx Boutique Hotel",
      category: "HOSPITALITY",
      location: "NEW YORK, NY",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg7pTnPEWz8TzTfbnnmtSkQ_KPZkW-l347Lxi2nuApdj_8H6NsS-i0DtY-aw0OC5lXFSZpSCJ5r5CIg33dX0M-oriKXdcafVTcKPhmxnYm-q5jZtX7pH9EVEmZ4qydZ8SHdwS0kz5lBstWnhyRXeQbpDKwSJQQoHGiopjyDnQYD3C7isL0bEhebweQdb943Io7iyshUM5CDeUKWDtBzoKf_ZieYQKdUAEucEz49YOrkjdzUt-kZOOUT-yaHmCWV8xKBaR37RhTNdxq",
    },
    {
      title: "Coastal Retreat",
      category: "RESIDENTIAL",
      location: "CARMEL, CA",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiHZ9jdJespHcDWmEG9aUNq4hLUElVxUH4Egn6XX1hYTW51nwpa3TySxSPH4qD209FTulrjwRNNjeX-G5i9QdrphGrpjD9_GLvqFr3Qf9JOw9HseN_0O6uekLWsjWVa0KxeOUtkp8_jltlzugrcsBNDjd4mrx9lCfg3kY79P9njCHL7K-rxDzQpFEsQnLtdZ_CXe1Uk1meity6Kqc5ArMChnelDMq8lJwOEPMDowy5NUrvhG7Qc2YwAw9-hAe8q5Tdxow9mBs28ACD",
    },
    {
      title: "Atelier Workspace",
      category: "COMMERCIAL",
      location: "LONDON, UK",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn5S2y0kCeXxe2KI2QcFlXY3wf6Ue-PBstGrH67wSA3aLRfIqy_TtPBhUBtdcQffE9vdvFXnwFVNl0dtIv7xHRZEuBpROj5HZ3oBEIlxXWG3pG_75ar4RXRbJQsPKI9MVPV0eDr0O-na2-TKaOAZEr3ejC2OPfBjXEQtwtW6OvP6DSVWjWRNDDnzN1oLz7ge-2a5U_XcLidjFvSGAScjZNd0tKWMmHtVd16LEEt6DzcNPCmSWgzlLGntiqeQE1bINAM3bWyAl7v0Kf",
    },
  ];

  const expertise = [
    {
      icon: "home_work",
      title: "Residential",
      description: "Bespoke private sanctuaries designed for intuitive living and quiet luxury.",
    },
    {
      icon: "domain",
      title: "Commercial",
      description: "Refined corporate environments that inspire focus and reflect brand authority.",
    },
    {
      icon: "restaurant",
      title: "Hospitality",
      description: "Immersive spaces crafted to deliver memorable, exclusive guest experiences.",
    },
    {
      icon: "key",
      title: "Turnkey",
      description: "End-to-end execution, from conceptual architecture to curated furniture styling.",
    },
  ];

  return (
    <div className="w-full bg-[#fbf9f9]">
      {/* Hero Section */}
      <section className="relative w-full h-[870px] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="Modern luxury villa interior"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtyZbV2NN24qIzc4MqQz3tGl1uS9WOYuo0joFIFv3PQgta0cJJv5sWwFReuxVQNVQnbfBD9XnN4_g26juyuc4ADu1plNc67rhEZIgb_Eu7U06XR5kKM2ln-N4Fef8gfbPaNugw7cbFVhgl-4KeXZtjiyMIOMwo8zW1AguciJZ48MroGmKTLeNUqALWkda8s5N_TB1EDOlb7JWv1BTfiUVIjy12MgdyGhnfiwblTgS-gXT8fgE4eCycH58qK-vHO9iftki3Wba_GR8q"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto fade-in-up">
          <h1 className="font-serif text-[42px] md:text-[80px] leading-[48px] md:leading-[96px] text-white font-normal tracking-tight mb-6">
            Sculpting Space with Intention
          </h1>
          <Link
            className="inline-block mt-8 px-8 py-4 bg-[#1a1a1a] text-white font-sans text-[12px] font-semibold uppercase tracking-widest hover:bg-[#303031] transition-colors duration-300"
            href="/Works"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="portfolio">
        <div className="mb-16 fade-in-up">
          <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-[#1a1a1a] mb-4">
            Featured Work
          </h2>
          <div className="w-12 h-[1px] bg-[#747878]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer fade-in-up image-zoom">
              <div className="overflow-hidden aspect-[4/3] mb-4 bg-surface-container">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover"
                  src={project.image}
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#735a3a]"></span>
                <span className="font-sans text-[12px] font-semibold text-[#747878] uppercase tracking-widest">
                  {project.category}
                </span>
              </div>
              <h3 className="font-serif text-[24px] leading-[32px] text-[#1a1a1a]">
                {project.title}
              </h3>
              <p className="font-sans text-[12px] text-[#747878] mt-1 uppercase tracking-widest">
                {project.location}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            className="inline-block px-8 py-4 border border-[#747878] text-[#1a1a1a] font-sans text-[12px] font-semibold uppercase tracking-widest hover:bg-surface-container-low transition-colors duration-300"
            href="/Works"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-[#1a1a1a] mb-4">
              Our Expertise
            </h2>
            <p className="font-sans text-[16px] text-[#444748] max-w-2xl mx-auto leading-relaxed">
              Comprehensive architectural design tailored to elevate the human experience through thoughtful spatial curation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-gutter">
            {expertise.map((service, index) => (
              <div key={index} className="fade-in-up text-center">
                <span className="material-symbols-outlined text-[40px] text-[#735a3a] mb-6 block">
                  {service.icon}
                </span>
                <h3 className="font-sans text-[12px] font-semibold uppercase tracking-widest text-[#1a1a1a] mb-3">
                  {service.title}
                </h3>
                <div className="w-8 h-[1px] bg-[#c4c7c7] mx-auto mb-4"></div>
                <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Philosophy (Split Layout) */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 fade-in-up image-zoom">
            <img
              alt="Architectural Detail"
              className="w-full aspect-[3/4] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB92rbL_HxrvxFrFHgFbMIFSOfd01v6R0vLNTdRDCQT7EOS3qibhpUYcT4ir93f4lzUDFQgzfMOI2DDJBB3foHaGijq0XYsdGeMyeBAwQ1m89wlJuHlEgnnEn6y8KGXQ_Vp2sm1qRGCZCnBIX2zpvKVuw3kGYWdRDwdK7goxpBl3a8rI10qiMGCctA4mLnvDF2YeyP55NcZsqvRYv31ICnnprneCFfcsE2gEAmJqu6em6qAd7uoJ1NuhTTXamoeHt-NMy9UhymE0zJN"
            />
          </div>
          <div className="md:col-span-5 md:col-start-8 mt-12 md:mt-0 fade-in-up">
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-[#1a1a1a] mb-6">
              The Art of Living
            </h2>
            <p className="font-sans text-[18px] text-[#444748] mb-6 leading-[28px]">
              We believe that the spaces we inhabit shape our internal landscapes. Our studio approaches interior architecture as a form of sculptural art—stripping away the superfluous to reveal the essential.
            </p>
            <p className="font-sans text-[16px] text-[#444748] mb-10 leading-[24px]">
              Every material selected, every line drawn, and every volume considered is done with the intention of fostering a sense of calm, authority, and refined taste. We do not just design rooms; we curate experiences of timeless elegance.
            </p>
            <Link
              className="inline-flex items-center gap-2 text-[#1a1a1a] font-sans text-[12px] font-semibold uppercase tracking-widest hover:text-[#735a3a] transition-colors duration-300"
              href="/Studio"
            >
              Discover Our Studio
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
