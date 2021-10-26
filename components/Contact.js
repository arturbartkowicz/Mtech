import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Contact() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="contact" className="contact">
      <div className="contact__box contact__box--1">
        <h3 className="contact__header">Pytania i odpowiedzi:</h3>
        <div className="w-full">
          <div className="contact__questionContainer">
            Najczęstsze pytanie #1
          </div>
          <div className="contact__questionContainer">
            Najczęstsze pytanie #2
          </div>
          <div className="contact__questionContainer">
            Najczęstsze pytanie #3
          </div>
          <div className="contact__questionContainer">
            Najczęstsze pytanie #4
          </div>
          <div className="contact__questionContainer">
            Najczęstsze pytanie #5
          </div>
        </div>
        <div className="btn__container">
          <button className="btn">pokaz więcej</button>
        </div>
      </div>
      <div className="contact__box contact__box--2">
        <h3 className="contact__header">Kontakt:</h3>
        <p className="contact__text">MTech Precision</p>
        <p className="contact__text">
          Grochowe 113A
          <br />
          39-332 tuszów Narodowy
        </p>
        <p className="contact__text">
          Tel. <u>+48 576 280 272</u>
        </p>
        <p className="contact__text">
          NIP: 8171945042
          <br />
          REGON: 381465643
        </p>
        <p className="contact__text">
          E-mail: <u>mtechoffice113a@gmail.com</u>
        </p>
      </div>
      <div className="contact__box contact__box--3">
        <h3 className="contact__header">Nasi partnerzy:</h3>
        <div className="text-white w-40 h-40">
          <Slider {...settings}>
            <div className="w-full flex justify-center">
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
