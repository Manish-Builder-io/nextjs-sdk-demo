import React from 'react';

interface TestComponentProps {
  text?: string;
}

const TestComponent: React.FC<TestComponentProps> = ({ 
  text = "Test Component Working!" 
}) => {
  return (
    <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
      <h3 className="text-green-800 font-semibold">✅ {text}</h3>
      <p className="text-green-600 text-sm">This component is successfully registered with Builder.io</p>
    </div>
  );
};

export default TestComponent;
