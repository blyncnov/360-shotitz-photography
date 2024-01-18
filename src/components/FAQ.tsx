"use client";

import React, { useState } from "react";

// Components
import WhiteSpace from "@/components/WhiteSpace";

// Pattern
import Wavy_pattern from "../../public/wheel_pattern.png";

interface IFAQS {
  id: number;
  question: string;
  answer: string;
}

const FAQS_Questions: IFAQS[] = [
  {
    id: 1,
    question: "Are you available to travel?",
    answer:
      "We are based in Lagos, Nigeria and are always available to travel in and out of Nigeria. If we would need to travel for your event, portrait session etc., you will be responsible for transportation and accommodation expenses.",
  },
  {
    id: 2,
    question: "What is your style?",
    answer:
      "We are based in Lagos, Nigeria and are always available to travel in and out of Nigeria. If we would need to travel for your event, portrait session etc., you will be responsible for transportation and accommodation expenses.",
  },
  {
    id: 3,
    question: "How do i book?",
    answer:
      "We are based in Lagos, Nigeria and are always available to travel in and out of Nigeria. If we would need to travel for your event, portrait session etc., you will be responsible for transportation and accommodation expenses.",
  },
  {
    id: 4,
    question: "What is the time span for booking?",
    answer:
      "We are based in Lagos, Nigeria and are always available to travel in and out of Nigeria. If we would need to travel for your event, portrait session etc., you will be responsible for transportation and accommodation expenses.",
  },
  {
    id: 5,
    question: "Do you deliver raw photos?",
    answer:
      "We are based in Lagos, Nigeria and are always available to travel in and out of Nigeria. If we would need to travel for your event, portrait session etc., you will be responsible for transportation and accommodation expenses.",
  },
];

const FrequentlyAskedQuestions = () => {
  const [FAQIndex, setFAQIndex] = useState<number>(0);

  const FAQHandler = (id: number) => {
    setFAQIndex(id);
  };

  return (
    <div
      className="py-12"
      style={{
        background: `url(${Wavy_pattern.src}) 100px no-repeat`,
        backgroundPosition: "bottom right",
        backgroundSize: "300px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <WhiteSpace>
        <div className="w-full flex flex-col gap-12">
          <div className="w-full text-center flex flex-col gap-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
            <p
              style={{ lineHeight: 1.7 }}
              className="text-lg font-normal text-white opacity-65 normal_text"
            >
              Over time, these are the questions that are frequently asked by
              our users. Check it out, your question might have just been
              answered
            </p>
          </div>
          <div className="w-full max-w-4xl mx-auto mt-20">
            <div className="w-full border border-white rounded-xl md:h-[320px]">
              <div className="w-[90%] mx-auto h-full bg-white border border-white rounded-xl md:min-h-[350px] -mt-20">
                <div className="w-full min-w-full max-w-full h-full min-h-full text-black grid grid-cols-1 md:grid-cols-2 divide-x divide-black">
                  <div className="w-full px-4 py-4 flex flex-col gap-3 md:overflow-y-scroll no-scrollbar">
                    <div>
                      <h3 className="text-center text-2xl font-semibold">
                        FAQS
                      </h3>
                    </div>
                    <div className="w-full flex flex-col gap-3">
                      {FAQS_Questions.map((data: IFAQS, index) => {
                        return (
                          <div
                            key={data.id}
                            onClick={() => FAQHandler(index)}
                            className="w-full text-black bg-white border border-black transition-all hover:bg-black hover:text-white px-4 py-2 rounded-xl flex items-center gap-4 cursor-pointer"
                          >
                            <h2 className="text-4xl">✧</h2>
                            <p> {data.question} </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full px-4 py-4 flex flex-col gap-3">
                    <div>
                      <h3 className="text-center text-2xl font-semibold">
                        Answers
                      </h3>
                    </div>
                    <div className="w-full bg-black h-full text-white rounded-xl p-4 flex flex-col gap-3">
                      <h2 className="text-4xl">✧</h2>
                      <p className="text-sm text-center font-normal leading-6">
                        {`${FAQS_Questions[FAQIndex].answer} `}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WhiteSpace>
    </div>
  );
};

export default FrequentlyAskedQuestions;
