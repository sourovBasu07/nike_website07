import Image from "next/image";
import Link from "next/link";
import { headerLogo } from "@/assets/images";
import { hamburger } from "@/assets/icons";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="max-container flex justify-between items-center">
        <Link href="/">
          <Image
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0"
          />
        </Link>
        <ul className="flex justify-center items-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="leading-normal font-montserrat text-lg text-slate-gray"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex">
          <Link href="/">Sign in</Link>
          <span>/</span>
          <Link href="/">Explore now</Link>
        </div>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
