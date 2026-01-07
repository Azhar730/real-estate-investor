import Banner from "@/components/modules/home/Banner";
import DeveloperProjects from "@/components/modules/home/DeveloperProjects";
import Footer from "@/components/modules/home/Footer";
import GigaProjects from "@/components/modules/home/GigaProjects";
import Services from "@/components/modules/home/Services";
import Subscribe from "@/components/modules/home/Subscribe";
import Verify from "@/components/modules/home/Verify";
import Navbar from "@/components/shared/Navbar";

const HomePage = () => {
  return (
    <div className="">
      <Navbar/>
      <Banner/>
      <Services/>
      <GigaProjects/>
      <DeveloperProjects/>
      <Verify/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default HomePage;