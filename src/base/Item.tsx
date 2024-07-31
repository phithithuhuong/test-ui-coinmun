import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface Props {
  i: number;
}
const ItemTable: React.FC<Props> = ({ i }) => {
  return (
    <tr className="hover:bg-[#22243f] rounded-lg border-b subpixel-antialiased border-gray-700/50 ">
      <td className="max-w-8 px-3 py-3 text-left font-medium">
        <FontAwesomeIcon
          icon={faStar}
          className=" text-gray-500 hover:text-yellow-500"
        />
      </td>
      <td className="sticky left-0 z-10 py-3 text-left">
        <div className="-ml-[1px] text-white">
          <Link to="/coins/pepespal" className="flex justify-between">
            <div className="px-3 flex items-center gap-3">
              <div className="relative mr-4 hidden h-5 w-[30px] shrink-0 md:block">
                <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-md bg-gray-300/25 px-1 py-0.5 text-xs font-normal  dark:bg-zinc-500/25 dark:text-zinc-300">
                  0{i + 1}
                </span>
              </div>
              <img src="/pepespal.png" alt="pepepal" className="w-9 h-9" />
              <div className="flex flex-col">
                <div className="relative min-w-0 max-w-[162px] overflow-hidden pr-1 font-semibold subpixel-antialiased md:truncate">
                  PSP
                </div>
                <div className="mt-0.5 max-w-24 truncate text-xs font-normal text-gray-400 md:max-w-36 dark:text-zinc-500">
                  PEPESPAL
                </div>
              </div>
            </div>
            <img
              src="/solana.svg"
              alt="solana"
              loading="lazy"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </td>
      <td className="px-3 py-3 text-right ">
        <div className="font-medium text-red-500 transition-colors duration-200 ease-in-out">
          $0.39839
        </div>
      </td>
      <td className="px-3 py-3 text-right ">
        <div className="font-medium text-red-500 transition-colors duration-200 ease-in-out">
          $0.39839
        </div>
      </td>
      <td className="px-3 py-3 text-right ">
        <div className="font-medium text-green-500 transition-colors duration-200 ease-in-out">
          $0.39839
        </div>
      </td>
      <td className="px-3 py-3 text-right ">
        <div className="font-medium text-white transition-colors duration-200 ease-in-out">
          $0.39839
        </div>
      </td>
      <td className="px-3 py-3 text-right ">
        <div className="font-medium text-white transition-colors duration-200 ease-in-out">
          $0.39839M
        </div>
      </td>
      <td className="px-3 py-3 text-right ">
        <div className="font-medium text-white transition-colors duration-200 ease-in-out">
          $0.39839M
        </div>
      </td>
      <td className="px-3 py-3 text-right ">
        <div className="font-medium text-white transition-colors duration-200 ease-in-out">
          $0.39839M
        </div>
      </td>
      <td className="text-right">
        <div className="px-3 py-3">
          <div className="flex flex-col items-end">
            <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              2.41k
            </div>
            <div className="text-xs font-medium text-white">15</div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ItemTable;
