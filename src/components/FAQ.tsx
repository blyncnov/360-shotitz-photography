"use client";

import React, { useState } from "react";

// Components
import WhiteSpace from "@/components/WhiteSpace";

interface IFAQS {
  id: number;
  question: string;
  answer: string;
}

const FAQS_Questions: IFAQS[] = [
  {
    id: 1,
    question: "Are you available to travel?",
    answer: "yes i am available",
  },
  {
    id: 2,
    question: "What is your style?",
    answer: "my style is awesome",
  },
  {
    id: 3,
    question: "How do i book?",
    answer: "book via our site",
  },
  {
    id: 4,
    question: "What is the time span for booking?",
    answer: "2months or so",
  },
  {
    id: 5,
    question: "Do you deliver raw photos?",
    answer: "yes we do deliver raw",
  },
];

const FrequentlyAskedQuestions = () => {
  const [FAQIndex, setFAQIndex] = useState<number>(0);

  const FAQHandler = (id: number) => {
    setFAQIndex(id);
  };

  return (
    <div className="py-12">
      <WhiteSpace>
        <div className="w-full flex flex-col gap-12">
          <div className="w-full text-center flex flex-col gap-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
            <p
              style={{ lineHeight: 1.7 }}
              className="text-lg font-normal text-white opacity-65"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
              tempore explicabo eaque sequi repellat id! A iste explicabo
              consequatur praesentium.
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
                        {`${FAQS_Questions[FAQIndex].answer} Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit nemo sit omnis, praesentium delectus sequi
                        veniam deleniti repellat ducimus qui dignissimos fugiat
                        consequuntur earum ratione blanditiis tenetur beatae?`}
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
