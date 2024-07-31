const TotalAmount = () => {
  return (
    <div>
      <div className=" self-start grid w-full  gap-2.5 rounded-xl border border-gray-700/50 p-3 dark:border-dark-925 grid-cols-2">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold tracking-tighter dark:text-white">
            376
          </div>
          <div className="flex flex-nowrap items-center gap-1 text-sm font-medium text-gray-500">
            Votes
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold tracking-tighter dark:text-white">
            32
          </div>
          <div className="flex flex-nowrap items-center gap-1 text-sm font-medium text-gray-500">
            24H
          </div>
        </div>
        <div className="col-span-full flex flex-col items-end justify-center">
          <button className="select-none rounded-lg flex bg-indigo-700 h-[46px] items-center place-content-center text-md font-normal text-white hover:bg-indigo-600 justify-center w-full">
            🚀 Votes of CATDOG
          </button>
        </div>
      </div>

      <div className="mt-20 col-span-1 flex flex-col gap-6">
        <div className="w-full space-y-2 rounded-xl border  subpixel-antialiased border-gray-700/50 p-3 dark:border-dark-925">
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md bg-[#1e203a] p-3 dark:bg-dark-925/75">
              <div className="tracking-thight flex text-base font-normal text-gray-500 dark:text-gray-400 justify-center text-center flex-col">
                <span className="font-semibold text-white text-nowrap">
                  $46.90 M
                </span>
                <span className="text-sm">Mark Cap</span>
              </div>
            </div>
            <div className="rounded-md bg-[#1e203a] p-3 dark:bg-dark-925/75">
              <div className="tracking-thight flex text-base font-normal text-gray-500 dark:text-gray-400 justify-center text-center flex-col">
                <span className="font-semibold text-white text-nowrap">
                  $46.90 M
                </span>
                <span className="text-sm">Mark Cap</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md bg-[#1e203a] p-3 dark:bg-dark-925/75">
              <div className="tracking-thight flex text-base font-normal text-gray-500 dark:text-gray-400 justify-center text-center flex-col">
                <span className="font-semibold text-white text-nowrap">
                  $46.90 M
                </span>
                <span className="text-sm">Mark Cap</span>
              </div>
            </div>
            <div className="rounded-md bg-[#1e203a] p-3 dark:bg-dark-925/75">
              <div className="tracking-thight flex text-base font-normal text-gray-500 dark:text-gray-400 justify-center text-center flex-col">
                <span className="font-semibold text-white text-nowrap">
                  $46.90 M
                </span>
                <span className="text-sm">Mark Cap</span>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-[#1e203a] p-3 dark:bg-dark-925/75">
            <div className="tracking-thight flex text-base font-normal text-gray-500 dark:text-gray-400 justify-center text-center flex-col">
              <span className="font-semibold text-white text-nowrap">
                $46.90 M
              </span>
              <span className="text-sm">Mark Cap</span>
            </div>
          </div>
          <div className="flex flex-col divide-y dark:divide-dark-925">
            <div className="flex w-full flex-col justify-end text-right py-2">
              <div className=" flex flex-nowrap justify-between py-1.5 text-base font-normal text-gray-500">
                <span className="text-sm">Total Supply</span>
                <span className="font-semibold text-white">100B</span>
              </div>
            </div>
            <div className="flex w-full flex-col justify-end text-right py-1 border-gray-700/50">
              <div className="flex flex-nowrap justify-between py-1.5 text-base font-normal text-gray-500">
                <span className="text-sm">Total Supply</span>
                <span className="font-semibold text-white">100B</span>
              </div>
            </div>
            <div className="flex w-full flex-col justify-end text-right py-1.5 border-gray-700/50">
              <div className="flex flex-nowrap justify-between py-1 text-base font-normal text-gray-500">
                <span className="text-sm">Total Supply</span>
                <span className="font-semibold text-white">100B</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalAmount;
