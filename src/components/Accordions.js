import React, { useEffect, useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { selectGetAllquestions, getAllquestions, getquestionsError, getquestionsStatus } from "../features/question/questionSlice";
import Skeleton from "./skeleton/question.Skeleton";
import NoData from "./NoData";

function Accordions() {
  const [activeQuestion, setActiveQuestions] = useState(null);
  const dispatch = useDispatch();
  const questions = useSelector(selectGetAllquestions);
  const loading = useSelector(getquestionsStatus);
  const error = useSelector(getquestionsError);


  useEffect(() => {
    dispatch(getAllquestions());
  }, [dispatch])

  let content;
  if (error) {
    content = <p className="text-base text-red-700">Error: {error}</p>;
  }
  else if (loading) {
    content = Array.from({ length: 6 }, (_, index) => <Skeleton key={index} />);
  } else if (questions.length > 0) {
    content = questions.map((q) => (
      <div key={q?._id} className=" groupbg-secondaryLight"  >

        <div
          className={`cursor-pointer mx-auto !w-full p-4 text-black text-left text-xl focus:outline-none  hover:scale-105 transition ease-out duration-200 hover:shadow-xl  bg-secondary ${activeQuestion === q?._id ? "rounded-t-lg" : "rounded-lg"
            } shadow-md flex justify-between items-center`}
          onClick={() => {
            setActiveQuestions(activeQuestion === q?._id ? null : q?._id);
          }}
        >
          <p
            className={`text-base ${activeQuestion === q?._id ? "font-bold" : ""
              }`}
          >
            {q.questionPhrase}
          </p>
          <div className="w-4 h-4 bg-secondaryLight rounded-2xl flex justify-center items-center">
            {activeQuestion === q?._id ? (
              <TiMinus className="fill-current  rounded-sm text-primary" />
            ) : (
              <TiPlus className="fill-current  rounded-sm text-primary" />
            )}
          </div>
        </div>

        {activeQuestion === q?._id && (
          <div
            className=" text-gray-600 "
          >

            <div className="cursor-pointer mx-auto !w-full p-4 text-black text-left text-xl focus:outline-none  hover:scale-105 transition ease-out duration-200 hover:shadow-xl  bg-secondary">
              <p className="pl-4 text-sm w-full leading-[14px] pt-4 pb-2">
                {q?.answers.map((answer) => <div className="flex flex-col gap-1 "> <p>{answer?.step}</p> <p>{answer?.stepDescription} </p> </div>)}
              </p>
            </div>
          </div>
        )}

      </div>
    ))
  }
  else {
    content = <NoData />
  }

  return (
    <div _id="FAQ" className="w-full m-auto  p-8 flex flex-col items-center">
      <h2 className="text-center text-lg mb-6 font-bold text-primary">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-1 w-[340px] sm:w-[500px] mx-auto p-4">

        {content}
      </div>
    </div>
  );
}

export default Accordions;
