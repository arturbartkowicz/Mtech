import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Image src="/images/logo.png" alt="Company logo" layout="fill" />
      </div>
      <ul className="nav__list visibilityDesktop">
        <li className="nav__link">
          <Link href="/#about">
            <a className="text-white">
              <u>O FIRMIE</u>
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#products">
            <a className="text-white">
              <u>PRODUKTY</u>
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#services">
            <a className="text-white">
              <u>USŁUGI</u>
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#realizations">
            <a className="text-white">
              <u>REALIZACJE</u>
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#cooperation">
            <a className="text-white">
              <u>WSPÓŁPRACA</u>
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#contact">
            <a className="text-white">
              <u>KONTAKT</u>
            </a>
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
