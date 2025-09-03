import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  badge?: string;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
}

const Card: React.FC<CardProps> = ({
  title = "Card Title",
  subtitle,
  description = "This is a sample card description that provides more details about the card content.",
  image,
  imageAlt = "Card image",
  buttonText,
  buttonLink = "#",
  badge,
  className = "",
  variant = "default"
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'elevated':
        return 'shadow-xl hover:shadow-2xl';
      case 'outlined':
        return 'border-2 border-gray-200 hover:border-gray-300';
      default:
        return 'shadow-md hover:shadow-lg';
    }
  };

  return (
    <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 ${getVariantClasses()} ${className}`}>
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {badge}
          </span>
        </div>
      )}
      
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm text-blue-600 font-medium mb-3">
            {subtitle}
          </p>
        )}
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Button */}
        {buttonText && (
          <div className="mt-4">
            <a
              href={buttonLink}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              {buttonText}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
