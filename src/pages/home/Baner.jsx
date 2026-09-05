import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banerimg1 from "../../assets/banner/banner1.png";
import banerimg2 from "../../assets/banner/banner2.png";
import banerimg3 from "../../assets/banner/banner3.png";

function Baner() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      className="bg-white rounded-4xl overflow-hidden"
    >
      <div>
        <img
          src={banerimg1}
          className="rounded-4xl  h-auto block object-cover"
        />
      </div>
      <div>
        <img
          src={banerimg2}
          className="rounded-4xl h-auto block object-cover"
        />
      </div>
      <div>
        <img
          src={banerimg3}
          className="rounded-4xl h-auto block object-cover"
        />
      </div>
    </Carousel>
  );
}

export default Baner;
