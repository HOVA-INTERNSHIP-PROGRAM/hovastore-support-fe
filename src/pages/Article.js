import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from "../components/Breadcrumbs";
import SubCardSolution from "../components/SubCardSolution";
import { selectCurrentBook, setCurrentQuestion, getOnebookByTitle, selectBooksLoading, selectBooksError } from "../features/solutions/booksSlice";
import { useSelector, useDispatch } from "react-redux";
import { FiFile } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import NoData from '../components/NoData';
import Skeleton from '../components/skeleton/article.Skeleton';

function Artical() {
  const dispatch = useDispatch();
  const { title: name } = useParams();
  const article = useSelector(selectCurrentBook);
  const isLoading = useSelector(selectBooksLoading);
  const error = useSelector(selectBooksError);

  useEffect(() => {
    dispatch(getOnebookByTitle(name));
  }, [name, dispatch]);

  const handleQuestionClick = (question) => {
    dispatch(setCurrentQuestion(question));
  };

  if (isLoading) {
    return <div className='lg:py-12 lg:px-28 py-10 px-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>;
  }

  if (error) {
    return <div className="text-center py-10">Error: {error.message}</div>;
  }

  if (!article || article.length === 0) {
    return <NoData />;
  }

  return (
    <div className="lg:py-12 lg:px-28 py-10 px-6 bg-secondaryLight">
      <div className="mb-4 lg:mb-8 p-3 bg-white inline-block rounded-sm">
        <Breadcrumbs />
      </div>
      <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-y-4">
        {article?.map((element, index) => {
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
                    className="flex items-center text-sm flex-nowrap gap-1" key={ele?.question}>
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
