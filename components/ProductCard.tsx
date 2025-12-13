"use client";

import Link from "next/link";

interface ProductCardProps {
  product: any;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="bg-white rounded-lg shadow p-4 transition hover:shadow-md"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-contain mb-3"
      />

      <h2 className="font-medium text-gray-800">{product.title}</h2>
      <p className="text-blue-600 font-semibold mt-1">${product.price}</p>
    </Link>
  );
}