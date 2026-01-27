"use client";

interface Product {
  id: number;
  name: string;
  price: number;
  desc: string;
}

interface ProductCardProps {
  product: Product;
  onAdd?: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow cursor-pointer flex flex-col justify-between"
         onClick={() => onAdd?.(product)}>
      <div className="text-3xl mb-2">🍔</div>
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.desc}</p>
      <p className="font-bold text-orange-500 mt-2">${product.price.toFixed(2)}</p>
    </div>
  );
}
