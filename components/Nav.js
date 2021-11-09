import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/Logo.png";
import Facebook from "../public/images/social/facebook.png";
import Instagram from "../public/images/social/instagram.png";
import { slide as Menu } from "react-burger-menu";

export default function Nav() {
  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Image src={Logo} alt="Company logo" />
      </div>
      <ul className="nav__list visibilityDesktop">
        <li className="nav__link">
          <Link href="/#about">
            <a className="nav__linkText">O FIRMIE</a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#products">
            <a className="nav__linkText">PRODUKTY</a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#services">
            <a className="nav__linkText">USŁUGI</a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#realizations">
            <a className="nav__linkText">REALIZACJE</a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#cooperation">
            <a className="nav__linkText">WSPÓŁPRACA</a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#contact">
            <a className="nav__linkText">PYTANIA I KONTAKT</a>
          </Link>
        </li>
      </ul>
      <div className="nav__socialMediaWrapper visibilityDesktop">
        <div className="nav__socialMediaIcon mb-4">
          <Image src={Instagram} alt="Instagram" layout="fill" />
        </div>
        <div className="nav__socialMediaIcon">
          <Image src={Facebook} alt="Facebook" layout="fill" />
        </div>
      </div>
      <div className="relative w-4 h-4 visibilityMobile">
        <Menu className="visibilityMobile">
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
      </div>
    </nav>
  );
}
