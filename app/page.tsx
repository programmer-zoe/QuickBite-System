import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-yellow-100 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="text-7xl mb-6 animate-bounce">
            🍔🍟🥤
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4 leading-tight">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Foodie Haven
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Delicious food delivered right to your door! 🚀
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/products"
          className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl px-12 py-5 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Browse Our Menu 🛒
        </Link>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Quick service to your doorstep</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Quality Food</h3>
            <p className="text-gray-600 text-sm">Fresh ingredients every time</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Great Prices</h3>
            <p className="text-gray-600 text-sm">Affordable meals for everyone</p>
          </div>
        </div>
      </div>
    </div>
  );
}