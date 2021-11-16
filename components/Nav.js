import Image from "next/image";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import Logo from "../public/images/Logo.png";
import Facebook from "../public/images/social/facebook.png";
import Instagram from "../public/images/social/instagram.png";

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
      <div className="burgerMenu relative h-8">
        <Menu>
          <a id="bmabout" className="menu-item" href="/#about">
            O FIRMIE
          </a>
          <a id="bmproducts" className="menu-item" href="/#products">
            PRODUKTY
          </a>
          <a id="bmservices" className="menu-item" href="/#services">
            USŁUGI
          </a>
          <a id="bmrealizations" className="menu-item" href="/#realizations">
            REALIZACJE
          </a>
          <a id="bmcooperation" className="menu-item" href="/#cooperation">
            WSPŁPRACA
          </a>
          <a id="bmcontact" className="menu-item" href="/#contact">
            KONTAKT
          </a>
        </Menu>
      </div>
    </nav>
  );
}
