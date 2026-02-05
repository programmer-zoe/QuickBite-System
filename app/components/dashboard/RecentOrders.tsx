const orders = [
  { id: 1001, date: "Jan 30", time: "10:03", items: 4, total: 44.76, status: "completed" },
  { id: 1022, date: "Jan 30", time: "10:03", items: 4, total: 72.3, status: "completed" },
  { id: 1044, date: "Jan 30", time: "10:03", items: 2, total: 12.93, status: "completed" },
  { id: 1093, date: "Jan 30", time: "10:03", items: 4, total: 44.78, status: "completed" },
  { id: 1102, date: "Jan 30", time: "10:03", items: 3, total: 21.85, status: "completed" },
];

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h3 className="text-base font-semibold text-gray-900 mb-5">Recent Orders</h3>

      <div className="space-y-4">
        {orders.map((o) => (
          <div
            key={o.id}
            className="flex items-center justify-between rounded-xl bg-gray-50 px-5 py-4"
          >
            <div>
              <p className="text-sm font-semibold text-gray-900">#{o.id}</p>
              <p className="mt-1 text-xs text-gray-500">
                {o.date}, {o.time} • {o.items} items
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-orange-500">
                ${o.total.toFixed(2)}
              </p>
              <span className="mt-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                {o.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
