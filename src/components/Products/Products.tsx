"use client";
import React, { useEffect, useState } from 'react';
import { fetchEntries, BuilderContent } from '@builder.io/sdk-react-nextjs';

interface Product {
  id: string;
  title: string;
  price: string;
  productImage?: string;
  category?: string;
  specification?: {
    desktop?: {
      aspectRatio?: string;
    };
  };
}

interface ProductsProps {
  title?: string;
  subtitle?: string;
  maxProducts?: number;
  category?: string;
  showPrice?: boolean;
  showCategory?: boolean;
  className?: string;
}

const Products: React.FC<ProductsProps> = ({
  title = "Our Products",
  subtitle = "Discover amazing products",
  maxProducts = 6,
  category,
  showPrice = true,
  showCategory = true,
  className = ""
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // Build query options
        const queryOptions: {
          apiKey: string;
          model: string;
          limit: number;
          query?: Record<string, string>;
        } = {
          apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
          model: 'products-data',
          limit: maxProducts,
        };

        // Add category filter if specified
        if (category) {
          queryOptions.query = {
            'data.category': category
          };
        }

        const fetchedProducts = await fetchEntries(queryOptions);
        
        if (fetchedProducts && Array.isArray(fetchedProducts)) {
          // Transform BuilderContent to Product format
          const transformedProducts: Product[] = fetchedProducts.map((item: BuilderContent) => ({
            id: item.id || '',
            title: item.data?.title || 'Product Title',
            price: item.data?.price || '0.00',
            productImage: item.data?.productImage,
            category: item.data?.category,
            specification: item.data?.specification,
          }));
          
          setProducts(transformedProducts);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [maxProducts, category]);

  if (loading) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-2 text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-red-600 mb-2">⚠️</div>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-gray-600">No products found.</p>
      </div>
    );
  }

  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-600">{subtitle}</p>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Product Image */}
              {product.productImage && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.productImage}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Product Info */}
              <div className="p-6">
                {/* Product Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>

                {/* Category */}
                {showCategory && product.category && (
                  <p className="text-sm text-blue-600 font-medium mb-2">
                    {product.category}
                  </p>
                )}

                {/* Specification */}
                {product.specification?.desktop?.aspectRatio && (
                  <p className="text-sm text-gray-500 mb-4">
                    Aspect Ratio: {product.specification.desktop.aspectRatio}
                  </p>
                )}

                {/* Price */}
                <div className="flex items-center justify-between">
                  {showPrice && (
                    <span className="text-2xl font-bold text-green-600">
                      ${product.price}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {products.length >= maxProducts && (
          <div className="text-center mt-8">
            <button className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200">
              Show More Products
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
