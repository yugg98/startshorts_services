import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="40%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="10" cy="128" r="128" />
            <circle cx="10" cy="481" r="40" />
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">See what our client says</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Have a look in our past history of clients and what perception
              they have about us
            </p>
          </div>
          <Swiper
            autoplay={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide
              style={{
                height: "400px",
              }}
            >
              <Cards
                name="Sagar Gupta"
                logo="https://favshop.s3.ap-south-1.amazonaws.com/favshop/Asset+5%404x.png"
                cname="Favshop.in"
                review="Loved the session it help us a lot in building our business from scratch will recomend to everyone who want to grow "
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-row justify-between">
                <Cards
                  name="Sharan"
                  logo="https://discist.com/images/log.png"
                  cname="Discist"
                  review="Had some great suggestions from Yug Gupta about various strategic plans for my company. Has analysed various aspects of the company and provided valuable feedback"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-row justify-between">
                <Cards
                  name="Mayur "
                  logo="https://media.licdn.com/dms/image/C4D0BAQFkiQjwC4CInw/company-logo_200_200/0/1669642888416?e=1688601600&v=beta&t=0c-IBdA-eaGxVLCBT6LXLZwBvQJH6Yv7dG8c_o8TZlA"
                  cname="TrekStory.in"
                  review="We had a session with startshorts and we have got many points that we can work on to improve"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-row justify-between">
                <Cards
                  name="Pawan Soni "
                  logo="https://shubhjeweller.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0ea1c8af.png&w=3840&q=75"
                  cname="shubhjeweller.com"
                  review="Startshorts had created a great eccomerce website for us at affordable prices with a excellent design "
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

const Cards = (props) => {
  return (
    <div
      className="max-w-2xl mx-auto mt-20 "
      data-aos="zoom-y-out"
      style={{
        boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
        border: "none",
      }}
    >
      <div className="relative flex items-start  rounded bg-white">
        <div className="text-center px-8 py-4 pt-20 mx-4 md:mx-0">
          <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
           
            <img
              className="relative rounded-full"
              src={props.logo}
              width="96"
              height="96"
              alt="Testimonial 01"
            />
          </div>
          <blockquote className="text-xl font-medium mb-4">
            “{props.review}“
          </blockquote>
          <cite className="block font-bold text-lg not-italic mb-1">
            {props.name}
          </cite>
          <div className="text-gray-600">
            <span>CEO & Co-Founder</span>{" "}
            <a className="text-blue-600 hover:underline" href={props.cname}>
              @{props.cname}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
