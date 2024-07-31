import TotalAmount from "./TotalAmount";
import CardCoin from "./Card";
import Info from "./Info";

interface Props {}

const CoinDetail: React.FC<Props> = () => {
  return (
    <div className="relative p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Info />
        <div className="">
          <TotalAmount />
          <div className=" mt-20 w-full space-y-2 rounded-xl border  subpixel-antialiased border-gray-700/50 p-3 dark:border-dark-925">
            <div className=" h-[500px] overflow-x-auto">
              <h2 className="py-3">Post Form @1332321</h2>
              <img src="/eck.png" alt="eck" />
            </div>
          </div>
        </div>
      </div>
      <CardCoin />
    </div>
  );
};

export default CoinDetail;
