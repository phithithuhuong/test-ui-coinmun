import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";

const LayoutScreen = () => {
  return (
    <div className="w-full ">
      <Sidebar />
      <main>
        <div className="flex flex-col w-full pl-[72px]">
          <Header />
          <Banner />
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default LayoutScreen;
