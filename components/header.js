import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="">
      <div className="">
        <div className="">
          <Link href="/">
            <a className="">Next.js Flexbox practice</a>
          </Link>
        </div>

        <button
          className=""
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul className="">
          {[
            { title: "Home", route: "/" },
            { title: "About", route: "/about" },
          ].map(({ route, title }) => (
            <li className="" key={title}>
              <Link href={route}>
                <a className="">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
