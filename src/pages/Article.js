import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SubCardSolution from "../components/SubCardSolution";
import { selectCurrentBook, setCurrentQuestion } from "../features/solutions/booksSlice";
import { useSelector, useDispatch } from "react-redux"
import { FiFile } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Artical() {
  const dispatch = useDispatch();
  const article = useSelector(selectCurrentBook);
  const handleQuestionClick = (question) => {
    dispatch(setCurrentQuestion(question));
  };

  return (
    <div className="lg:py-12 lg:px-28 py-10 px-6 bg-secondaryLight">
      <div className="mb-4 lg:mb-8 p-3 bg-white inline-block rounded-sm">
        <Breadcrumbs />
      </div>
      <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-y-4">
        {article?.articles?.map((element, index) => {
          const articals = element?.questions;
          return (
            <SubCardSolution
              key={index}
              subtitle={element?.title}
              articals={articals?.map((ele) => {
                return (
                  <NavLink
                    to={`${element?.title}`}
                    onClick={() => handleQuestionClick(ele)}
                    className="flex items-center whitespace-nowrap flex-nowrap gap-1" key={ele?.question}>
                    <FiFile />
                    <p>{ele?.question}</p>
                  </NavLink>
                );
              })}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Artical;
