import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Products from "../components/Products/index";
import Services from "../components/Services/index";
import Realizations from "../components/Realizations";
import Cooperation from "../components/Cooperation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Products />
      <Services />
      <Realizations />
      <Cooperation />
      <Contact />
      <Footer />
    </>
  );
}
