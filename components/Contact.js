import Image from "next/image";
import Slider from "react-slick";
import Modal from "react-modal";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsContent from "../utils/content/products";

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Contact() {
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (dataIndex) => {
    setModalTitle(productsContent[0].title);
    setModalContent(productsContent[0].content);
    setIsModalVisible(true);
  };

  return (
    <>
      <div id="contact" className="contact">
        <div className="contact__box contact__box--1">
          <h3 className="contact__header">Pytania i odpowiedzi:</h3>
          <div className="w-full">
            <div className="contact__questionContainer" onClick={() => openModal(0)}>
              Najczęstsze pytanie #1
            </div>
            <div className="contact__questionContainer" onClick={() => openModal(1)}>
              Najczęstsze pytanie #2
            </div>
            <div className="contact__questionContainer" onClick={() => openModal(2)}>
              Najczęstsze pytanie #3
            </div>
            <div className="contact__questionContainer">Najczęstsze pytanie #4</div>
            <div className="contact__questionContainer">Najczęstsze pytanie #5</div>
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
          <div className="contact__sliderContainer">
            <div className="contact__slider">
              <Slider {...settings}>
                <div className="contact__sliderBox">
                  <Image src="/images/partners-logo/sample-1.png" alt="Company logo" layout="fill" />
                </div>
                <div className="contact__sliderBox">
                  <Image src="/images/partners-logo/sample-2.png" alt="Company logo" layout="fill" />
                </div>
                <div className="contact__sliderBox">
                  <Image src="/images/partners-logo/sample-3.png" alt="Company logo" layout="fill" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Modal
        style={{
          overlay: { zIndex: 999, backgroundColor: "rgba(0, 0, 0, 0.75)" },
          content: { top: "100px", left: "100px", right: "100px", bottom: "100px" },
        }}
        isOpen={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        closeTimeoutMS={200}
      >
        <h3>{modalTitle}</h3>
        <p>{modalContent}</p>
      </Modal>
    </>
  );
}
