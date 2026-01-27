import StatsCard from "@/components/dashboard/StatsCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import OrderTypesChart from "@/components/dashboard/OrderTypesChart";
import TopSelling from "@/components/dashboard/TopSelling";
import RecentOrders from "@/components/dashboard/RecentOrders";

import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Overview of your store performance</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <StatsCard title="Today's Revenue" value="$0.00" subtitle="0.0% vs yesterday" icon={<DollarSign />} />
        <StatsCard title="Today's Orders" value="0" icon={<ShoppingCart />} />
        <StatsCard title="Avg Order Value" value="$0.00" icon={<TrendingUp />} />
        <StatsCard title="Total Products" value="29" icon={<Users />} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <RevenueChart />
        </div>
        <OrderTypesChart />
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-2 gap-6">
        <TopSelling />
        <RecentOrders />
      </div>
    </div>
  );
}
