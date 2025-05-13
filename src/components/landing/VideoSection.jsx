import React from 'react';

export const VideoSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 flex flex-col items-center">
      <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-xl relative">
        {/* Video thumbnail with play button */}
        <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden">
          <img 
            src="/video-thumbnail.jpg" 
            alt="App Demo Video" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/1280x720/667eea/ffffff?text=FoodSwipe+Demo';
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Video controls (simplified) */}
        <div className="bg-white p-4 flex items-center">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
