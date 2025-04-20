import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

export interface ImageCarouselProps {
  images: string[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  showThumbnails?: boolean;
  infiniteLoop?: boolean;
  transitionDuration?: number;
  showProgressBar?: boolean;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  className = "w-full h-2/3 lg:h-1/2",
  autoPlay = true,
  autoPlayInterval = 3000,
  showArrows = false,
  showDots = true,
  showThumbnails = false,
  showProgressBar = true,
  infiniteLoop = true,
  transitionDuration = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const totalImages = images.length;

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // If infinite loop, cycle back to zero
      if (prevIndex === totalImages - 1) {
        return infiniteLoop ? 0 : prevIndex;
      }
      return prevIndex + 1;
    });
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return infiniteLoop ? totalImages - 1 : prevIndex;
      }
      return prevIndex - 1;
    });
  };

  // Auto Play logic: set up interval if autoPlay is enabled.
  useEffect(() => {
    if (autoPlay && !isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, autoPlayInterval, currentIndex, isPaused]); // eslint-disable-line react-hooks/exhaustive-deps

  // Render carousel slides
  return (
    <div className={clsx("relative overflow-hidden", className)}>
      <div
        className="flex transition-transform ease-out"
        style={{
          width: `${totalImages * 100}%`,
          transform: `translateX(-${(100 / totalImages) * currentIndex}%)`,
          transitionDuration: `${transitionDuration}ms`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative  flex-shrink w-full aspect-video h-full flex items-center justify-center overflow-hidden"
            onClick={() => {
                setIsPaused((prev) => !prev);
            }}
            >
            <img src={image} alt={`Slide ${index}`} className="w-full transition-transform ease-in-out duration-700 hover:scale-105 h-full object-cover" />
            {showProgressBar && <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300">
                <div
                className="h-full bg-white transition-[width] ease-linear"
                style={{
                    width: currentIndex === index && !isPaused ? "100%" : "0%",
                    transitionDuration: `${autoPlayInterval-transitionDuration/4}ms`,
                }}
                />
            </div>}
          </div>
        ))}
      </div>

      {/* Render arrows if needed */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
          >
            &#10095;
          </button>
        </>
      )}

      {/* Render dots if needed */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={clsx(
                "w-3 h-3 rounded-full",
                currentIndex === index ? "bg-white" : "bg-gray-500"
              )}
            />
          ))}
        </div>
      )}

      {/* Render thumbnails if needed */}
      {showThumbnails && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2 bg-black bg-opacity-50">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => setCurrentIndex(index)}
              className={clsx(
                "cursor-pointer border-2",
                currentIndex === index ? "border-white" : "border-transparent",
                "w-16 h-16 object-cover"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
