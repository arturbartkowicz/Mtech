import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Products from "../components/Products";
import Realizations from "../components/Realizations";
import Questions from "../components/Questions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Products />
      <Realizations />
      <Questions />
      <Contact />
      <Footer />
    </>
  );
}
