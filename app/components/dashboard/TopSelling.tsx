export default function TopSelling() {
  return (
    <div className="bg-white rounded-xl p-6">
      <h3 className="font-semibold mb-4">Top Selling Items</h3>
      <ul className="space-y-3">
        {["Family Feast", "Classic Burger", "Chicken Meal"].map((item) => (
          <li key={item} className="flex justify-between">
            <span>{item}</span>
            <span className="font-semibold text-orange-500">45</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
