import { selectCurrentBook } from "../features/solutions/booksSlice";
import {useSelector } from "react-redux";
function CategoriesMenu() {
  const data = useSelector(selectCurrentBook);
  return (
    <div className=" bg-secondary p-4">
      <h1 className="text-black  font-semibold text-center">Categories</h1>
      <div className="flex flex-col gap-2 mt-2 font-semibold">
        {data?.articles?.map((element, index) => {
          return (
            <div key={index} className="p-2 bg-white cursor-pointer">
              {element.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesMenu;
