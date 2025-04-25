
import StickyStackedCards from "./components/Feature";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import NavBar from "./components/Navbar";
import ReadyTo from "./components/ReadyTo";
import ServicesSection from "./components/Service";
import TextPressure from "./components/TextPressure";


import LocomotiveScroll from "locomotive-scroll";
import InfiniteTestimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactPage from "./components/ContactPage";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-white bg-black">
      {/* <Loader /> */}
      <NavBar />
      <LandingPage />
      <Marque />
      <ServicesSection />
      <StickyStackedCards />
      <FAQ />
      <InfiniteTestimonials />
      <ContactPage/>


      <TextPressure
          text="WEBDRAVE"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
        

    </div>
  );
}

export default App;
