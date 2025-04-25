import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import StickyStackedCards from "./components/Feature";
import Featured from "./components/Feature";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import NavBar from "./components/Navbar";
import ReadyTo from "./components/ReadyTo";
import ServicesSection from "./components/Service";
import TextPressure from "./components/TextPressure";

import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-white bg-black">
      <NavBar />
      <LandingPage />
      <Marque />
      {/* <About /> */}
      <ServicesSection />
      {/* <Eyes /> */}
      <StickyStackedCards />
      {/* <Cards /> */}
      {/* <ReadyTo /> */}


      <footer className="w-full sm:w-auto ">
        <TextPressure
          text="WEBDRAVE"
          fontFamily="Space Grotesk"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          minFontSize={48} // You can go higher if you want
          scale={true}
        />
      </footer>

    </div>
  );
}

export default App;
