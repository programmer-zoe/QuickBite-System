import StatsCard from "@/components/dashboard/StatsCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import OrderTypesChart from "@/components/dashboard/OrderTypesChart";
import TopSelling from "@/components/dashboard/TopSelling";
import RecentOrders from "@/components/dashboard/RecentOrders";

import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-500">Overview of your store performance</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            title="Today's Revenue"
            value="$0.00"
            trend="0.0% vs yesterday"
            icon={<DollarSign className="h-5 w-5" />}
          />

          <StatsCard
            title="Today's Orders"
            value="0"
            subtitle="orders processed"
            icon={<ShoppingCart className="h-5 w-5" />}
          />

          <StatsCard
            title="Avg Order Value"
            value="$0.00"
            subtitle="per transaction"
            icon={<TrendingUp className="h-5 w-5" />}
          />

          <StatsCard
            title="Total Products"
            value="29"
            subtitle="24 items, 5 combos"
            icon={<Users className="h-5 w-5" />}
          />

        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1">
            <OrderTypesChart />
          </div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <TopSelling />
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}
