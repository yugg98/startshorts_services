import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../favicon.jpeg";
function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img src={logo} className={`w-12 rounded-full`} />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end sm:flex-wrap items-center">
              <li>
                <a href="https://wa.me/+919755114217">
                  <button className="btn-sm btn text-sm sm:text-lg text-gray-200 bg-gray-900 hover:bg-gray-800 sm:ml-3">
                    Whatsapp now
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/yugg9826/short-meet"
                  className="btn-sm btn text-sm sm:text-lg text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                >
                  <span>book a call</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 sm:ml-2 sm:-mr-1 mx-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
