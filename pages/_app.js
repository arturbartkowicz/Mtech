import "../styles/global.css";
import "tailwindcss/tailwind.css";
import "../styles/components.css";
import Modal from "react-modal";

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
