import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCopy, faFlag, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faGlobe,
  faPaperPlane,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Description from "./Description";
const Info = () => {
  return (
    <div className="col-span-3 flex w-full flex-col justify-between gap-6 sm:col-span-2 ">
      <div className="flex w-full flex-col justify-between gap-6 sm:flex-row">
        <div className="flex flex-nowrap items-center gap-3">
          <div className="item flex max-w-64 flex-nowrap gap-2 whitespace-nowrap text-nowrap xl:max-w-96">
            <div className="relative h-[64px] w-[64px] shrink-0">
              <img src="/catdog_400.png" alt="catdog_400" />
            </div>
            <div className="max-w-full pt-0.5 text-left">
              <div className="flex flex-nowrap items-center justify-start gap-1.5">
                <h1
                  className="truncate text-2xl font-bold tracking-tight dark:text-white"
                  title="CatDog"
                >
                  CatDog
                </h1>
                <div className="flex flex-nowrap items-center gap-1 ml-1">
                  <div className="flex cursor-pointer items-center hover:text-yellow-500 text-gray-400">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <span className="text-base font-medium text-yellow-500">
                    80
                  </span>
                </div>
              </div>
              <div className="mb-1 flex flex-nowrap items-center gap-1">
                <h2
                  className="truncate text-lg text-gray-500 dark:text-gray-400"
                  title="CATDOG"
                >
                  CATDOG
                </h2>
                <div className="flex items-center">
                  <img
                    src="/solana.svg"
                    alt="solana"
                    loading="lazy"
                    width={18}
                    height={18}
                  />
                  <p className="text-md font-normal dark:text-white">#309</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-nowrap items-center gap-3 sm:justify-end">
            <div className="mb-0 flex flex-nowrap items-center gap-3 sm:flex-row-reverse sm:justify-end">
              <div className="text-green-500 font-bold text-2xl sm:text-[28px] tracking-tighter  dark:text-white transition-colors duration-200 ease-in-out">
                $0.0004733
              </div>
              <div className="font-normal px-2 py-0.5 rounded-lg text-base tracking-normal bg-red-500 text-white">
                -12.75%
              </div>
            </div>
          </div>
          <div className="flex flex-nowrap items-center gap-3 sm:justify-end">
            <div className="tracking-thight flex text-base font-normal text-gray-500 dark:text-gray-400 sm:justify-end sm:text-right flex-row sm:flex-row-reverse items-center gap-1">
              <span className="font-semibold text-white text-nowrap">
                $4.94 M
              </span>
              <span>Vol</span>
            </div>
            <div className="tracking-thight flex text-base font-normal text-gray-500 dark:text-gray-400 sm:justify-end sm:text-right flex-row sm:flex-row-reverse items-center gap-1">
              <span className="font-semibold text-white text-nowrap">
                $4.94 M
              </span>
              <span>MC</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex flex-nowrap items-end justify-between gap-3">
          <div className="flex flex-wrap gap-2 shrink-0">
            <div className="text-white group flex items-center gap-[3px] rounded-full bg-[#1e203a] p-1.5 pl-2  dark:bg-dark-925 dark:text-white">
              <div className="flex items-center">
                <img
                  src="/solana.svg"
                  alt="solana"
                  loading="lazy"
                  width={18}
                  height={18}
                />
                <span className="rounded-full p-1 text-sm">CATTz...ggdB7</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-75 group-hover:scale-110 bg-dark-800">
                  <FontAwesomeIcon icon={faCopy} />
                </span>
              </div>
            </div>
            <div className="bg-[#1e203a] text-white group flex items-center gap-[3px] rounded-full  p-1.5 sm:pr-2  dark:bg-dark-925 dark:text-white">
              <div className=" bg-gray-100 flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-75 group-hover:scale-110">
                <img
                  src="/solana.svg"
                  alt="solana"
                  loading="lazy"
                  width={18}
                  height={18}
                />
              </div>
              <div className="rounded-full p-1 text-sm hidden sm:block">
                solscan.io
              </div>
            </div>
          </div>
          <div className="flex flex-nowrap items-center gap-3 shrink-0">
            <button className="select-none rounded-lg flex border border-indigo-gray-200 dark:border-dark-925 h-[36px] items-center place-content-center text-md font-normal text-gray-600 dark:text-indigo-400 hover:bg-gray-200 hover:text-gray-800 dark:hover:bg-dark-925 dark:hover:text-indigo-400 px-2 w-10">
              <FontAwesomeIcon icon={faFlag} />
            </button>
            <button className="select-none rounded-lg flex border border-indigo-gray-200 dark:border-dark-925 h-[36px] items-center place-content-center text-md font-normal text-gray-600 dark:text-indigo-400 hover:bg-gray-200 hover:text-gray-800 dark:hover:bg-dark-925 dark:hover:text-indigo-400 px-2 w-10">
              <FontAwesomeIcon icon={faShareNodes} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-2 justify-between">
        <div className="flex flex-wrap gap-2">
          <Link
            to="/"
            className="rak:text-white group flex items-center gap-[3px] rounded-full bg-blue-500 w-10 h-10 justify-center dark:bg-dark-925 dark:text-white"
          >
            <FontAwesomeIcon icon={faGlobe} size="lg" />
          </Link>
          <Link
            to="/"
            className="rak:text-white group flex items-center gap-[3px] rounded-full bg-black w-10 h-10 justify-center  border border-gray-500 dark:bg-dark-925 dark:text-white"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </Link>
          <Link
            to="/"
            className="rak:text-white group flex items-center gap-[3px] rounded-full bg-blue-300 w-10 h-10 justify-center dark:bg-dark-925 dark:text-white"
          >
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/"
            className="rak:text-white group flex items-center gap-[3px] rounded-full bg-black w-10 h-10 justify-center  border border-gray-500 dark:bg-dark-925 dark:text-white"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </Link>
          <Link
            to="/"
            className="rak:text-white group flex items-center gap-[3px] rounded-full bg-blue-300 w-10 h-10 justify-center dark:bg-dark-925 dark:text-white"
          >
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </Link>
        </div>
      </div>
      <img src="/chart.jpg" alt="ALT_IMG" />
      <Description />
    </div>
  );
};

export default Info;
