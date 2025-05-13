import React from 'react';

// Import landing page components
import { Navbar } from '../components/landing/Navbar';
import { Hero } from '../components/landing/Hero';
import { Features } from '../components/landing/Features';
import { Testimonials } from '../components/landing/Testimonials';
import { CallToAction } from '../components/landing/CallToAction';
import { VideoSection } from '../components/landing/VideoSection';
import { Footer } from '../components/landing/Footer';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <Features />
        {/* <VideoSection /> */}
        {/* <Testimonials />
        <CallToAction /> */}
      </div>
      <Footer />
    </div>
  );
};