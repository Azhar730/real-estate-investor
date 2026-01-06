import Banner from "@/components/modules/home/Banner";
import DeveloperProjects from "@/components/modules/home/DeveloperProjects";
import GigaProjects from "@/components/modules/home/GigaProjects";
import Services from "@/components/modules/home/Services";
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
    </div>
  );
};

export default HomePage;