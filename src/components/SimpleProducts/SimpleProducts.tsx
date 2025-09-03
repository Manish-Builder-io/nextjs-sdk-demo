"use client";
import React from 'react';
import { BuilderContent } from '@builder.io/sdk-react-nextjs';

interface SimpleProductsProps {
  products: BuilderContent[];
  className?: string;
}

const SimpleProducts: React.FC<SimpleProductsProps> = ({ 
  products, 
  className = "" 
}) => {
  if (!products || products.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-gray-600">No products found.</p>
      </div>
    );
  }

  return (
    <div className={`py-8 px-4 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Products from Builder.io
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => {
          if (!product.data) return null;
          
          return (
            <div key={product.id || 'unknown'} className="bg-white rounded-lg shadow-md p-4 border">
              {/* Product Image */}
              {product.data.productImage && (
                <div className="mb-4">
                  <img
                    src={product.data.productImage}
                    alt={product.data.title || 'Product'}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
              )}
              
              {/* Product Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.data.title || 'Untitled Product'}
                </h3>
                
                {product.data.category && (
                  <p className="text-sm text-blue-600 mb-2">
                    Category: {product.data.category}
                  </p>
                )}
                
                {product.data.specification?.desktop?.aspectRatio && (
                  <p className="text-sm text-gray-600 mb-2">
                    Aspect Ratio: {product.data.specification.desktop.aspectRatio}
                  </p>
                )}
                
                <p className="text-xl font-bold text-green-600">
                  ${product.data.price || '0.00'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Debug Info */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg max-w-6xl mx-auto">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Debug Info:</h3>
        <p className="text-xs text-gray-600">
          Total Products: {products.length}
        </p>
        <p className="text-xs text-gray-600">
          First Product ID: {products[0]?.id || 'None'}
        </p>
      </div>
    </div>
  );
};

export default SimpleProducts;
