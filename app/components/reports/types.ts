export type ReportRange = "Last 7 Days" | "Last 30 Days" | "This Month";

export type ReportsTab = "Sales Trends" | "Product Performance" | "Time Analysis";

export type RevenuePoint = { label: string; value: number };

export type PaymentSlice = { label: string; value: number };

export type ReportSummary = {
  totalRevenue: number;
  totalOrders: number;
  avgOrderValue: number;
  totalTax: number;
};

export function money(n: number) {
  return `$${n.toFixed(2)}`;
}
