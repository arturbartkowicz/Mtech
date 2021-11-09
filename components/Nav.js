import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/Logo.png";

export default function Nav() {
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
        <div className="nav__socialMediaIcon mb-4"></div>
        <div className="nav__socialMediaIcon"></div>
      </div>
    </nav>
  );
}
