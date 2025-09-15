import React from "react";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: 20, width: 260, background: "#fff" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: 4 }} />
      <h2 style={{ fontSize: 20, margin: "16px 0 4px 0" }}>{product.name}</h2>
      <p style={{ margin: 0, color: '#64748b' }}>{product.description}</p>
      <p style={{ fontWeight: 600, color: '#0ea5e9', margin: '14px 0 0 0' }}>₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
