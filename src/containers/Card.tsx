import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardCoin = () => {
  return (
    <div className="flex flex-col pt-5">
      <h2 className="text-xl font-bold tracking-tight text-white mb-2">
        Promoted Coins
      </h2>
      <div className=" grid grid-cols-6 gap-3">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default CardCoin;

const Item = () => {
  return (
    <div className="w-full cursor-pointer rounded-xl border border-gray-700/50 p-3 hover:bg-[#1e2032] ">
      <div className="flex flex-col items-center gap-1">
        <div className="mb-3 flex w-full flex-wrap items-start justify-between">
          <img src="/catdog_400.png" width={32} height={32} alt="" />
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            color="rgba(179, 196, 238, .75)"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex w-full flex-nowrap gap-1 overflow-hidden items-center">
          <div className="truncate text-sm font-medium dark:text-white">
            LandWolf
          </div>
          <div className="truncate text-sm font-medium text-gray-400">WOLF</div>
        </div>
      </div>
      <div className="flex w-full flex-nowrap items-center justify-between gap-2 text-xs">
        <div className="font-medium text-red-500">-1.10%</div>
        <div className="font-medium text-white transition-colors duration-200 ease-in-out">
          $0.99922
        </div>
      </div>
    </div>
  );
};
