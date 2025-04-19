import { useState } from "react";

const EventCard = ({
  frontTitle, frontChildren, backChildren, backTitle, frontButtonText, backButtonText
}: {
  frontTitle: string;
  frontChildren: React.ReactNode;
  backTitle: string;
  backChildren: React.ReactNode;
  frontButtonText?: string;
  backButtonText?: string;
  frontButtonAction?: () => void;
  backButtonAction?: () => void;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
    className="p-2"
    onClick={() => setIsFlipped(!isFlipped)}
    >

    <div
      // key={`${isFlipped}`}
      className={`min-h-full snap-center perspective-[1000px] gap-2 min-w-full max-w-full w-full h-full`}
      >
      <div
        className={`bg-stone-50 min-h-full ${
          isFlipped && "rotate-y-180"
        } transform-3d relative transition-all shadow-xl has-hover:scale-[1.05] has-hover:shadow-2xl rounded-lg p-4 w-full h-full flex flex-col gap-2 items-start justify-start duration-[600ms] ease-in-out"
        `}
        style={{ transformStyle: "preserve-3d" }}
        >
        {/* Front Side of the Card */}
        <div
          className={`absolute ${isFlipped ? "opacity-50" : "opacity-100"} inset-0 p-2 backface-hidden w-full duration-[600ms] ease-in-out h-full flex flex-col gap-2`}
          >
          <h3 className="text-2xl font-bold">{frontTitle}</h3>
          {frontChildren}
          <button className="bg-blue-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-blue-600 mt-auto">
            {frontButtonText ?? "Learn More"}
          </button>
        </div>
        {/* Back Side of the Card */}
        <div
          className={`absolute ${isFlipped ? "opacity-100" : "opacity-50"} inset-0 p-2 backface-hidden rotate-y-180 w-full h-full duration-[600ms] ease-in-out flex flex-col gap-2`}
          >
          <h3 className="text-2xl font-bold">{backTitle}</h3>
          {backChildren}
          <button className="bg-blue-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-blue-600 mt-auto">
            {backButtonText ?? "Register Now"}
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EventCard;
