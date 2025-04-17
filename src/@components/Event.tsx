import { useState } from "react";

const EventBlock = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div key={isFlipped} className={`flex flex-col gap-2 bg-stone-50 perspective-distant ${isFlipped ? 'animate-flip ' : 'animate-flip-rev'} shadow-md rounded-lg p-4 w-full h-full`} style={{ transformStyle: 'preserve-3d', animationFillMode: "forwards" }}
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
        <h3 className="text-2xl font-bold">Event</h3>
        <p className="text-gray-500">
            This is a block that will be used to display events.
        </p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 mt-auto transition duration-300">
            Learn more
        </button>
        </div>
    )
}

export default EventBlock;