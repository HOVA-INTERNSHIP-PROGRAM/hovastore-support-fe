import HSInput from "./form/HSInput";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoSettingsOutline, IoNotifications } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getSidebarStatus } from "../features/sidebar/sidebarSlice";

const TopNav = ({ title }) => {
  const open = useSelector(getSidebarStatus);
  const navBar = [
    {
      path: "/dashboard/settings",
      icon: <IoSettingsOutline />,
    },
    {
      path: "/Logout",
      icon: <IoNotifications />,
    },
  ];
  return (
    <div
      className=" fixed top-0 right-0 flex  flex-col-reverse gap-2 md:flex-row px-1 items-center justify-between bg-secondaryLight z-40 "
      style={{ width: `calc(100% - ${open ? "180px" : "80px"})` }}
    >
      <h2 className=" text-base md:text-lg md:px-8 font-semibold">{title}</h2>
      <div className="flex p-1 items-center gap-3">
        <HSInput type="input" style={`!rounded-full`} icon={<FaSearch />} />
        <div className="flex items-center gap-3">
          {navBar.map((nav, index) => {
            return (
              <NavLink key={index} to={nav.path}>
                <div className="flex bg-slate-300 text-primary p-2 rounded-full ">
                  {nav.icon}
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className="rounded-full max-h-16 w-16 cursor-pointer">
          <img src="/logo512.png" className="rounded-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
