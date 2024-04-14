import { MdDashboard } from "react-icons/md";
import Chart from "../components/dashboard/Chart";
import HSButton from "../components/UI/HSButton";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import TableHeader from "./dashboard/TableHeader";

const Card = ({ number, title, icon, card, charts, chartname, articles }) => {
  const num = [{ number: 1 }, { number: 2 }, { number: 3 }];
  const tableHeadingData = [
    { name: "Articles" },
    { name: "Category" },
    { name: "Views" },
    { name: "Likes" },
  ];
  return (
    <div className=" flex gap-2 flex-col justify-between ">
      {card ? (
        <div className="rounded-md flex justify-between bg-white items-center shadow p-4">
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-3xl text-primary font-bold ">{number}</h1>
            <p className=" text-slate-600 ">{title}</p>
          </div>
          <div className="flex justify-center items-center p-5 text-white bg-primary rounded-full">
            {icon || <MdDashboard />}
          </div>
        </div>
      ) : null}
      {charts ? (
        <div className="rounded-md flex flex-col gap-2 justify-between bg-white  shadow p-4">
          <div className="flex w-full items-center justify-between">
            <span></span>
            <h2 className="text-base font-medium ">
              {chartname || "Article Views"}
            </h2>
          </div>
          <Chart />
        </div>
      ) : null}
      {articles ? (
        <div className="flex flex-col gap-1">
          <p className=" text-black ">{title}</p>
          <div className="rounded-md flex flex-col  justify-between bg-white  shadow p-1">
            <TableHeader tableHeading={tableHeadingData} />
          </div>

          <div className="flex flex-col md:flex-row  w-full items-center justify-between">
            <span className="hidden w-full md:block"></span>
            <div className="flex items-center gap-2 !w-fit ">
              <HSButton
                icon={<IoIosArrowBack />}
                title={`Previous`}
                styles={`!flex-row-reverse border-none`}
              />
              <div className="flex items-center gap-2">
                {num.map((item, index) => (
                  <NavLink
                    key={index}
                    className={(active) =>
                      active.isActive
                        ? `hover:bg-primary hover:text-secondary text-black py-1 px-3 rounded-md text-sm `
                        : `hover:bg-primary text-secondary py-1 px-3 rounded-md text-sm`
                    }
                  >
                    {item?.number}
                  </NavLink>
                ))}
              </div>
              <HSButton
                styles={`border-none`}
                icon={<IoIosArrowForward />}
                title={`Next`}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
