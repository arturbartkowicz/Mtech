import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Realizations() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="realizations" className="realizations">
      <div className="realizations__container">
        <h2 className="heading text-white">Nasze realizacje</h2>
        <div className="realizations__cardContainer">
          {/* <Slider {...settings}>
            <div>sdkjnsfjdnw</div>
            <div>slfkmlkfmwlkefmlwkmfwlfkm</div>
          </Slider> */}
        </div>
      </div>
    </div>
  );
}
