export default function About() {
  return (
    <div id="about" className="about">
      <div className="about__wrapper">
        <div className="about__section">
          <h2 className="about__section_header">Nagłówek</h2>
          <p className="about__description ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione iste qui et sequi adipisci facilis saepe
            repellat consectetur incidunt molestias. Dolorem tempore nesciunt, laudantium aspernatur voluptatem suscipit
            quibusdam doloremque perspiciatis, deserunt dolorum optio temporibus ipsum voluptate placeat soluta quis
            ratione numquam odit quo, repellendus ipsam? Reiciendis minus officiis dolor. Laudantium? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Pariatur doloribus est enim beatae porro commodi veritatis quaerat
            magni, voluptatem nulla. Hic quaerat at error expedita vitae aliquam quia illo dolorum voluptatibus cumque
            facere, sapiente beatae suscipit, accusamus soluta reprehenderit. Unde sed aspernatur sunt voluptatem. Magni
            optio neque autem eligendi quaerat.
          </p>
        </div>
        <div className="about__section features">
          <ul className="features_list">
            <li className="feature">
              <div className="feature__list_bullet" />
              <span>Jakość</span>
            </li>
            <li className="feature">
              <div className="feature__list_bullet" />
              <span>Profesjonalizm</span>
            </li>
            <li className="feature">
              <div className="feature__list_bullet" />
              <span>Pełna gama kolorów</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
