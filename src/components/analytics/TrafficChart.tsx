"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TrafficChart() {
  const options: ApexOptions = {
    colors: ["#06b6d4", "#14b8a6"],
    chart: {
      type: "line",
      height: 320,
      toolbar: { show: false },
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
      zoom: { enabled: false },
    },
    stroke: { curve: "smooth", width: [3, 3] },
    markers: { size: 0, hover: { size: 5 } },
    dataLabels: { enabled: false },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "13px",
      markers: { strokeWidth: 0 },
      itemMargin: { horizontal: 10 },
    },
    xaxis: {
      categories: [
        "Apr 4",
        "Apr 5",
        "Apr 6",
        "Apr 7",
        "Apr 8",
        "Apr 9",
        "Apr 10",
        "Apr 11",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    yaxis: {
      labels: {
        style: { colors: "#6B7280", fontSize: "12px" },
        formatter: (val: number) => `${(val / 1000).toFixed(0)}K`,
      },
    },
    grid: { borderColor: "#E5E7EB", strokeDashArray: 4 },
    tooltip: {
      y: { formatter: (val: number) => val.toLocaleString() },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Traffic Over Time
          </h3>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
            Sessions vs page views, last 8 days
          </p>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">1.2M</span>
          <span className="text-theme-sm font-semibold text-emerald-600">+14.8%</span>
        </div>
      </div>
      <div className="mt-4 -ml-2">
        <ReactApexChart
          options={options}
          series={[
            { name: "Page Views", data: [142000, 156000, 148000, 172000, 188000, 164000, 196000, 218000] },
            { name: "Sessions", data: [38000, 42000, 41000, 47000, 52000, 45000, 54000, 61000] },
          ]}
          type="line"
          height={320}
        />
      </div>
    </div>
  );
}
