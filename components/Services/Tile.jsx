import React from "react";
import Image from "next/image";
import icon from "../../public/images/Icon.png";

const ServicesTile = ({ title, children }) => {
  const content = children;

  return (
    <div className="services__tile">
      <div className="servicesTile__icon">
        <Image src={icon} />
      </div>
      <div className="servicesTile__content">
        <h4 className="servicesTile__title">{title}</h4>
        <p className="servicesTile__text">{content}</p>
      </div>
    </div>
  );
};

export default ServicesTile;
