import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./Navbar"));
const Footer = lazy(() => import("./Footer"));

const Body = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="m-6 flex-1">
            <Outlet />
          </div>
          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default Body;
