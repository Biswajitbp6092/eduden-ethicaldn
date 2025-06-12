'use client';

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { LiaSmsSolid } from "react-icons/lia";


const faqs = [
  {
    question: "WWhat is ByteSkill?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "How do I register on ByteSkill?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "Do ByteSkill courses come with certificates?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "Is there tutor support available on ByteSkill?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "How do I make payments for ByteSkill courses?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  {
    question: "Are ByteSkill courses suitable for beginners?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
  },
  
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-black text-white pt-[100px] lg:pt-[150px] px-4 lg:px-20 py-16 pb-[100px] lg:pb-[150px]">
      {/* Heading */}
      <h2 className="text-[2rem] lg:text-6xl font-bold leading-normal text-white pb-8 lg:pb-[80px]">
      <span className="border-b-3 border-yellow-300">Frequently</span> <br /> Asked Question
      </h2>

      {/* FAQ & Contact Row */}
      <div className="flex flex-col lg:flex-row gap-10 min-w-0">
        {/* FAQ Accordion */}
        <div className="flex-1 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                openIndex === index ? "bg-[#2a2a2a]" : "bg-[#1e1e1e]"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              <div
                className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[999px] pb-4" : "max-h-0"
                } text-sm text-gray-300`}
              >
                <div className="pt-1">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div className="bg-[#1e1e1e] flex-shrink-0 flex flex-col justify-center items-center p-8 rounded-lg text-center  lg:max-w-md lg:mx-auto">
          <div className="mb-4"><LiaSmsSolid size={100} /></div>
          <h3 className="text-xl font-semibold mb-2">Do you have more questions?</h3>
          <p className="text-sm text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-black px-6 py-2 rounded-full text-sm font-semibold transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
