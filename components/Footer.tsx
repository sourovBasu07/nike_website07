import Image from "next/image";
import Link from "next/link";

import { footerLogo } from "@/assets/images";
import { footerLinks, socialMedia } from "@/constants";
import { copyrightSign } from "@/assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex max-lg:flex-col justify-between items-start flex-wrap gap-20">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </Link>
          <p className="text-base text-white-400 sm:max-w-sm mt-6 leading-7 font-montserrat">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item) => (
              <div
                className="w-12 h-12 flex justify-center items-center bg-white rounded-full"
                key={item.alt}
              >
                <Image src={item.src} alt={item.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between flex-wrap flex-1 gap-20 lg:gap-10">
          {footerLinks.map((item) => (
            <div className="" key={item.title}>
              <h4 className="font-medium font-montserrat text-2xl leading-normal text-white mb-6">
                {item.title}
              </h4>
              <ul>
                {item.links.map((link) => (
                  <li
                    className="text-base font-montserrat leading-normal mt-3 text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex max-sm:flex-col justify-between max-sm:items-center mt-24 text-white-400">
        <div className="flex justify-start items-center flex-1 gap-2 font-montserrat cursor-pointer">
          <Image
            src={copyrightSign}
            alt="copyfight sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};
export default Footer;
