import { ReactNode } from "react";

interface Props {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
}

export default function StatsCard({ title, value, subtitle, icon }: Props) {
  return (
    <div className="bg-orange-50 rounded-xl p-6 flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
        {subtitle && (
          <p className="text-sm text-green-600 mt-1">{subtitle}</p>
        )}
      </div>
      <div className="bg-orange-200 p-3 rounded-full">
        {icon}
      </div>
    </div>
  );
}
