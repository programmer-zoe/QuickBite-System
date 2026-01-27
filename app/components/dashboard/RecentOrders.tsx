export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl p-6">
      <h3 className="font-semibold mb-4">Recent Orders</h3>

      {[1151, 1014, 1050].map((id) => (
        <div
          key={id}
          className="flex justify-between items-center bg-gray-50 rounded-lg p-4 mb-3"
        >
          <div>
            <p className="font-semibold">#{id}</p>
            <p className="text-sm text-gray-500">2 items</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-orange-500">$9.71</p>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
              completed
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
