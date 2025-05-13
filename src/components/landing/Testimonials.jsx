import React from 'react';
import { Card } from '../ui/card';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah J.',
      role: 'Food Enthusiast',
      quote: 'FoodSwipe has completely changed how I discover new restaurants. The AI recommendations are spot on!',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'Michael T.',
      role: 'Busy Professional',
      quote: 'No more arguing about where to eat with colleagues. We just use the group feature and everyone is happy.',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      name: 'Emma R.',
      role: 'Food Blogger',
      quote: 'As someone who tries new restaurants weekly, FoodSwipe has become my go-to app for finding hidden gems.',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ];

  return (
    <div className="w-full py-16 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What Our Users Say
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 flex flex-col items-center text-center">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=random`;
              }}
            />
            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
