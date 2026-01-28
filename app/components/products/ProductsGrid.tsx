import ProductCard from "./ProductCard";

type Product = {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  icon: string;
  available: boolean;
};

export default function ProductsGrid({
  products,
  onEdit,
  onDelete,
}: {
  products: Product[];
  onEdit: (p: Product) => void;
  onDelete: (p: Product) => void;
}) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onEdit={() => onEdit(p)}
          onDelete={() => onDelete(p)}
        />
      ))}
    </div>
  );
}
