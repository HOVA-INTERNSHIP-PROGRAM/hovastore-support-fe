import React, { useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";

function Accordions() {
  const [activeQuestion, setActiveQuestions] = useState(null);
  const questions = [
    {
      id: 1,
      question: "how long is shipping",
      answer: "Shipping is between 5-10 days",
    },
    {
      id: 2,
      question: "What are your return policies?",
      answer: "We accept returns within 30 days of purchase.",
    },
    {
      id: 3,
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries.",
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer:
        "You can track your order by logging into your account on our website.",
    },
    {
      id: 5,
      question: "Are there any discounts for bulk orders?",
      answer:
        "Yes, we offer discounts for bulk orders. Please contact our sales team for more information.",
    },
  ];

  return (
    <div id="FAQ" className="w-full m-auto  p-8 flex flex-col items-center">
      <h2 className="text-center text-lg mb-6 font-bold text-primary">
        Frequently Asked Questions
      </h2>
      {questions.map((q) => (
        <div key={q.id} className="mb-4 last:mb-0">
          <button
            className={`w-[340px] sm:w-[500px] p-4 text-black text-left text-xl focus:outline-none  bg-secondary ${activeQuestion === q.id ? "rounded-t-lg" : "rounded-lg"
              } shadow-md flex justify-between items-center`}
            onClick={() => {
              setActiveQuestions(activeQuestion === q.id ? null : q.id);
            }}
          >
            <p
              className={`text-sm ${activeQuestion === q.id ? "font-bold" : ""
                }`}
            >
              {q.question}
            </p>
            <div className="w-[16px] h-[16px] bg-secondaryLight rounded-[50%] flex justify-center items-center">
              {activeQuestion === q.id ? (
                <TiMinus className="fill-current  rounded-[14px] text-primary" />
              ) : (
                <TiPlus className="fill-current  rounded-[14px] text-primary" />
              )}
            </div>
          </button>

          {activeQuestion === q.id && (
            <div
              className=" text-gray-600 "
            >
              <div className="w-full m-0 bg-secondary rounded-b-lg">
                <p className="pl-4 text-[12px] max-w-[272px] leading-[14px] pt-4 pb-2">
                  {q.answer}
                </p>
              </div>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}

export default Accordions;
