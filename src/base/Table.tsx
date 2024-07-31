import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import ItemTable from "./Item";

interface Props {}
const TableCustom: React.FC<Props> = () => {
  const th = (label: string) => {
    return (
      <th className="text-white px-0.5 py-1.5 text-right font-medium">
        <span className="select-none rounded-lg px-2.5 py-1.5 cursor-pointer hover:bg-[#22243f]  ml-[17px]">
          {label}
        </span>
      </th>
    );
  };
  return (
    <div className="mx-auto max-w-8xl px-4 lg:px-8 py-6 text-white">
      <div className="space-y-4 mb-8 mt-4">
        <p className="text-2xl font-bold tracking-tight mb-4">Promoted Coins</p>
        <div className=" scrollable-content main-container no-left-gradient no-right-gradient">
          <table className="custom-table w-full min-w-max table-auto">
            <thead className="bg-gray-white text-sm text-gray-900 dark:subpixel-antialiased  border-b subpixel-antialiased border-gray-700/50">
              <tr>
                <th className="max-w-8 px-3 py-1 text-left font-medium">
                  <FontAwesomeIcon icon={faStar} color="#fff" />
                </th>
                <th className="sticky left-0 z-10 py-3 text-left font-medium">
                  <div className="-ml-[1px]  px-3 py-2 dark:bg-dark-950">
                    <span className=" text-white select-none rounded-lg px-2.5 py-1.5 cursor-pointer hover:bg-[#22243f] mr-[17px]">
                      <span>#</span> <span className="ml-8">Asset </span>
                    </span>
                  </div>
                </th>
                {th("Price")}
                {th("%1h")}
                {th("%6h")}
                {th("%24h")}
                {th("Market Cap")}
                {th("PDV")}
                {th("24H Volume")}
                {th("Votes")}
              </tr>
            </thead>
            <tbody className="text-sm font-light text-gray-900 dark:text-white">
              {Array.from({ length: 30 }, (_, i) => (
                <ItemTable i={i} key={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableCustom;
