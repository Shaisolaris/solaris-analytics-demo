import type { Metadata } from "next";
import React from "react";
import { AnalyticsMetrics } from "@/components/analytics/AnalyticsMetrics";
import TrafficChart from "@/components/analytics/TrafficChart";
import TopPagesChart from "@/components/analytics/TopPagesChart";
import DeviceChart from "@/components/analytics/DeviceChart";
import ReferralSources from "@/components/analytics/ReferralSources";
import TopPagesTable from "@/components/analytics/TopPagesTable";

export const metadata: Metadata = {
  title: "Solaris Analytics — Product & Growth Insights",
  description:
    "Self-serve analytics workspace for product and growth teams.",
};

export default function AnalyticsDashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-8">
        <AnalyticsMetrics />
        <TrafficChart />
        <TopPagesChart />
      </div>

      <div className="col-span-12 space-y-6 xl:col-span-4">
        <DeviceChart />
        <ReferralSources />
      </div>

      <div className="col-span-12">
        <TopPagesTable />
      </div>
    </div>
  );
}
