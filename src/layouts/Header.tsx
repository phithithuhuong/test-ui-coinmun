import { faMoon, faSun, faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const Header: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex flex-col w-full border-b subpixel-antialiased border-gray-700/50">
      <div className="relative flex h-8 items-center border-b subpixel-antialiased border-gray-700/50 w-full">
        <button className="group flex shrink-0 items-center gap-1 text-nowrap text-sm  font-medium dark:text-white">
          <div className="flex items-center justify-center bg-[#141527] z-10 px-10 ">
            Losers
          </div>
          <Marquee style={{ width: "1200px" }} className=" ">
            <div className="flex space-x-4">
              {Array.from({ length: 30 }, (_, i) => (
                <div key={i} className="flex ">
                  <span
                    className={classNames(
                      "mr-1",
                      i < 3 ? "text-yellow-300" : "text-gray-200 "
                    )}
                  >
                    {" "}
                    #{i + 1}
                  </span>
                  <span className="text-gray-200 uppercase"> Tcevbhvhe</span>
                  <span className="text-red-500 ml-1"> -12.54 %</span>
                </div>
              ))}
            </div>
          </Marquee>
        </button>
      </div>
      <nav className="mx-auto w-full flex  items-center justify-between px-4 py-3 lg:px-8">
        <div className="relative flex grow items-center gap-4 max-w-96 w-full bg-[#1e203a]">
          <input
            placeholder="Search"
            type="text"
            className="bg-[#1e203a] outline-none block w-full rounded-lg border-0 px-4 text-gray-700 placeholder-gray-500/50 dark:bg-dark-900/25 dark:text-gray-100 dark:focus:bg-dark-900/40 sm:text-md font-normal focus:ring-0 py-2 pl-12 pr-12"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="flex items-center gap-x-3 ">
          <a href="/login">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e203a] dark:bg-dark-900/50">
              <FontAwesomeIcon icon={faUser} size="xs" />
            </div>
          </a>
          <div
            onClick={() => setIsShow(!isShow)}
            className="cursor-pointer rounded-full hover:text-gray-500 h-8 w-8 hover:bg-[#1e203a] flex items-center justify-center"
          >
            {!isShow ? (
              <FontAwesomeIcon icon={faMoon} />
            ) : (
              <FontAwesomeIcon icon={faSun} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
