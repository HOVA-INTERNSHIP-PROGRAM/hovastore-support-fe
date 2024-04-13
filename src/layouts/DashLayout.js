import { Outlet } from "react-router-dom"
import SideNav from "../components/SideNav"
import TopNav from "../components/TopNav"
import { useSelector } from "react-redux";
import { getSidebarStatus } from "../features/sidebar/sidebarSlice"
const DashLayout = () => {
    const open = useSelector(getSidebarStatus)
    console.log(open)

    return (
        <div className=" min-h-screen w-full bg-secondaryLight flex justify-center  gap-1 items-start relative" >
            <div className="flex items-start ">
                <SideNav />
                <TopNav title={"Dashborad Overview"} />
            </div>

            <div className="min-h-screen overflow-hidden mt-32 px-2 bg-secondaryLight flex flex-col justify-between absolute right-0 " style={{ width: `calc(100% - ${open ? '180px' : '80px'})` }} >
                <Outlet />
            </div>


        </div>
    )
}

export default DashLayout