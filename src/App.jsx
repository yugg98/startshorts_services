import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

const Home = lazy(() => import("./pages/Home"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Header = lazy(() => import("./partials/Header"));
const Footer = lazy(() => import("./partials/Footer"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Suspense
        fallback={
          <div
            className="col text-center p-5"
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <b>___Starts------------------------ Shorts___</b>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
