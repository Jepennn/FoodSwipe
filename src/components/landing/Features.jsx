import React from 'react';
import { Card } from '../ui/card';

export const Features = () => {
  const features = [
    {
      title: 'Smart Recommendations',
      description: 'Our AI learns your preferences and suggests meals you will love.',
      icon: '🍽️'
    },
    {
      title: 'Quick Matching',
      description: 'Find your perfect meal match with just a few swipes.',
      icon: '⚡'
    },
    {
      title: 'Collaborate with Friends',
      description: 'Create groups and find restaurants everyone will enjoy.',
      icon: '👥'
    },
    {
      title: 'Personalized Experience',
      description: 'The more you use FoodSwipe, the better it gets at knowing your taste.',
      icon: '🎯'
    }
  ];

  return (
    <div className="w-full py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Discover Amazing Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
