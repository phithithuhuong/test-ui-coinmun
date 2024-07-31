import React from "react";

const Banner: React.FC = () => {
  const dataOnTop = [
    { title: "🕒 Top today", href: "/top_today" },
    { title: "🏆 Top all time", href: "/top_all_time" },
    { title: "⌛️ Presales", href: "/presales" },
    { title: "🎉 New coins", href: "/new_coins" },
    { title: "🎉 Top 100 coins", href: "/top_100_coins" },
    { title: "📈 Trending coins", href: "/trending_coins" },
    { title: "🎉 Top 1000 coins", href: "/top_1000_coins" },
  ];
  return (
    <div className="w-full">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="hide-scrollbar scrollable-content-no-padding">
          <div className="flex h-full w-full items-center justify-start gap-2 py-2">
            {dataOnTop.map((item) => (
              <a
                key={Math.random()}
                href={item.href}
                className="font-semibold flex h-9 shrink-0 select-none items-center text-nowrap rounded-lg  pl-4 pr-5 text-sm  dark:hover:bg-dark-900/50 hover:bg-[#22243f] bg-[#1e203a] dark:bg-dark-900/50"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto max-w-8xl px-4 lg:px-8">
          <div className="flex w-full grid-cols-1 flex-col justify-center gap-4 lg:flex-row mt-6">
            <div className="group relative w-full cursor-pointer lg:w-1/2">
              <a href="https://thereallandwolf.com/" target="_blank">
                <img src="/banner-fgqeK_d.png" alt="fgqeK_d" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
