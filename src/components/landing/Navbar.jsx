import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-primary">FoodSwipe</h1>
      </div>
      <Button className="bg-black text-white hover:bg-gray-800">
        Login
      </Button>
    </nav>
  );
};
