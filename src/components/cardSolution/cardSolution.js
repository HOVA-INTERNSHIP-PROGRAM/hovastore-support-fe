import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function CardSolution({ icon, title, description }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as needed (in milliseconds)
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white shadow-md rounded-md p-5 hover:scale-105 transition ease-out duration-200 hover:shadow-xl">
        <SkeletonTheme highlightColor="#F9FAFC">
      <div className="flex justify-center p-1">
        <div className="flex justify-center items-center rounded-full bg-third w-16 h-16 text-primary font-bold">
          {isLoading ? (
            <Skeleton width={65} height={65} borderRadius={50}/>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: icon }} className="flex justify-center items-center w-8 h-8"/>
          )}
        </div>
      </div>
      <h3 className="text-primary text-lg text-center mt-4 mb-3 font-bold">
        {isLoading ? (
          <Skeleton width={200} height={24} />
        ) : (
          title
        )}
      </h3>
      <p className="text-black text-xs text-center">
        {isLoading ? (
          <Skeleton count={3} />
        ) : (
          description
        )}
      </p>
      </SkeletonTheme>
    </div>
  );
}

export default CardSolution;
