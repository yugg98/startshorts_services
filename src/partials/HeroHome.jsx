import React, { useState } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";
import Header from "./Header";
import Footer from "./Footer";
import Typewriter from "typewriter-effect";
import about from "../../assets/about.png";
import Hello from "../images/hello.jpg";
function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  var current = new Date(); //'Mar 11 2015' current.getTime() = 1426060964567
  var followingDay = new Date(current.getTime() + 86400000); // + 1 day in ms
  followingDay.toLocaleDateString();
  return (
    <section className="relative bgb">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="bg-gray-900 text-white max-w-[800px] mx-auto rounded-xl py-2 ">
            <p className="text-center text-lg">
              Avail your first free consultancy now offer ending soon at{" "}
              {followingDay.toLocaleDateString()}{" "}
              <a className=" " href="https://calendly.com/yugg9826/short-meet">
                Claim Now!
              </a>
            </p>
          </div>
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Unlocking your potential with expert{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r to-black from-gray-500">
                guidance
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                <Typewriter
                  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                  options={{
                    strings: [
                      "We help you grow exponentially with a range of services like devlopment, marketing, consultancy and finance our consulta will help you to identify and rectify your startup and tech problems",
                      "World",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-black hover:text-white bg-white hover:bg-black w-full mb-4 sm:w-auto sm:mb-0"
                    href="https://calendly.com/yugg9826/short-meet"
                  >
                    Book a free call
                  </a>
                </div>
                <div>
                  <a
                    className="btn  text-white hover:text-black bg-black hover:bg-white w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={HeroImage}
                  width="768"
                  height="432"
                  alt="Hero"
                />
                <svg
                  className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="hero-ill-a"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="99.24%"
                      id="hero-ill-b"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="48.57%" />
                      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="hero-ill-e"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle
                      fillOpacity=".04"
                      fill="url(#hero-ill-a)"
                      cx="384"
                      cy="216"
                      r="128"
                    />
                    <circle
                      fillOpacity=".16"
                      fill="url(#hero-ill-b)"
                      cx="384"
                      cy="216"
                      r="96"
                    />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>
              <button
                className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button>
            </div>

            {/* Modal */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <iframe
                  className="absolute w-full h-full"
                  src="https://www.youtube.com/embed/mebaf3-lbZ0"
                  title="Video"
                  allowFullScreen
                ></iframe>
              </div>
            </Modal>
          </div>
        </div>
      </div>

      <div class="py-16 bg-white">
        <p className="text-4xl font-bold text-center">About Us</p>
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src={Hello}
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                Who we are?
              </h2>
              <div className="text-gray-800 mt-2 z-10 relative text-justify ">
                Welcome to Startshorts! We provide the necessary services to
                help startups bring their ideas to life.
                <br />
                Our team of experienced professionals are passionate about
                helping startups grow and reach their potential. We don't just
                provide the services, but we also provide the necessary guidance
                and support to our clients. With our help, startups can build
                their own unique business and make a lasting impact.
                <br />
                At Startshorts, we believe that no great idea should go to
                waste. That's why we strive to provide the best possible
                services and support to startups so they can grow and reach
                their potential.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
