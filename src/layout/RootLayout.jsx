import { Outlet } from "react-router";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

function RootLayout() {
  return (
    <div className="max-w-7xl mx-auto bg-[#EAECED] px-20 py-2">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
