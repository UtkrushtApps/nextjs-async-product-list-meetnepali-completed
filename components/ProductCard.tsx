import React from "react";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div style={{ 
      border: "1px solid #e2e8f0", 
      borderRadius: 8, 
      padding: 20, 
      width: 260, 
      background: "#fff",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      transition: "box-shadow 0.2s ease-in-out",
      cursor: "pointer"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
    }}
    >
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ 
          width: "100%", 
          height: "200px",
          objectFit: "cover",
          borderRadius: 4,
          backgroundColor: "#f1f5f9"
        }} 
        onError={(e) => {
          // Fallback for missing images
          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%2364748b' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";
        }}
      />
      <h2 style={{ fontSize: 20, margin: "16px 0 4px 0", color: "#1e293b" }}>{product.name}</h2>
      <p style={{ margin: 0, color: '#64748b', lineHeight: 1.5 }}>{product.description}</p>
      <p style={{ fontWeight: 600, color: '#0ea5e9', margin: '14px 0 0 0', fontSize: 18 }}>₹{product.price.toLocaleString()}</p>
    </div>
  );
};

export default ProductCard;
