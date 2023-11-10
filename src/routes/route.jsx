import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Footer from "../layout/Footer/Footer.jsx"
import Main from "../layout/Main/Main.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Lodgment from "../pages/Lodgment/Lodgment.jsx";
import About from "../pages/About/About.jsx";
import  Error  from "../pages/Error/Error.jsx";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/flat",
        element: <Lodgment />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);
