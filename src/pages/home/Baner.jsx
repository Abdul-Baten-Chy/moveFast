import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banerimg1 from "../../assets/banner/banner1.png";
import banerimg2 from "../../assets/banner/banner2.png";
import banerimg3 from "../../assets/banner/banner3.png";

function Baner() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src={banerimg1} />
      </div>
      <div>
        <img src={banerimg2} />
      </div>
      <div>
        <img src={banerimg3} />
      </div>
    </Carousel>
  );
}

export default Baner;
