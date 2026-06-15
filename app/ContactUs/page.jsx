"use client";
import React, { useState } from "react";

const ContactPage = () => {
  // Form input states for floating labels
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  // Calendar states
  const [selectedDay, setSelectedDay] = useState(5);
  const [selectedTime, setSelectedTime] = useState("2:00 PM GMT");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // FAQ states
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formValues.firstName}, your inquiry has been sent!`);
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });
  };

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Timelines vary significantly based on scope. A bespoke residential project typically requires 12-18 months from initial concept to final handover, ensuring every detail meets our exacting standards.",
    },
    {
      question: "Do you take on international commissions?",
      answer:
        "Yes. While our primary studios are in London and Dubai, we regularly execute projects globally, maintaining close oversight through our dedicated international project management team.",
    },
    {
      question: "How do you charge for initial design concepts?",
      answer:
        "Our fee structure is tailored to the project. Following our initial complimentary consultation, we provide a detailed proposal outlining schematic design fees before any commitment is required.",
    },
  ];

  return (
    <div className="w-full bg-[#fbf9f9] min-h-screen pt-32 md:pt-48 pb-section-gap">
      {/* 1. Contact Hero */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          <div className="md:col-span-8">
            <h1 className="font-serif text-[42px] md:text-[80px] leading-[48px] md:leading-[96px] text-[#1a1a1a] mb-6">
              Let's Create
              <br />
              Something Extraordinary.
            </h1>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="font-sans text-[18px] text-[#444748] leading-relaxed">
              We welcome inquiries for residential, commercial, and bespoke architectural commissions globally.
            </p>
          </div>
        </div>
      </section>

      {/* 2 & 4. Contact Information & Form (Bento Layout) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Info Column */}
          <div className="md:col-span-4 space-y-16 fade-in-up delay-100">
            <div>
              <h3 className="font-sans text-[12px] font-bold tracking-widest text-[#747878] mb-4 uppercase">
                LONDON STUDIO
              </h3>
              <p className="font-sans text-[16px] text-[#1b1c1c] mb-2 leading-relaxed">
                14-16 Bruton Place
                <br />
                Mayfair, London W1J 6LX
              </p>
              <a
                className="font-sans text-[16px] text-[#735a3a] hover:text-[#1a1a1a] transition-colors block mb-1"
                href="mailto:london@ananthunibin.com"
              >
                london@ananthunibin.com
              </a>
              <a
                className="font-sans text-[16px] text-[#735a3a] hover:text-[#1a1a1a] transition-colors block"
                href="tel:+442071234567"
              >
                +44 (0) 20 7123 4567
              </a>
            </div>

            <div>
              <h3 className="font-sans text-[12px] font-bold tracking-widest text-[#747878] mb-4 uppercase">
                DUBAI STUDIO
              </h3>
              <p className="font-sans text-[16px] text-[#1b1c1c] mb-2 leading-relaxed">
                Building 4, Design District
                <br />
                Dubai, United Arab Emirates
              </p>
              <a
                className="font-sans text-[16px] text-[#735a3a] hover:text-[#1a1a1a] transition-colors block mb-1"
                href="mailto:dubai@ananthunibin.com"
              >
                dubai@ananthunibin.com
              </a>
              <a
                className="font-sans text-[16px] text-[#735a3a] hover:text-[#1a1a1a] transition-colors block"
                href="tel:+97141234567"
              >
                +971 4 123 4567
              </a>
            </div>

            <div>
              <h3 className="font-sans text-[12px] font-bold tracking-widest text-[#747878] mb-4 uppercase">
                PRESS &amp; MEDIA
              </h3>
              <a
                className="font-sans text-[16px] text-[#735a3a] hover:text-[#1a1a1a] transition-colors block"
                href="mailto:press@ananthunibin.com"
              >
                press@ananthunibin.com
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-8 fade-in-up delay-200">
            <div className="bg-[#f5f3f3] p-8 md:p-12 rounded-none border border-[#c4c7c7]/30">
              <h2 className="font-serif text-[32px] text-[#1a1a1a] mb-10">
                Submit an Inquiry
              </h2>
              <form className="space-y-8" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative pt-4">
                    <input
                      className="custom-input block w-full text-[#1b1c1c] font-sans text-[16px] peer placeholder-transparent"
                      id="firstName"
                      placeholder="First Name"
                      type="text"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <label
                      className={`absolute left-0 transition-all uppercase tracking-widest text-[12px] font-semibold text-[#747878] peer-placeholder-shown:text-[16px] peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#c4c7c7] peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-[#1a1a1a] ${
                        formValues.firstName ? "top-0 text-[12px]" : "top-4 text-[16px]"
                      }`}
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                  </div>
                  <div className="relative pt-4">
                    <input
                      className="custom-input block w-full text-[#1b1c1c] font-sans text-[16px] peer placeholder-transparent"
                      id="lastName"
                      placeholder="Last Name"
                      type="text"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                      required
                    />
                    <label
                      className={`absolute left-0 transition-all uppercase tracking-widest text-[12px] font-semibold text-[#747878] peer-placeholder-shown:text-[16px] peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#c4c7c7] peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-[#1a1a1a] ${
                        formValues.lastName ? "top-0 text-[12px]" : "top-4 text-[16px]"
                      }`}
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative pt-4">
                    <input
                      className="custom-input block w-full text-[#1b1c1c] font-sans text-[16px] peer placeholder-transparent"
                      id="email"
                      placeholder="Email Address"
                      type="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      required
                    />
                    <label
                      className={`absolute left-0 transition-all uppercase tracking-widest text-[12px] font-semibold text-[#747878] peer-placeholder-shown:text-[16px] peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#c4c7c7] peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-[#1a1a1a] ${
                        formValues.email ? "top-0 text-[12px]" : "top-4 text-[16px]"
                      }`}
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative pt-4">
                    <input
                      className="custom-input block w-full text-[#1b1c1c] font-sans text-[16px] peer placeholder-transparent"
                      id="phone"
                      placeholder="Phone Number"
                      type="tel"
                      value={formValues.phone}
                      onChange={handleInputChange}
                    />
                    <label
                      className={`absolute left-0 transition-all uppercase tracking-widest text-[12px] font-semibold text-[#747878] peer-placeholder-shown:text-[16px] peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#c4c7c7] peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-[#1a1a1a] ${
                        formValues.phone ? "top-0 text-[12px]" : "top-4 text-[16px]"
                      }`}
                      htmlFor="phone"
                    >
                      Phone Number (Optional)
                    </label>
                  </div>
                </div>

                <div className="relative pt-4">
                  <select
                    className="custom-input block w-full text-[#1b1c1c] font-sans text-[16px] peer appearance-none cursor-pointer"
                    id="interest"
                    value={formValues.interest}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled hidden></option>
                    <option value="residential">Residential Architecture</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="interior">Interior Design</option>
                    <option value="other">Other</option>
                  </select>
                  <label
                    className="absolute top-0 left-0 font-sans text-[12px] font-semibold text-[#747878] uppercase tracking-widest"
                    htmlFor="interest"
                  >
                    Area of Interest
                  </label>
                  <span className="material-symbols-outlined absolute right-0 top-6 text-[#747878] pointer-events-none">
                    expand_more
                  </span>
                </div>

                <div className="relative pt-4">
                  <textarea
                    className="custom-input block w-full text-[#1b1c1c] font-sans text-[16px] peer placeholder-transparent resize-none"
                    id="message"
                    placeholder="Project Details"
                    rows="4"
                    value={formValues.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <label
                    className={`absolute left-0 transition-all uppercase tracking-widest text-[12px] font-semibold text-[#747878] peer-placeholder-shown:text-[16px] peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#c4c7c7] peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-[#1a1a1a] ${
                      formValues.message ? "top-0 text-[12px]" : "top-4 text-[16px]"
                    }`}
                    htmlFor="message"
                  >
                    Project Details
                  </label>
                </div>

                <div className="pt-6">
                  <button
                    className="bg-[#1a1a1a] text-white font-sans text-[12px] font-semibold uppercase tracking-widest px-8 py-4 hover:opacity-80 transition-opacity duration-300 w-full md:w-auto"
                    type="submit"
                  >
                    SEND INQUIRY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Booking Section (Interactive Visual) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="order-2 md:order-1 relative aspect-[4/3] md:aspect-square bg-surface-container-high overflow-hidden">
            <img
              alt="Architectural studio interior with natural light"
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJKPembIbB30jXH17FHAuWgrA46RzQRYHxHmcUEUmnqPMR8Wqlh9-pZg3NdaCKq9SpQ55t7sKVQjkL36_UOamtlPt6vbtwQJeNVgJsPGzTGrf6zluFO5XWVq_ejynzWuLl5HwpH7MvsEDNwNy7rcqWmEWl7fbgNIxY-QY4L9dj3Gzp020ZAic8e6kOTXwpmw_06_vSZkDRSL1C175OdApuDg9KSYeZvA3EhfUmhiLGMci3MH3PUjz2vDWhjSWOwHNkQsiHKbtjjUMk"
            />
            {/* Overlay Booking Widget */}
            <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
              <div className="glass-panel p-8 w-full max-w-md bg-white/70">
                {!bookingConfirmed ? (
                  <>
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="font-serif text-[20px] text-[#1a1a1a]">
                        Select a Time
                      </h4>
                      <div className="flex gap-2">
                        <button className="w-8 h-8 flex items-center justify-center border border-[#c4c7c7] hover:border-[#1a1a1a] transition-colors rounded-full">
                          <span className="material-symbols-outlined text-sm">
                            chevron_left
                          </span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center border border-[#c4c7c7] hover:border-[#1a1a1a] transition-colors rounded-full">
                          <span className="material-symbols-outlined text-sm">
                            chevron_right
                          </span>
                        </button>
                      </div>
                    </div>
                    <p className="font-sans text-[12px] text-[#747878] tracking-widest uppercase mb-4 font-bold">
                      OCTOBER 2024
                    </p>
                    <div className="grid grid-cols-7 gap-2 mb-6">
                      <div className="text-center font-sans text-[#747878] text-[10px] font-semibold">M</div>
                      <div className="text-center font-sans text-[#747878] text-[10px] font-semibold">T</div>
                      <div className="text-center font-sans text-[#747878] text-[10px] font-semibold">W</div>
                      <div className="text-center font-sans text-[#747878] text-[10px] font-semibold">T</div>
                      <div className="text-center font-sans text-[#747878] text-[10px] font-semibold">F</div>
                      <div className="text-center font-sans text-[#747878] text-[10px] font-semibold">S</div>
                      <div className="text-center font-sans text-[#747878] text-[10px] font-semibold">S</div>
                      
                      <div className="aspect-square flex items-center justify-center font-sans text-sm text-[#c4c7c7]">1</div>
                      <div className="aspect-square flex items-center justify-center font-sans text-sm text-[#c4c7c7]">2</div>
                      {[3, 4, 5, 6, 7].map((day) => (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`aspect-square flex items-center justify-center font-sans text-sm rounded-full transition-colors ${
                            selectedDay === day
                              ? "bg-[#1a1a1a] text-white"
                              : "text-[#1b1c1c] hover:bg-[#efeded] cursor-pointer"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {["10:00 AM GMT", "2:00 PM GMT"].map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`w-full py-2 font-sans text-[12px] tracking-wider uppercase border transition-colors ${
                            selectedTime === time
                              ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                              : "border-[#c4c7c7] text-[#1b1c1c] hover:border-[#1a1a1a] bg-white/50"
                          }`}
                        >
                          {selectedTime === time ? `CONFIRM ${time}` : time}
                        </button>
                      ))}
                      <button
                        onClick={() => setBookingConfirmed(true)}
                        className="w-full bg-[#735a3a] text-white py-3 font-sans text-[12px] uppercase tracking-widest font-semibold hover:opacity-90 transition-opacity mt-4 block"
                      >
                        BOOK FOR OCT {selectedDay} AT {selectedTime}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <span className="material-symbols-outlined text-[64px] text-[#735a3a] mb-4">
                      check_circle
                    </span>
                    <h4 className="font-serif text-[24px] text-[#1a1a1a] mb-2">
                      Booking Confirmed
                    </h4>
                    <p className="font-sans text-[16px] text-[#444748] mb-6">
                      October {selectedDay}, 2024 at {selectedTime}
                    </p>
                    <button
                      onClick={() => setBookingConfirmed(false)}
                      className="text-[#735a3a] font-sans text-[12px] uppercase tracking-widest border-b border-[#735a3a] hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-all"
                    >
                      Reschedule
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 md:pl-16 mb-8 md:mb-0">
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] text-[#1a1a1a] mb-6">
              Schedule a Consultation
            </h2>
            <p className="font-sans text-[18px] text-[#444748] mb-8 leading-relaxed">
              Begin the dialogue. Book a preliminary video consultation with our principal architects to discuss your vision, timeline, and scope.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector(".glass-panel");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-[#1a1a1a] text-white font-sans text-[12px] font-semibold uppercase tracking-widest px-8 py-4 hover:opacity-80 transition-opacity duration-300"
            >
              OPEN CALENDAR
            </button>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#1a1a1a] sticky top-32">
              Common Inquiries
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-[#c4c7c7]/30 border-t border-b border-[#c4c7c7]/30">
              {faqs.map((faq, index) => {
                const isFaqOpen = openFaq === index;
                return (
                  <div key={index} className="py-6 group cursor-pointer">
                    <button
                      onClick={() => setOpenFaq(isFaqOpen ? null : index)}
                      className="w-full flex justify-between items-center text-left focus:outline-none"
                    >
                      <h4 className="font-sans text-[18px] text-[#1b1c1c] group-hover:text-[#735a3a] transition-colors font-medium">
                        {faq.question}
                      </h4>
                      <span
                        className={`material-symbols-outlined text-[#747878] group-hover:text-[#735a3a] transition-transform duration-300 ${
                          isFaqOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        {isFaqOpen ? "remove" : "add"}
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        isFaqOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="font-sans text-[16px] text-[#444748] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;