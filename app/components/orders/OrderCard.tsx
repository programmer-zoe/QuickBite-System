interface Order {
  id: string;
  type: string;
  time: string;
  items: string[];
  total: number;
  status: "Completed" | "Cancelled";
}

export default function OrderCard({ order }: { order: Order }) {
  return (
    <div className="bg-white rounded-2xl p-5 border shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold">{order.id}</h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            order.status === "Completed"
              ? "bg-gray-100 text-gray-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {order.status}
        </span>
      </div>

      {/* Meta */}
      <p className="text-sm text-gray-500 mb-2">
        {order.type} · {order.time}
      </p>

      {/* Items */}
      <div className="space-y-1 text-sm mb-4">
        {order.items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t pt-3 flex justify-between items-center">
        <span className="text-sm text-gray-500">Total</span>
        <span className="font-semibold text-orange-500">
          ${order.total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
