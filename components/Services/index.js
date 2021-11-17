import ServicesTile from "./tile";

export default function Services() {
  return (
    <div id="services" className="services">
      <div className="services__wrapper">
        <h2 className="services__header">Co oferujemy</h2>
        <div className="services__tilesWrapper">
          <ServicesTile title={"Spawanie"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, exercitationem hic.Quam quo blanditiis
            distinctio magni ipsa ab, cumque aspernatur.
          </ServicesTile>
          <ServicesTile title={"Gięcie"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, exercitationem hic.Quam quo blanditiis
            distinctio magni ipsa ab, cumque aspernatur.
          </ServicesTile>
          <ServicesTile title={"Cięcie"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, exercitationem hic.Quam quo blanditiis
            distinctio magni ipsa ab, cumque aspernatur.
          </ServicesTile>
          <ServicesTile title={"Malowanie"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, exercitationem hic.Quam quo blanditiis
            distinctio magni ipsa ab, cumque aspernatur.
          </ServicesTile>
          <ServicesTile title={"Piaskowanie"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, exercitationem hic.Quam quo blanditiis
            distinctio magni ipsa ab, cumque aspernatur.
          </ServicesTile>
          <ServicesTile title={"Projektowanie 3D"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, exercitationem hic.Quam quo blanditiis
            distinctio magni ipsa ab, cumque aspernatur.
          </ServicesTile>
        </div>
      </div>
    </div>
  );
}
