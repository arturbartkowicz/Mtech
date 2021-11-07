import ProductTile from "./Tile";
import service1 from "../../public/images/realizations/realization-1.png";
import service2 from "../../public/images/realizations/realization-2.png";

export default function Products() {
  return (
    <div id="products" className="products">
      <div className="products__wrapper">
        <ProductTile
          title={"Dla przemysłu"}
          content={"Od x lat jestesmy profesjolnalistami w branży malowania proszkowego."}
          image={service1}
        />
        <ProductTile
          title={"Dla domu"}
          content={"Korzystamy z nowoczesnych technologi oraz sprawdzoncyh rozwiązań."}
          image={service2}
        />
        <ProductTile
          title={"Projekt indywidualny"}
          content={"Wykonujemy kompleksowe usługi w ścisłej współpracy z klientem."}
          image={service1}
        />
      </div>
    </div>
  );
}
