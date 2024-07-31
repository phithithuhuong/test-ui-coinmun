import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faPen,
  faPlus,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane, faStar } from "@fortawesome/free-regular-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Sidebar: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const dataSide = [
    {
      label: "Coin",
      icon: (
        <FontAwesomeIcon
          icon={faCoins}
          size="lg"
          color="rgba(179, 196, 238, .75)"
        />
      ),
      href: "/",
    },
    {
      label: "Watchlist",
      icon: (
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
          color="rgba(179, 196, 238, .75)"
        />
      ),
      href: "/",
    },
    {
      label: "Categories",
      icon: (
        <FontAwesomeIcon
          icon={faTableCellsLarge}
          size="lg"
          color="rgba(179, 196, 238, .75)"
        />
      ),
      href: "/",
    },
    {
      label: "Add icon",
      icon: (
        <FontAwesomeIcon
          icon={faPlus}
          size="lg"
          color="rgba(179, 196, 238, .75)"
        />
      ),
      href: "/",
    },
    {
      label: "Advertise",
      icon: (
        <FontAwesomeIcon
          icon={faPen}
          size="lg"
          color="rgba(179, 196, 238, .75)"
        />
      ),
      href: "/",
    },
    {
      label: "Follow us on X",
      icon: (
        <FontAwesomeIcon
          icon={faXTwitter}
          size="lg"
          color="rgba(179, 196, 238, .75)"
        />
      ),
      href: "/",
    },
    {
      label: "Join Telegram",
      icon: (
        <FontAwesomeIcon
          icon={faPaperPlane}
          size="lg"
          color="rgba(179, 196, 238, .75)"
        />
      ),
      href: "/",
    },
  ];

  return (
    <div
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className={classNames(
        "flex flex-col min-h-screen  border-r-[0.5px] border-gray-700 fixed p-5 left-0 bottom-0 z-50 bg-[#141527] transition-all duration-500 ease-in-out",
        isShow && "w-[250px] items-start"
      )}
    >
      <Link to="/" className="flex flex-row items-center gap-3">
        <img
          src="/dark-logo.svg"
          alt="Coinmum"
          loading="lazy"
          width={32}
          height={32}
        />
        <h1
          className={classNames(
            "text-2xl font-semibold flex-none",
            isShow ? "block" : "hidden"
          )}
        >
          CoinMun
        </h1>
      </Link>
      <ul className="pt-10 grid gap-y-0.5 w-full">
        {dataSide.map((item) => (
          <li className="pl-1.5 hover:bg-[#28293e] py-2.5 rounded-lg">
            <Link to={item.href} className="flex items-center">
              <span> {item.icon}</span>
              {isShow && (
                <span className="font-semibold ml-3 text-[14px]">
                  {item.label}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
