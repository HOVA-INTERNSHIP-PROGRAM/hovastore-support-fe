import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGetAllSolutions, getAllSolutions, getSolutionsStatus, getSolutionsError } from "../features/solutions/getAllSolutionsSlice";
import Accordions from "../components/Accordions";
import CardSolution from "../components/cardSolution/cardSolution";
import CTA from "../components/CTA";
import NoData from "../components/NoData";
import Skeleton from "../components/skeleton/solution.Skeleton";

const Home = () => {
  const dispatch = useDispatch();
  const solutions = useSelector(selectGetAllSolutions);
  const loading = useSelector(getSolutionsStatus);
  const error = useSelector(getSolutionsError);

  useEffect(() => {
    dispatch(getAllSolutions());
  }, [dispatch]);

  let content;
  if (error) {
    content = <p className="text-base text-red-700">Error: {error}</p>;
  } else if (loading) {
    content = Array.from({ length: 9 }, (_, index) => <Skeleton key={index} />);
  } else if (solutions.length > 0) {
    content = solutions.map((solution, index) => (
      <CardSolution
        key={index}
        icon={solution.icon}
        title={solution.name}
        description={solution.description}
      />
    ));
  } else {
    content = <NoData />;
  }

  return (
    <div>
      <div className="bg-secondaryLight flex justify-center items-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-5 pt-10 pb-8">
          {content}
        </div>
      </div>
      <div className="bg-secondaryLight">
        <Accordions />
      </div>
      <div>
        <CTA />
      </div>
    </div>
  );
};

export default Home;
