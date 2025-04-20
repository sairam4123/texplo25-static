import React from "react";
const ScrollDownIndicator: React.FC = () => {
    return (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex flex-col items-center gap-1 animate-bounce">
          <div className="w-5 h-5 border-b-2 border-r-2 border-white rotate-45"></div>
          <div className="w-5 h-5 border-b-2 border-r-2 border-white rotate-45 opacity-70 -translate-y-2"></div>
        </div>
      </div>
    );
  };
  
  export default ScrollDownIndicator;