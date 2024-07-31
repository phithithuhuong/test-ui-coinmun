import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="mx-auto w-full px-4 lg:px-8 ">
      <div className="flex w-full items-center  justify-between border-t subpixel-antialiased border-gray-700/50  text-sm font-normal text-gray-400 dark:border-gray-700/50 dark:bg-dark-950 dark:text-gray-500">
        <div className="flex flex-nowrap items-center justify-between gap-4 py-4">
          <span> © 2024 CoinMun</span>
        </div>
        <div className="items-center justify-center gap-4 text-sm   dark:text-gray-300 hidden sm:flex">
          <a href="/advertise" className="hover:underline">
            Advertise
          </a>
          <a href="/listing" className="hover:underline">
            Listing
          </a>
          <a href="/support" className="hover:underline">
            Support
          </a>
          <a href="/legal" className="hover:underline">
            Legal
          </a>
        </div>
        <div className="flex items-center justify-center gap-5">
          <a
            href=""
            className="hover:text-white text-[rgba(179, 196, 238, .75)]"
          >
            <FontAwesomeIcon icon={faPaperPlane} size="lg" color="" />
          </a>
          <a
            href=""
            className="hover:text-white text-[rgba(179, 196, 238, .75)]"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
