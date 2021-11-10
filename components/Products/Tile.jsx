import React from "react";
import Image from "next/image";

const ProductTile = ({ title, content, image, openModal }) => {
  return (
    <div className="products__tile">
      <div className="productsTile__content">
        <h4 className="productsTile__title">{title}</h4>
        <p>{content}</p>
        <button className="btn productsTile__button" onClick={openModal}>
          dowiedz się więcej
        </button>
      </div>
      <div className="productsTile__image">
        <Image layout="fill" src={image} />
      </div>
    </div>
  );
};

export default ProductTile;
