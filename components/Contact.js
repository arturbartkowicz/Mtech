export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact__box contact__box--1">
        <h3 className="contact__header">Pytania i odpowiedzi:</h3>
        <div className="contact__questionContainer">Najczęstsze pytanie #1</div>
        <div className="contact__questionContainer">Najczęstsze pytanie #2</div>
        <div className="contact__questionContainer">Najczęstsze pytanie #3</div>
        <div className="contact__questionContainer">Najczęstsze pytanie #4</div>
        <div className="contact__questionContainer">Najczęstsze pytanie #5</div>
        <div className="contact__questionContainer">Button</div>
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
      </div>
    </div>
  );
}
