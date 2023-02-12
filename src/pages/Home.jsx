import React from "react";
import img from "../../assets/w.png";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Footer from "../partials/Footer";
import Contact from "../Components/contac/Contact";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden  ">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Contact />
        <WhatsAppWidget
          phoneNo="9755114217"
          position="left"
          widgetWidth="300px"
          widgetWidthMobile="260px"
          autoOpen={true}
          autoOpenTimer={5000}
          messageBox={true}
          messageBoxTxt="Hi Team, is there any related service available ?"
          iconSize="60"
          iconColor="white"
          iconBgColor="#128C7E"
          headerIcon={img}
          headerIconColor="black"
          headerTxtColor="white"
          headerBgColor="#128C7E"
          headerTitle="StartShorts"
          headerCaption="Online"
          bodyBgColor="#fff"
          chatPersonName="Support"
          chatMessage={
            <>
              Hi there 👋 <br />
              <br /> How can I help you?
            </>
          }
          footerBgColor="#fafafa"
          placeholder="Type a message.."
          btnBgColor="#25D366"
          btnTxt="Start Chat"
          btnTxtColor="white"
        />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
