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
          <Slider {...settings}>
            <div className="realizations__card">
              <div className="realizations__cardLeft">
                <h3 className="realizations__header">Nazwa realizacji</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iste veniam impedit rem, praesentium
                  consequuntur magnam optio, nam molestias dolores laboriosam aspernatur! Quibusdam sed nisi rem magni
                  voluptatibus natus expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat hic
                  laboriosam quam, quidem ullam excepturi aut saepe dicta cumque nobis sapiente deserunt tenetur sunt
                  veritatis illo rerum, alias sint dolorum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="realizations__cardRight relative">
                <Image src="/images/realizations/realization-1.png" alt="Company logo" layout="fill" />
              </div>
            </div>
            <div className="realizations__card">
              <div className="realizations__cardLeft">
                <h3 className="realizations__header">Nazwa realizacji</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iste veniam impedit rem, praesentium
                  consequuntur magnam optio, nam molestias dolores laboriosam aspernatur! Quibusdam sed nisi rem magni
                  voluptatibus natus expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat hic
                  laboriosam quam, quidem ullam excepturi aut saepe dicta cumque nobis sapiente deserunt tenetur sunt
                  veritatis illo rerum, alias sint dolorum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="realizations__cardRight relative">
                <Image src="/images/realizations/realization-2.png" alt="Company logo" layout="fill" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
