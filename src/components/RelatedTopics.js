import React from "react";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import { selectCurrentBook } from "../features/solutions/booksSlice";
import { useSelector } from "react-redux";

function RelatedTopics() {
  const data = useSelector(selectCurrentBook);

  return (
    <div className="bg-secondary p-4 rounded-sm">
      <h2 className="text-black font-semibold text-center">Related Topics</h2>
      <div className="mt-2 flex flex-col gap-2">
        {data?.articles?.map((article) => (
          article.questions.map((question, index) => (
            <Link
              // to={`${question?.question}`} 
              key={index}
              className="text-xl lg:text-sm flex gap-2 items-center lg:items-start"
            >
              <MdArrowForward className="text-primary size-5" />
              {question.question}
            </Link>
          ))
        ))}
      </div>
    </div>
  );
}

export default RelatedTopics;
