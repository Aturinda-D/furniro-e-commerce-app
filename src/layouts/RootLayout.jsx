import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const location = useLocation();
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);
  useEffect(() => {
    setSideBarIsVisible(false);
  }, [location]);
  return (
    <div className="root-layout">
      <Header
        sideBarIsVisible={sideBarIsVisible}
        setSideBarIsVisible={setSideBarIsVisible}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
