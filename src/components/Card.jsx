import { MdDashboard } from "react-icons/md";
const Card = ({ number, title, icon }) => {
  return (
    <div className=" rounded-md flex justify-between bg-white items-center shadow p-4">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-3xl text-primary font-bold ">{number}</h1>
        <p className=" text-slate-600 ">
          {title}
        </p>
      </div>
      <div className="flex justify-center items-center p-5 text-white bg-primary rounded-full">
        <MdDashboard />
      </div>
    </div>
  );
};

export default Card;
