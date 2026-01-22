"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";

type Product = { id: number; name: string; price: number };

export default function ProductsPage() {
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: "Burger", price: 5 },
    { id: 2, name: "Fries", price: 3 },
    { id: 3, name: "Soda", price: 2 },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            🍔 Our Menu
          </h1>
          <p className="text-gray-600">Delicious food at great prices!</p>
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Choose Your Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-orange-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h2>
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {cart.length} {cart.length === 1 ? "item" : "items"}
            </span>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-2">
                Add some delicious items!
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-3 mb-6">
                {cart.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-orange-50 p-4 rounded-lg hover:bg-orange-100 transition-colors"
                  >
                    <span className="font-medium text-gray-700">
                      {item.name}
                    </span>
                    <span className="text-orange-600 font-semibold">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">
                    Total:
                  </span>
                  <span className="text-3xl font-bold text-orange-600">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg">
                  Checkout Now
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}