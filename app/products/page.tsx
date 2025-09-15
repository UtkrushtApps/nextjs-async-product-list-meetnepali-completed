"use client";
import React, { useEffect, useState } from "react";
import { Product, AnalyticsPayload } from "../../types/product";
import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Function to fetch products from the JSON file
  const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('/products.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    return response.json();
  };

  // Function to send analytics data in the background
  const sendAnalytics = async (payload: AnalyticsPayload): Promise<void> => {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      // Silent success - no need to handle response
    } catch (error) {
      // Silent error - analytics should not impact user experience
      console.warn('Analytics call failed:', error);
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");
        
        // Fetch products
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        
        // Fire-and-forget analytics call after successful product loading
        const analyticsPayload: AnalyticsPayload = {
          event: 'products_page_visit',
          timestamp: new Date().toISOString(),
          page: '/products'
        };
        
        // Don't await this - let it run in background
        sendAnalytics(analyticsPayload);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: 16 }}>
      <h1>Product Showcase</h1>
      {loading && (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <p>Loading products...</p>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #0ea5e9',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
        </div>
      )}
      {error && (
        <div style={{ 
          color: 'red', 
          background: '#fee2e2', 
          padding: '16px', 
          borderRadius: '8px',
          border: '1px solid #fecaca',
          marginBottom: '20px'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      {!loading && !error && products.length === 0 && (
        <p style={{ textAlign: 'center', color: '#64748b' }}>No products found.</p>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}
