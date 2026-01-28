import OrderCard from "@/components/orders/OrderCard";

type Order = {
  id: string;
  type: string;
  time: string;
  items: string[];
  total: number;
  status: "Completed" | "Cancelled";
};

const orders: Order[] = [
  {
    id: "#1151",
    type: "Take-Out",
    time: "08:14",
    items: ["1x Classic Burger"],
    total: 6.47,
    status: "Cancelled",
  },
  {
    id: "#1038",
    type: "Take-Out",
    time: "13:39",
    items: ["3x Sundae", "2x Chicken Sandwich"],
    total: 21.01,
    status: "Completed",
  },
];

export default function OrdersGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
