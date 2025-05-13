import React from 'react';
import { Button } from '../ui/button';

export const Hero = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between py-12 px-6 md:px-12 gap-8">
      <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-primary">
          Unlocking<br />
          AI Wonders
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Discover the power of AI with FoodSwipe. Find your perfect meal match with just a swipe.
        </p>
        <Button className="bg-primary text-white px-8 py-6 text-lg">
          Get Started
        </Button>
      </div>
      
      <div className="w-full lg:w-1/2 flex justify-center relative">
        <div className="relative w-[280px] h-[560px] border-8 border-black rounded-[48px] overflow-hidden shadow-xl">
          <div className="absolute top-0 w-full h-6 bg-black"></div>
          <img 
            src="/app-screenshot.png" 
            alt="FoodSwipe App" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/264x536/667eea/ffffff?text=FoodSwipe+App';
            }}
          />
        </div>
        <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-3xl opacity-50"></div>
      </div>
    </div>
  );
};
