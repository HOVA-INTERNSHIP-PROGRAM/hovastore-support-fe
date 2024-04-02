import React, { useEffect } from "react";
import Accordions from "../components/Accordions";
import CardSolution from "../components/cardSolution/cardSolution";
import CTA from "../components/CTA";
import { useSelector, useDispatch } from "react-redux"
import { selectGetAllSolutions, getAllSolutions, getSolutionsStatus, getSolutionsError } from "../features/solutions/getAllSolutionsSlice";
import NoData from "../components/NoData";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const dispatch = useDispatch();
  const solutions = useSelector(selectGetAllSolutions);
  const solutionsStatus = useSelector(getSolutionsStatus);
  const solutionsError = useSelector(getSolutionsError);
  useEffect(() => {
    if (solutionsStatus === "idle") {
      dispatch(getAllSolutions());
    }
  }, [solutionsStatus, dispatch])

  // getAllSolutions

  let contentToDisplay = "";
  if (solutionsStatus === "loading") {
    contentToDisplay = <Skeleton />
  } else if (solutionsStatus === "succeeded") {
    contentToDisplay = solutions.length > 0 ? solutions.map((card, index) => (
      <CardSolution
        key={index}
        icon={card?.icon}
        title={card?.name}
        description={card?.description}
      />
    ))
      : <NoData />
  } else if (solutionsStatus === "failed") {
    contentToDisplay = <p>{solutionsError}</p>;
  }
  return (
    <div>
      <div>
        <div className="bg-secondaryLight flex justify-center items-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-5 pt-10 pb-8">
            {contentToDisplay}
          </div>
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
