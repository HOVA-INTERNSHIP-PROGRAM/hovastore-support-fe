import { FaStore, FaArrowRight } from "react-icons/fa";
import { MdDashboard, MdLogout, MdListAlt } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { CgScreen } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/sidebar/sidebarSlice";
import { logout } from "../features/auth/logoutSlice";

const SideNav = () => {
  const navigate = useNavigate();
  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard />,
    },
    {
      name: "Articles",
      path: "Articles",
      icon: <GrArticle />,
    },
    {
      name: "Feedback",
      path: "Feedback",
      icon: <VscFeedback />,
    },
    {
      name: "Content",
      path: "Content",
      icon: <CgScreen />,
    },
    {
      name: "Category",
      path: "Category",
      icon: <MdListAlt />,
    },
  ];
  const subMenu = [
    {
      name: "Settings",
      path: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      name: "Logout",
      path: "Logout",
      icon: <MdLogout />,
    },
  ];

  const handleLogout = (path) => {
    if (path === "Logout") {
      dispatch(logout());
      navigate("/");
    } else {
      navigate(path);
    }
  };

  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        dispatch(toggleSidebar());
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div
      className={`bg-primary min-h-screen  p-6 z-50 flex flex-col  justify-between duration-300 fixed top-0 left-0  ${
        open ? "!w-68" : "!w-20"
      }`}
    >
      <div
        className="absolute -right-5 top-0 border-primary rounded-r-lg border p-2"
        onClick={() => {
          dispatch(toggleSidebar());
          setOpen(!open);
        }}
      >
        <FaArrowRight className={`mt-1 mb-1 ${open && "rotate-180"}`} />
      </div>
      <div className=" cursor-pointer ">
        <NavLink
          to="/dashboard"
          className="!inline-flex items-center px-2 py-2  gap-2 text-secondary "
        >
          <FaStore
            className={`duration-500 ${open ? "" : "h-8"} ${
              !open && "rotate-[360deg]"
            }`}
          />
          <NavLink
            to="/dashboard"
            className={`text-white origin-left text-nowrap font-bold duration-300 text-xl ${
              !open && "scale-0"
            }`}
          >
            Hova store
          </NavLink>
        </NavLink>
        <div className=" mt-5 w-full flex  flex-col gap-3">
          {menu.map((menu, index) => (
            <NavLink
              to={menu.path}
              key={index}
              className={(active) =>
                active.isActive
                  ? `bg-red-100 !w-full px-2 py-2 text-black text-base flex items-center gap-3 cursor-pointer  duration-100 rounded `
                  : `text-white hover:bg-red-100 !w-full px-2 py-2 hover:text-black text-base flex items-center gap-3 cursor-pointer  duration-100 rounded `
              }
            >
              <span className={`${!open && "!w-fit"}`}>{menu.icon}</span>
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                {menu.name}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {subMenu.map((menu, index) => (
          <div
            key={index}
            onClick={() => handleLogout(menu.path)}
            className="text-white hover:bg-red-100 !w-full px-2 py-2 hover:text-black text-base flex items-center gap-3 cursor-pointer duration-100 rounded"
          >
            <span>{menu.icon}</span>
            <span
              className={`text-base font-medium flex-1 ${!open && "hidden"}`}
            >
              {menu.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
