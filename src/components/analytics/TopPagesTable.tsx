import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Page {
  id: number;
  path: string;
  title: string;
  views: string;
  bounceRate: string;
  avgTime: string;
  trend: string;
  trendUp: boolean;
}

const pages: Page[] = [
  {
    id: 1,
    path: "/blog/scaling-startups",
    title: "How we scaled to 1M users",
    views: "184,320",
    bounceRate: "28%",
    avgTime: "4:18",
    trend: "+22.4%",
    trendUp: true,
  },
  {
    id: 2,
    path: "/pricing",
    title: "Pricing — plans and limits",
    views: "142,100",
    bounceRate: "41%",
    avgTime: "2:34",
    trend: "+8.7%",
    trendUp: true,
  },
  {
    id: 3,
    path: "/",
    title: "Home — product overview",
    views: "128,450",
    bounceRate: "52%",
    avgTime: "1:48",
    trend: "+5.2%",
    trendUp: true,
  },
  {
    id: 4,
    path: "/changelog",
    title: "Changelog & release notes",
    views: "96,780",
    bounceRate: "33%",
    avgTime: "3:12",
    trend: "+14.6%",
    trendUp: true,
  },
  {
    id: 5,
    path: "/docs/getting-started",
    title: "Getting started guide",
    views: "84,210",
    bounceRate: "24%",
    avgTime: "5:42",
    trend: "+9.1%",
    trendUp: true,
  },
  {
    id: 6,
    path: "/integrations",
    title: "Integrations directory",
    views: "71,540",
    bounceRate: "38%",
    avgTime: "2:54",
    trend: "-3.4%",
    trendUp: false,
  },
];

export default function TopPagesTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Top Pages
          </h3>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
            Most-visited pages, last 7 days
          </p>
        </div>
        <button className="inline-flex items-center gap-2 self-start rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
          Open behavior report
        </button>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Page</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Views</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Bounce</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Avg Time</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Trend</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {pages.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="py-3">
                  <div>
                    <p className="font-mono text-theme-sm font-medium text-cyan-700 dark:text-cyan-400">
                      {p.path}
                    </p>
                    <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                      {p.title}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-3 font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                  {p.views}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {p.bounceRate}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {p.avgTime}
                </TableCell>
                <TableCell className="py-3">
                  <span
                    className={`inline-flex items-center gap-1 text-theme-xs font-semibold ${
                      p.trendUp ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {p.trendUp ? "↑" : "↓"} {p.trend}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
