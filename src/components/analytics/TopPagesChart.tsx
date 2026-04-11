"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TopPagesChart() {
  const data = [
    { page: "/blog/scaling-startups", views: 184320 },
    { page: "/pricing", views: 142100 },
    { page: "/", views: 128450 },
    { page: "/changelog", views: 96780 },
    { page: "/docs/getting-started", views: 84210 },
    { page: "/integrations", views: 71540 },
  ];

  const options: ApexOptions = {
    colors: ["#06b6d4"],
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: false },
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
    },
    plotOptions: {
      bar: { horizontal: true, borderRadius: 6, barHeight: "60%" },
    },
    dataLabels: {
      enabled: true,
      offsetX: 30,
      style: { fontSize: "12px", fontWeight: 600, colors: ["#0891b2"] },
      formatter: (val: number) =>
        `${(val / 1000).toFixed(1)}K`,
    },
    xaxis: {
      categories: data.map((d) => d.page),
      labels: { style: { colors: "#6B7280", fontSize: "11px" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    grid: { borderColor: "#E5E7EB", strokeDashArray: 4, yaxis: { lines: { show: false } } },
    tooltip: {
      y: { formatter: (val: number) => `${val.toLocaleString()} views` },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-3 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Top Pages
        </h3>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
          Highest-traffic pages this week
        </p>
      </div>
      <div className="mt-4 -ml-2">
        <ReactApexChart
          options={options}
          series={[{ name: "Views", data: data.map((d) => d.views) }]}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
}
