import ProductTile from "./Tile";
import service1 from "../../public/images/realizations/realization-1.png";
import service2 from "../../public/images/realizations/realization-2.png";
import productsContent from "../../utils/content/products";
import Modal from "react-modal";
import { useState } from "react";

export default function Products() {
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (dataIndex) => {
    setModalTitle(productsContent[dataIndex].title);
    setModalContent(productsContent[dataIndex].content);
    setIsModalVisible(true);
  };

  return (
    <>
      <div id="products" className="products">
        <div className="products__wrapper">
          <ProductTile
            title={"Dla przemysłu"}
            content={"Od x lat jestesmy profesjolnalistami w branży malowania proszkowego."}
            image={service1}
            openModal={() => openModal(0)}
          />
          <ProductTile
            title={"Dla domu"}
            content={"Korzystamy z nowoczesnych technologi oraz sprawdzoncyh rozwiązań."}
            image={service2}
            openModal={() => openModal(1)}
          />
          <ProductTile
            title={"Projekt indywidualny"}
            content={"Wykonujemy kompleksowe usługi w ścisłej współpracy z klientem."}
            image={service1}
            openModal={() => openModal(2)}
          />
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 className="heading">{modalTitle}</h3>
          <button className="heading" style={{ marginRight: "2rem" }} onClick={() => setIsModalVisible(false)}>
            X
          </button>
        </div>
        <p>{modalContent}</p>
      </Modal>
    </>
  );
}
