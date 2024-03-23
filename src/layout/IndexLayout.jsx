import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const IndexLayout = () => {
  return (
    <>
      <div className="flex flex-col">
        <NavBar />
        <main className="container w-2/3 mx-auto p-1 min-h-screen flex flex-col gap-4 justify-between">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndexLayout;
