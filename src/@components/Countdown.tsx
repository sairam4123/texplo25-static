import React, { useState, useEffect, useRef } from 'react';

interface IncreasingCountdownProps {
  targetTimestamp: number;
}

interface TimeParts {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  message?: React.ReactNode;
}

const IncreasingCountdown: React.FC<IncreasingCountdownProps> = ({ targetTimestamp }) => {
  const [currentTime, setCurrentTime] = useState<number>(new Date().getTime());
  console.log(currentTime, targetTimestamp)
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [timeParts, setTimeParts] = useState<TimeParts>({});

  useEffect(() => {
    if (targetTimestamp <= currentTime) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      return;
    }

    console.log('Starting interval...')

    intervalRef.current = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 1000);
    }, 1000);

    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [targetTimestamp]);

  useEffect(() => {
    if (targetTimestamp > currentTime) {
      const difference = targetTimestamp - new Date().getTime();
      const absoluteDifference = Math.abs(difference);
      const days = Math.floor(absoluteDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((absoluteDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((absoluteDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((absoluteDifference % (1000 * 60)) / 1000);
        console.log(days, hours, minutes, seconds)
      setTimeParts({ days, hours, minutes, seconds });
    } else {
      setTimeParts({ message: <span className="text-green-500 font-semibold text-lg">Reached Target!</span> });
    }
  }, [currentTime, targetTimestamp]);


  return (
    <div className="bg-white animate-fade-in-up rounded-md space-y-4 shadow-md p-6 text-center">
      <h2 className="lg:text-6xl text-3xl font-semibold text-shadow-sm text-shadow-black/50 text-gray-800 mb-4">TEXPLO'25 is Happening</h2>
      <h2 className='lg:text-3xl text-xl text-shadow-sm text-shadow-black/20'>in</h2>
      <div className="flex items-center justify-center">
        {timeParts.message ? (
          timeParts.message
        ) : (
          <>
            {timeParts.days !== undefined && (
              <div key={timeParts.days ?? ""} className="mr-4">
                <div className="relative h-8 flex justify-center overflow-hidden">
                  <div className="animate-slide-down text-2xl absolute top-0">{timeParts.days}</div>
                  <div className="absolute top-full">{Math.floor((currentTime - (new Date().getTime() - 1000)) / (1000 * 60 * 60 * 24))}</div>
                </div>
                <span className="text-gray-600 text-sm">{timeParts.days === 1 ? 'day' : 'days'}</span>
              </div>
            )}
            {timeParts.hours !== undefined && (
              <div key={timeParts.hours ?? ""} className="mr-4">
                <div className="relative h-8 flex justify-center overflow-hidden">
                  <div className="animate-slide-down text-2xl absolute top-0">{timeParts.hours}</div>
                  <div className="absolute top-full">{Math.floor(((currentTime - (new Date().getTime() - 1000)) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</div>
                </div>
                <span className="text-gray-600 text-sm">{timeParts.hours === 1 ? 'hour' : 'hours'}</span>
              </div>
            )}
            {timeParts.minutes !== undefined && (
              <div key={timeParts.minutes ?? ""} className="mr-4">
                <div className="relative h-8 flex justify-center overflow-hidden">
                  <div className="animate-slide-down text-2xl absolute top-0">{timeParts.minutes}</div>
                  <div className="absolute top-full">{Math.floor(((currentTime - (new Date().getTime() - 1000)) % (1000 * 60 * 60)) / (1000 * 60))}</div>
                </div>
                <span className="text-gray-600 text-sm">{timeParts.minutes === 1 ? 'minute' : 'minutes'}</span>
              </div>
            )}
            {timeParts.seconds !== undefined && (
              <div>
                <div key={timeParts.seconds ?? ""} className="relative flex justify-center h-8 overflow-hidden">
                  <div className="animate-slide-down text-2xl absolute top-0">{timeParts.seconds}</div>
                  <div className="absolute top-full">{Math.floor(((currentTime - (new Date().getTime() - 1000)) % (1000 * 60)) / 1000)}</div>
                </div>
                <span className="text-gray-600 text-sm">{timeParts.seconds === 1 ? 'sec' : 'secs'}</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default IncreasingCountdown;