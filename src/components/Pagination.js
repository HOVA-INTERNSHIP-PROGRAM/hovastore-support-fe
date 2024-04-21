import React from 'react'
import HSButton from "./form/HSButton";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Pagination() {
  const num = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }];
  return (
    <div>
       <div className="flex flex-col md:flex-row  w-full items-center justify-between">
            <span className="hidden w-full md:block"></span>
            <div className="flex items-center gap-2 !w-fit font-bold">
              <HSButton
                icon={<IoIosArrowBack />}
                title={`Previous`}
                styles={`!flex-row-reverse border-none text-lightBlue hover:bg-lightBlue`}
              />
              <div className="flex items-center gap-2">
                {num.map((item, index) => (
                  <NavLink
                    key={index}
                    className={(active) =>
                      active.isActive
                        ? `hover:bg-lightBlue hover:text-secondary text-lightBlue py-1 px-3 rounded-md text-sm `
                        : `hover:bg-lightBlue text-secondary py-1 px-3 rounded-md text-sm`
                    }
                  >
                    {item?.number}
                  </NavLink>
                ))}
              </div>
              <HSButton
                styles={`border-none text-lightBlue hover:bg-lightBlue`}
                icon={<IoIosArrowForward />}
                title={`Next`}
              />
            </div>
          </div>
    </div>
  )
}

export default Pagination
