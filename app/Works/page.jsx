"use client";
import React, { useState } from "react";

const WorksPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filters = ["All Projects", "Residential", "Commercial", "Hospitality", "Villas"];

  const projects = [
    {
      title: "The Obsidian Residence",
      category: "Villas",
      displayCategory: "VILLA",
      location: "Kyoto, Japan",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFh4vRrV3jRYMrH6bPu2iXkPTFccLmTrhW8ZGLc8dwfhYe-cUipdhBlNqU5ho4TLNV4HpkRFS6FzrVMUgEqNippC2RvnTr_4E9twollV_5qzII1EtN5WwA2Bg09wWP1JLeoASjqNDdcQxe4Zeb3Aqd3SiWSfX6R6Q9YWRFVGVYxuPwz4gW3jeOStRWAU8xLcH19QCOjbzunz5XmkY6A1cVrpQrbsk77QNs5WQILjnAPp7fDx9WuckBZBdOcIfTh4W_YnlHw2SDfugb",
      gridClass: "md:col-span-8",
    },
    {
      title: "Lumina Hotel",
      category: "Hospitality",
      displayCategory: "HOSPITALITY",
      location: "Copenhagen, Denmark",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACXcmfxxXoBBWj1dCNRHoz7cHcy6fN3DoV7foY1XB0BPWtzV2X-JmCsuvETh6k-uBVbjFdYbUAOP-OFjL2Gt5_BjsPktjeYbh7nfAT3mKl8mXWVyenG6YJa7tthrsWl5Lkl7UfHezkooBmraI0BkAmZNQfCEEtJACT_dDmpr7exuMmReVD6sgmMgACx42GW_bK5nHU9MhH4ecbDrEV-Vhszs_Iod0khX4DKGWw_UNDeNKjNI-9pJfDdZA83gGWCTVxKM8-xzz1a5e5",
      gridClass: "md:col-span-4 md:mt-24",
    },
    {
      title: "Glasshouse Pavilion",
      category: "Residential",
      displayCategory: "RESIDENTIAL",
      location: "Vancouver, Canada",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQs7YlUqW1cvNVTk5gY6miq9xYpXghtdWPqFhMrCqt_HLfsTKVRcfKecSWlP8QmNDdzb-oCyYuRhsGSDSaL57DT-HtJ9t92QolKXgKto16BGAEyoSr-NRDuABUe9nLnK63sSc2oVDF4ruxXXiYvAGs8ZMKw8TdjblpF_yLqaHrgva7PqUA4_mkhV7dEK0OwKBaq_PChyxuzGbvJQ0f3ak5mbRv7Qaem8_86TKFqD3CgGT_zBEbnly7Qp0i62XMgptLKqDJsJ01O46c",
      gridClass: "md:col-span-5",
    },
    {
      title: "Atelier Workspace",
      category: "Commercial",
      displayCategory: "COMMERCIAL",
      location: "Milan, Italy",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx21VggK_L2qkci4xDAH0JDQrpXJmrYcwPU1WCnpF1VQ6oxKPhzniLVLeKT_TAsv56fliY5cTDuBT7rCaS3tW7thtLMOBzW3BwnmepPp3Iv9BSoZrDVzPsDNi80RThsNOqXJ5i4Gk0hun02n35WxVOWPDlthlYGgtGUV_3CynByysJtba7LfHfP17MRDms5RZuY341e-BBi6Co5C7ibB1VwTwTpyJQmroXKvp6UDlVsd2sl-dxow0lYI6RPAmA5dvFsvs12SnPtbbC",
      gridClass: "md:col-span-7 mt-12 md:-mt-16",
    },
  ];

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <div className="w-full bg-[#fbf9f9] min-h-screen flex flex-col pt-32 md:pt-48">
      {/* Portfolio Hero */}
      <section className="w-full px-margin-mobile md:px-margin-desktop pb-16 max-w-container-max mx-auto fade-in-up">
        <h1 className="font-serif text-[42px] md:text-[80px] leading-[48px] md:leading-[96px] text-[#1a1a1a] text-center md:text-left max-w-4xl">
          Our Selected Works
        </h1>
        <p className="font-sans text-[18px] text-[#444748] mt-8 max-w-2xl text-center md:text-left leading-relaxed">
          A curated selection of our most definitive projects, exploring the intersection of minimalist luxury and architectural precision across residential and commercial spaces.
        </p>
      </section>

      {/* Filter Navigation */}
      <section className="w-full px-margin-mobile md:px-margin-desktop pb-16 max-w-container-max mx-auto fade-in-up delay-100">
        <div className="flex flex-wrap gap-6 border-b border-[#c4c7c7]/30 pb-4">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-sans text-[12px] uppercase tracking-widest pb-2 transition-colors duration-300 ${
                  isActive
                    ? "text-[#1a1a1a] border-b-2 border-[#1a1a1a]"
                    : "text-[#444748] hover:text-[#1a1a1a]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      {/* Portfolio Grid (Magazine Style) */}
      <section className="w-full px-margin-mobile md:px-margin-desktop pb-section-gap max-w-container-max mx-auto flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <article
                key={index}
                className={`${project.gridClass} group cursor-pointer fade-in-up image-zoom mb-12 md:mb-0`}
              >
                <div className="relative w-full overflow-hidden bg-[#efeded] aspect-[4/3]">
                  <img
                    alt={project.title}
                    className="object-cover w-full h-full"
                    src={project.image}
                  />
                </div>
                <div className="mt-6 flex flex-col items-start">
                  <span className="font-sans text-[12px] text-[#444748] flex items-center gap-2 mb-2 font-semibold tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#735a3a]"></span>
                    {project.displayCategory}
                  </span>
                  <h2 className="font-serif text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] text-[#1a1a1a]">
                    {project.title}
                  </h2>
                  <p className="font-sans text-[14px] text-[#747878] mt-1">
                    {project.location}
                  </p>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-12 text-center py-20 text-[#747878] font-sans">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Case Study: The Zenith Penthouse */}
      <section className="w-full bg-[#f5f3f3] py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center fade-in-up">
            <div className="md:col-span-5 flex flex-col justify-center">
              <span className="font-sans text-[12px] font-semibold text-[#735a3a] uppercase tracking-widest mb-4 block">
                Case Study
              </span>
              <h2 className="font-serif text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] text-[#1a1a1a] mb-8">
                The Zenith Penthouse
              </h2>
              <div className="mb-8">
                <h3 className="font-sans text-[12px] font-bold text-[#1a1a1a] uppercase tracking-widest mb-2">
                  Overview
                </h3>
                <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                  A complete reimagining of a skyline penthouse, focusing on seamless transitions between indoor and outdoor spaces, utilizing monolithic stone forms and bespoke timber joinery to create a sanctuary above the city.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="font-sans text-[12px] font-bold text-[#1a1a1a] uppercase tracking-widest mb-2">
                  Process
                </h3>
                <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                  The design process involved rigorous stripping back of non-essential elements to reveal the structural purity of the space, followed by the curation of highly tactile materials.
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 font-sans text-[12px] font-semibold text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 w-max hover:opacity-70 transition-opacity mt-4 tracking-widest"
                href="/ContactUs"
              >
                VIEW FULL CASE STUDY
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
            <div className="md:col-span-7 mt-12 md:mt-0 relative aspect-[4/5] overflow-hidden shadow-2xl shadow-black/5">
              <img
                alt="Zenith Penthouse Interior"
                className="object-cover w-full h-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABkxqs8uPEmDn9gzCrpnF2eZrfGy7pmJ17Qr3xC0s6vxf1Yl5fmXahFE_4fEdPbsrb_mC_oa8T86-cx_BGDcI6d07xII1QaWFPtB9MXcVkUrcjMc9R2C8qvCLn2xa2sokg6zL8JcxlMR7IjfeAl3qNATkV7YjJF0-UFC0I8XvZbz71XTPhQ8BawMGM8csPBkoyLCBP0N8OdZaMjc7CJv7T0ICtO6niq5DNFjqM3_rglyXVn7nyJIhOMji2rQIUDmkmv4Zf3E2RVW21"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorksPage;