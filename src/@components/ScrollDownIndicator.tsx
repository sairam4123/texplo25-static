import clsx from "clsx";
import React, { useEffect, useState } from "react";
const ScrollDownIndicator: React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    console.log(isVisible)
    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("scrollable-section");
            if (!element) return;

          const isBottom =
            element.scrollTop + element.clientHeight >= element.scrollHeight - 100;
            setIsVisible(!isBottom);
            console.log(isBottom);
        };
        const element = document.getElementById("scrollable-section");
        if (!element) return;

        // handleScroll(); // Check visibility on mount
        element.addEventListener("scroll", handleScroll, false);
        return () => element.removeEventListener("scroll", handleScroll);
      }, []);
      

    return (
      <div className={clsx("absolute bottom-21 left-1/2 transform -translate-x-1/2 z-50", isVisible ? "opacity-100" : "opacity-0 transition-opacity duration-500")}>
        <div className="flex flex-col items-center gap-1 animate-bounce">
          <div className="w-5 h-5 border-b-2 border-r-2 border-white rotate-45"></div>
          <div className="w-5 h-5 border-b-2 border-r-2 border-white rotate-45 opacity-70 -translate-y-2"></div>
        </div>
      </div>
    );
  };
  
  export default ScrollDownIndicator;