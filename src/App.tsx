import IncreasingCountdown from "./@components/Countdown";
import EventBlock from "./@components/EventBlock";
import EventCard from "./@components/EventCard";
import eventJson from "./data/events.json";

function App() {
  const events = eventJson.reduce((acc, event) => {
    const eventDetails = acc.get(event.dept);
    if (eventDetails) {
      eventDetails.push(event);
    }
    else {
      acc.set(event.dept, [event]);
    }
    return acc;
  }, new Map<string, typeof eventJson[number][]>());
  return (
    <main className="h-screen w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-auto">
      <section className="w-screen sticky top-0">
        <div className="flex h-20 md:h-14 w-full items-center px-4 justify-between bg-gradient-to-r from-blue-500 to-purple-500">
          <img src="public/mce.jpg" alt="Texplo Logo" className="size-16 md:size-12 rounded-xl" />
          <h1 className="text-4xl md:text-2xl text-white font-semibold">
            TEXPLO'25
          </h1>
          <img src="public/texplo.png" alt="Texplo Logo" className="size-16 md:size-12" />
        </div>
      </section>
      <section className="h-screen w-screen snap-start">
        <div className="h-full w-full flex-col gap-8 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
          <IncreasingCountdown targetTimestamp={1745361000000} />
        </div>
        
      </section>
      <section className="h-screen w-screen snap-start">
        <div className="flex h-full flex-col gap-2 w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
          <h1 className="lg:text-5xl animate-fade-in-up md:text-4xl text-shadow-lg text-3xl text-center text-balance text-white font-bold">
            Welcome to Texplo'25
          </h1>
          <h2 className="lg:text-3xl animate-fade-in-up delay-100 md:text-2xl text-shadow-md text-xl text-white font-bold">
            Skill. Compete. Conquer.
          </h2>
          <h2 className="lg:text-2xl animate-fade-in-up delay-200 md:text-xl text-lg text-shadow-sm text-balance text-white text-center font-semibold">
            <span className="text-white font-bold"> TEXPLO'25</span> is a tech
            event that brings together students from all over the country.
          </h2>
          {/* <p className='lg:text-xl md:text-lg text-sm text-white mt-4'>Join us for an unforgettable experience!</p> */}
          {/* <p className='lg:text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p> */}
        </div>
      </section>
      <section className="h-screen w-screen snap-start">
        <div className="flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="flex flex-col gap-4 w-3/4 lg:w-2/3 h-fit max-h-5/6 lg:h-4/7 bg-white shadow-2xl rounded-lg items-start-safe p-4">
            <h1 className="lg:text-5xl md:text-4xl text-3xl text-black font-bold">
              About Texplo'25
            </h1>
            <h2 className="lg:text-xl md:text-lg text-black text-sm font-semibold flex flex-col gap-8">
              <span>
                Happening offline every year, Texplo25 is more than just an
                event — it's a knowledge-sharing playground where learning gets
                gamified.
              </span>
              <span>
                Whether you're here to upskill, compete, or connect, we've
                crafted a lineup of dynamic tech challenges and experiences that
                bring out the best in you.
              </span>
              <span>
                With massive cash prizes and a stage that celebrates real
                talent, this is your chance to learn, level up, and lead.
              </span>
            </h2>
            {/* <p className='text-xl text-white mt-4'>Join us for an unforgettable experience!</p> */}
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 mt-auto transition duration-300">
              Learn more
            </button>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen snap-start">
        <div className="flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="flex flex-col gap-4 w-3/4 h-fit max-h-5/6 lg:w-2/3 lg:h-4/7 bg-white shadow-2xl rounded-lg items-start-safe p-4">
            <h1 className="lg:text-5xl md:text-4xl text-3xl text-black font-bold">
              Motivation
            </h1>
            <h2 className="lg:text-3xl md:text-2xl text-xl text-black font-semibold">
              <span className="text-blue-500 font-bold"> TEXPLO'25</span> is
              more than just a tech event; it's a revolution in the making.
            </h2>
            <h2 className="lg:text-lg md:text-lg text-sm text-black font-semibold flex flex-col gap-4">
              <span>
                We're creating a platform for students to dive into cutting-edge
                tech events, compete with brilliant minds, and bring their ideas
                to life. Whether you're a coder, creator, hacker, or innovator —
                this is your arena.
              </span>
              <span>
                With some of the most rewarding cash prizes and a commitment to
                recognizing real talent, we go beyond just hosting events — we
                spotlight the future of tech. Unleash your skills, make your
                mark, and be part of something bigger.
              </span>
            </h2>
            {/* <p className='text-xl text-white mt-4'>Join us for an unforgettable experience!</p> */}
          </div>
        </div>
      </section>

      <section className="h-screen w-screen snap-start">
        <div className="flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="flex flex-col gap-4 w-5/6 h-3/4 md:h-9/11 bg-white shadow-2xl rounded-lg items-start-safe p-4">
            <h1 className="text-5xl text-black font-bold">Technical Events</h1>
            <div className="grid auto-rows-[100%] grid-flow-row h-full w-full snap-y snap-mandatory overflow-y-auto">
            {[...events.entries()].map(([deptName, events]) => (
              <EventBlock
                key={deptName}
                events={events}
                deptName={deptName}
               />))
            }
            </div>
          </div>
        </div>
      </section>
      <section className="sticky bottom-0 w-screen">
        <div className="flex flex-col h-18 md:h-10 w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 -z-10">
          <h1 className="text-base md:text-xs text-white font-semibold">
            &copy; 2025 TEXPLO Commitee. All rights reserved.
          </h1>
          <h6 className="text-xs md:text-[8px] text-white font-semibold">
            Made with ❤️ by Sairam M (Dept of IT)
          </h6>
        </div>
      </section>
    </main>
  );
}

export default App;
