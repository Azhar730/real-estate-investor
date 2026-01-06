import Container from "@/components/shared/Container";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="mt-4">
            <Image 
            src={'/banner-sakk.jpg'}
            alt="banner"
            height={736}
            width={1920}
        />
        </div>
    );
  };
  
  export default Banner;