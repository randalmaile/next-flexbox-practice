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

        <ul className="">
          {[
            { title: "Home", route: "/" },
            { title: "Flex Containers", route: "/flexcontainers" },
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
