import React from 'react';
import { Button } from '../ui/button';

export const CallToAction = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-primary/10 rounded-lg mx-auto max-w-6xl my-12">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Dining Experience?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Join thousands of food lovers who have already discovered their perfect meal matches with FoodSwipe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-primary text-white px-8 py-6 text-lg">
            Get Started Free
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};
