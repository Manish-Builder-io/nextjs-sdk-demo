import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Welcome to Our Platform",
  subtitle = "Discover Amazing Features",
  description = "Experience the next generation of digital solutions with our cutting-edge platform designed to transform your business.",
  buttonText = "Get Started",
  buttonLink = "#",
  backgroundImage,
  className = ""
}) => {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Background */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg text-blue-600 font-semibold mb-4">
              {subtitle}
            </p>
          )}
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          
          {/* Description */}
          {description && (
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
          )}
          
          {/* CTA Button */}
          {buttonText && (
            <div className="flex justify-center">
              <a
                href={buttonLink}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
              >
                {buttonText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
