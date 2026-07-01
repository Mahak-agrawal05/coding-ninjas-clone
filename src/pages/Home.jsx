import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Offerings from "../components/Offerings/Offerings";
import Stats from "../components/Stats/Stats";
import WhyUs from "../components/WhyUs/WhyUs";
import Advantage from "../components/Advantage/Advantage";
import Stories from "../components/Stories/Stories";
import Trusted from "../components/Trusted/Trusted";
import Spotlight from "../components/Spotlight/Spotlight";
import Certificate from "../components/Certificate/Certificate";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <Offerings />
      <Stats />
      <WhyUs />
      <Advantage />
      <Stories />
      <Trusted />
      <Spotlight />
      <Certificate />
      <Footer />
    </>
  );
}

export default Home;