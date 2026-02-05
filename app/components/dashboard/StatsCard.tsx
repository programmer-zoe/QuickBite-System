import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: ReactNode;
  trend?: string; // e.g. "0.0% vs yesterday"
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  trend,
}: StatsCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-orange-100/40 p-6">
      {/* Icon */}
      <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-200/70 text-orange-600">
        {icon}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-600">{title}</p>

        <p className="text-2xl font-bold text-gray-900">{value}</p>

        {trend ? (
          <p className="flex items-center gap-1 text-sm font-medium text-green-600">
            ↑ {trend}
          </p>
        ) : (
          subtitle && (
            <p className="text-sm text-gray-600">{subtitle}</p>
          )
        )}
      </div>
    </div>
  );
}
