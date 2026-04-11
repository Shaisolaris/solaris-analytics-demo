import React from "react";

type Source = {
  name: string;
  visits: string;
  share: number;
  trend: string;
  trendUp: boolean;
};

const sources: Source[] = [
  { name: "Google Search", visits: "142.3K", share: 42, trend: "+8.4%", trendUp: true },
  { name: "Direct", visits: "78.6K", share: 23, trend: "+2.1%", trendUp: true },
  { name: "Twitter / X", visits: "48.2K", share: 14, trend: "+18.6%", trendUp: true },
  { name: "Reddit", visits: "31.4K", share: 9, trend: "+5.7%", trendUp: true },
  { name: "LinkedIn", visits: "22.8K", share: 7, trend: "-1.2%", trendUp: false },
  { name: "Hacker News", visits: "16.9K", share: 5, trend: "+24.3%", trendUp: true },
];

export default function ReferralSources() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Referral Sources
        </h3>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
          Where your sessions came from this week
        </p>
      </div>
      <ul className="mt-5 flex flex-col gap-4">
        {sources.map((s) => (
          <li key={s.name}>
            <div className="flex items-center justify-between text-theme-sm">
              <span className="font-medium text-gray-800 dark:text-white/90">
                {s.name}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {s.visits}
                </span>
                <span
                  className={`text-theme-xs font-medium ${
                    s.trendUp ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {s.trend}
                </span>
              </div>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-teal-500"
                style={{ width: `${s.share * 2.2}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
