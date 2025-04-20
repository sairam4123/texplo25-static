import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

interface IncreasingCountdownProps {
  targetTimestamp: number;
  beforeCountdownChildren?: React.ReactNode;
  afterCountdownChildren?: React.ReactNode;
  countdownEndMessage?: React.ReactNode;
}

interface TimeParts {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  message?: React.ReactNode;
}

const IncreasingCountdown: React.FC<IncreasingCountdownProps> = ({ targetTimestamp, beforeCountdownChildren, afterCountdownChildren, countdownEndMessage }) => {
  const [currentTime, setCurrentTime] = useState<number>(new Date().getTime());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [timeParts, setTimeParts] = useState<TimeParts>({});

  useEffect(() => {
    if (!targetTimestamp) return;
  
  
    clearInterval(intervalRef.current!);
  
    intervalRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        if (targetTimestamp <= prev) {
          clearInterval(intervalRef.current!);
          setTimeParts({
            message: (
              <div className="animate-slide-up">
                {countdownEndMessage ?? "It's ON!"}
              </div>
            ),
          });
          return targetTimestamp;
        }
        return prev + 1000;
      });
    }, 1000);
  
    return () => clearInterval(intervalRef.current!);
  }, [targetTimestamp]); // only if user can change it mid-session
  

  useEffect(() => {
    if (targetTimestamp > currentTime) {
      const difference = targetTimestamp - currentTime;
      const absoluteDifference = Math.abs(difference);
      const days = Math.floor(absoluteDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((absoluteDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((absoluteDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((absoluteDifference % (1000 * 60)) / 1000);
        console.log(days, hours, minutes, seconds)
      setTimeParts({ days, hours, minutes, seconds });
    } else {
      setTimeParts({ message: countdownEndMessage ?? <span className="text-green-500 font-semibold text-lg">It's ON!</span> });
    }
  }, [currentTime, countdownEndMessage, targetTimestamp]);


  return (
    <div className="bg-white animate-fade-in-up rounded-md space-y-4 shadow-md p-6 text-center">
      {beforeCountdownChildren}
      <div className="flex items-center justify-center">
        {timeParts.message ? (
          timeParts.message
        ) : (
          <>
            {timeParts.days !== undefined && timeParts.days !== 0 && (
              <div className="mr-4">
                <SlidingDigit value={timeParts.days} />
                <span className="text-gray-600 text-sm">{timeParts.days === 1 ? 'day' : 'days'}</span>
              </div>
            )}
            {timeParts.hours !== undefined && (timeParts.days !== 0 || timeParts.hours !== 0) && (
              <div className="mr-4">
                <SlidingDigit value={timeParts.hours} />
                <span className="text-gray-600 text-sm">{timeParts.hours === 1 ? 'hour' : 'hours'}</span>
              </div>
            )}
            {timeParts.minutes !== undefined && (timeParts.days !== 0 || timeParts.hours !== 0 || timeParts.minutes !== 0) && (
              <div className="mr-4">
                <SlidingDigit value={timeParts.minutes} />
                <span className="text-gray-600 text-sm">{timeParts.minutes === 1 ? 'minute' : 'minutes'}</span>
              </div>
            )}
            {timeParts.seconds !== undefined && (timeParts.days !== 0 || timeParts.hours !== 0 || timeParts.minutes !== 0 || timeParts.seconds !== 0) && (
              <div>
                <SlidingDigit value={timeParts.seconds} />
                <span className="text-gray-600 text-sm">{timeParts.seconds === 1 ? 'sec' : 'secs'}</span>
              </div>
            )}
          </>
        )}
        {afterCountdownChildren}
      </div>
    </div>
  );
};



const SlidingDigit: React.FC<{ value: number }> = ({ value }) => {
  const [previous, setPrevious] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value !== previous) {
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setPrevious(value);
        setIsAnimating(false);
      }, 300); // match animation duration
      return () => clearTimeout(timeout);
    }
  }, [value, previous]);

  return (
    <div className="relative h-12 w-10 overflow-hidden">
      <div
        className={clsx(
          'absolute inset-0 flex items-center justify-center text-2xl font-mono transition-transform duration-300',
          isAnimating ? 'translate-y-full' : 'translate-y-0'
        )}
      >
        {previous}
      </div>
      <div
        className={clsx(
          'absolute inset-0 flex items-center justify-center text-2xl font-mono transition-transform duration-300',
          isAnimating ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        {value}
      </div>
    </div>
  );
};



export default IncreasingCountdown;