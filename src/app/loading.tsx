import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 z-50">
      <div className="relative w-16 h-16 rounded-full border-4 border-transparent border-t-transparent animate-spin bg-gradient-to-r from-teal-400 to-purple-500 mask-[radial-gradient(closest-side,transparent 65%,white)]">
        {/* Top Left Ear */}
        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
        {/* Top Right Ear */}
        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        {/* Bottom Left Ear */}
        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"></div>
        {/* Bottom Right Ear */}
        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Loading;
