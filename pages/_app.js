import "../styles/global.css";
import "tailwindcss/tailwind.css";
import "../styles/nav.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
