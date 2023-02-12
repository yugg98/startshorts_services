import React, { useState } from "react";
import marketing from "../../assets/marketing.png";
import code from "../../assets/code.png";
import financials from "../../assets/financial.png";
import Typewriter from "typewriter-effect";
import "../style.css";
import { dummy } from "../Components/contac/dummy";
function FeaturesBlocks() {
  const [state, setState] = useState(dummy[0]);
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              <Typewriter
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                options={{
                  strings: [
                    " Whether you're about to launch or have only just started up, our  experienced consultants can help you grow.",
                    " No project is too small!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>

          {/* Items */}
          <div className="max-w-6xl mx-auto px-2 sm:px-6 ">
            <div className="wraps">
              <div className="left">
                {dummy.map((data, index) => (
                  <div
                    key={index}
                    className={data.id == state.id ? "active" : ""}
                  >
                    <li key={index} onClick={() => setState(data)}>
                      {data.title}
                    </li>
                  </div>
                ))}
              </div>
              <div className="right">
                {state.product?.map((data, index) => (
                  <div className="card" key={data._id}>
                    <img
                      className="img"
                      src={data.image ? data.image : "../../assets/code.png"}
                    />
                    <h4 className="text-xl text-gray-500 font-bold leading-snug tracking-tight mb-1">
                      {data.title ? data.title : " Consultancy"}
                    </h4>
                    <p className="text-gray-600 ">
                      {data.description ? (
                        data.description.length > 100 ? (
                          <p>
                            {data.description.substring(100, [0])}
                            <br></br>
                          </p>
                        ) : (
                          data.description
                        )
                      ) : (
                        "Our premier consultancy services are characterized by their expertise and dedication to providing businesses with the necessary knowledge and guidance to make strategic decisions....."
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
