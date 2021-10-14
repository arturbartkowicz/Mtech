import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Image src="/images/logo.png" alt="Company logo" layout="fill" />
      </div>
      <ul className="nav__list">
        <li className="nav__link">
          <Link href="/#ofirmie">
            <a className="text-white">
              <u>O FIRMIE</u>
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#oferta">
            <a className="text-white">
              <u>OFERTA</u>
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#realizacje">
            <a className="text-white">
              <u>REALIZACJE</u>
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#pytania">
            <a className="text-white">
              <u>PYTANIA</u>
            </a>
          </Link>
        </li>
        <li className="nav__link">
          <Link href="/#kontakt">
            <a className="text-white">
              <u>KONTAKT</u>
            </a>
          </Link>
        </li>
      </ul>
      <div className="nav__socialMediaWrapper">
        <div className="nav__socialMediaIcon mb-4"></div>
        <div className="nav__socialMediaIcon"></div>
      </div>
    </nav>
  );
}
