type Product = {
  id: number;
  name: string;
  price: number;
};

interface Props {
  product: Product;
  addToCart: (product: Product) => void;
}

export default function ProductCard({ product, addToCart }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
      {/* Product Icon/Image placeholder */}
      <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-lg h-40 mb-4 flex items-center justify-center">
        <span className="text-6xl">
          {product.name === "Burger" && "🍔"}
          {product.name === "Fries" && "🍟"}
          {product.name === "Soda" && "🥤"}
        </span>
      </div>

      {/* Product Info */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-orange-600">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm hover:shadow-md active:scale-95 transform"
      >
        Add to Cart
      </button>
    </div>
  );
}