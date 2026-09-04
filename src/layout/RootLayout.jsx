import { Outlet } from "react-router";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

function RootLayout() {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
