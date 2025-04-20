import IncreasingCountdown from "./@components/Countdown";
import EventBlock from "./@components/EventBlock";
import eventJson from "./data/events.json";

import mceLogo from "./assets/mce.jpg";
import texploLogo from "./assets/texplo.png";
import Carousel from "./@components/Carousel";
import ScrollDownIndicator from "./@components/ScrollDownIndicator";

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
    <main className="h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-auto">
      <section className="w-full sticky z-40 top-0">
        <div className="flex h-12 md:h-14 w-full items-center px-4 py-2 gap-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <h1 onClick={
            () => {
              const element = document.getElementById("welcome-section");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
            }
          } className="flex items-center gap-2 flex-row text-xl md:text-2xl hover:opacity-100 text-white cursor-pointer opacity-75 font-semibold">
            <img src={texploLogo} alt="Texplo Logo" className="size-12 md:size-10" />
            TEXPLO'25
          </h1>
          <h2 onClick={() => {
            const element = document.getElementById("about-section");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }} className="opacity-0 md:text-lg text-white hover:opacity-100 cursor-pointer md:opacity-75 font-semibold">
            About
          </h2>
          <h2 onClick={() => {
            const element = document.getElementById("motivation-section");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }} className="opacity-0 md:text-lg text-white hover:opacity-100 cursor-pointer md:opacity-75 font-semibold">
            Motivation
          </h2>
          <h2 onClick={() => {
            const element = document.getElementById("events-section");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }} className="opacity-0 md:text-lg text-white hover:opacity-100 cursor-pointer md:opacity-75 font-semibold">
            Events
          </h2>
          <h2 className="flex flex-row items-center gap-2 ml-auto opacity-0 md:text-lg text-white hover:opacity-100 cursor-pointer md:opacity-75 font-semibold">
          MCE
          <img src={mceLogo} alt="Mookambigai College Logo" className="size-16 md:size-10 rounded-xl" />
          </h2>
        </div>
      </section>
      <section className="h-screen w-screen snap-start">
        <div className="h-full w-full flex-col gap-8 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
          <IncreasingCountdown beforeCountdownChildren={<>
            <img src={texploLogo} alt="Texplo Logo" className="mx-auto h-60 w-60 animate-fade-in-up" />
      <h2 className="lg:text-6xl text-3xl font-semibold text-shadow-sm text-shadow-black/50 text-gray-800 mb-4">TEXPLO'25 is Happening</h2>
      <h2 className='lg:text-3xl text-xl text-shadow-sm text-shadow-black/20'>in</h2>
            </>} targetTimestamp={1745361000000} />
            <ScrollDownIndicator />
        </div>
        
      </section>
      <section id="welcome-section" className="h-screen w-screen snap-start">
        <div className="flex h-full flex-col gap-2 w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="flex flex-col gap-2 lg:gap-4 w-10/11 lg:w-2/3 h-fit max-h-9/11 lg:max-h-9/11 bg-white shadow-2xl rounded-lg items-start-safe p-4">
          <h1 className="lg:text-5xl animate-fade-in-up md:text-4xl text-shadow-lg text-3xl text-center text-balance text-black font-bold">
            Welcome to Texplo'25
          </h1>
          <h2 className="lg:text-3xl animate-fade-in-up text-center delay-100 md:text-2xl text-shadow-md text-xl text-black font-bold">
            Skill. Compete. Conquer.
          </h2>
          <h2 className="lg:text-2xl animate-fade-in-up delay-200 md:text-xl text-lg text-shadow-sm text-balance text-black text-center font-semibold">
            <span className="text-blue-500 font-bold"> TEXPLO'25</span> is a tech
            event that brings together students from all over the country.
          </h2>
          <Carousel
          images={["/snaps/snaps1.jpg",  "/snaps/snaps4.jpg", "/snaps/snaps5.jpg", "snaps/snaps6.jpg", "/snaps/snaps10.jpg", "/snaps/snaps11.jpg", "/snaps/snaps8.jpg", "/snaps/snaps7.jpg",]}
            className="w-full h-9/11 rounded-2xl"
            autoPlay={true}
            autoPlayInterval={3000}
            showArrows={false}
            showDots={false}
            showThumbnails={false}
            infiniteLoop={true}
            transitionDuration={500}
           >
            </Carousel>
          </div>
          {/* <p className='lg:text-xl md:text-lg text-sm text-white mt-4'>Join us for an unforgettable experience!</p> */}
          {/* <p className='lg:text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p> */}
        </div>
      </section>
      <section id="about-section" className="h-screen w-screen snap-start">
        <div className="flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="flex flex-col gap-2 lg:gap-4 w-10/11 lg:w-2/3 h-fit max-h-9/11 lg:max-h-6/7 bg-white shadow-2xl rounded-lg items-start-safe p-4">
            <h1 className="lg:text-5xl md:text-4xl text-3xl text-black font-bold">
              About Texplo'25
            </h1>
            <h2 className="lg:text-lg md:text-base text-black text-sm font-normal flex flex-col gap-5">
              <span>
                Happening offline every year, <span className="font-bold text-blue-600">TEXPLO'25</span> is more than just an
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
              <span className="text-balance">
                With <span className="font-semibold text-pink-600">8</span> departments and <span className="font-semibold text-pink-600">20+</span> events, <span className="font-bold text-blue-600">TEXPLO'25</span> is a platform for 
                students to showcase their skills and knowledge in various
                technical fields.
                </span>
                  <span>From coding competitions to workshops, we have something for
                everyone. Whether you're a seasoned pro or just starting out, we
                invite you to join us and be part of this exciting journey.
              </span>
            </h2>
            {/* <p className='text-xl text-white mt-4'>Join us for an unforgettable experience!</p> */}
            <button onClick={() => {
              window.open("https://mookambigai.ac.in/", "_blank");
            }} className="bg-blue-500 cursor-pointer text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 mt-auto transition duration-300">
              Learn more
            </button>
          </div>
        </div>
      </section>
      <section id="motivation-section" className="h-screen w-screen snap-start">
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

      <section id="events-section" className="h-screen w-screen snap-start">
        <div className="flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="flex flex-col gap-4 w-5/6 h-3/4 md:h-9/11 bg-white shadow-2xl rounded-lg items-start-safe p-4">
            <h1 className="text-2xl lg:text-5xl text-black font-bold">Technical Events</h1>
            <div className="grid auto-rows-[100%] grid-flow-row h-full w-full snap-y snap-mandatory overflow-y-auto">
            {[...events.entries()].map(([deptName, events]) => (
              <EventBlock
                key={deptName}
                events={events.filter(e => e.isTechnical)}
                deptName={deptName}
               />))
            }
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen snap-start">
        <div className="flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="flex flex-col gap-4 w-5/6 h-3/4 md:h-9/11 bg-white shadow-2xl rounded-lg items-start-safe p-4">
            <h1 className="text-2xl lg:text-5xl text-black font-bold">Non-Technical Events</h1>
            <div className="grid auto-rows-[100%] grid-flow-row h-full w-full snap-y snap-mandatory overflow-y-auto">
            {[...events.entries()].map(([deptName, events]) => (
              <EventBlock
                key={deptName}
                events={events.filter(e => !e.isTechnical)}
                deptName={deptName}
               />))
            }
            </div>
          </div>
        </div>
      </section>
      <section id="registration-section" className="h-screen w-screen snap-start">
        <div className="flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="flex flex-col gap-4 w-5/6 max-h-3/4 h-fit md:max-h-6/11 bg-white shadow-2xl rounded-lg items-start-safe p-4">
           <h1 className="text-2xl lg:text-5xl text-center text-balance text-black font-bold">
            What are you waiting for?<br />
            Join us now by registering today!
            </h1> 
            <IncreasingCountdown beforeCountdownChildren={
              <div className="flex flex-col">
              <h2 className="lg:text-2xl text-lg font-semibold text-shadow-sm text-shadow-black/10 text-gray-800">Registration ends</h2>
      <h2 className='lg:text-lg -mb-4 text-sm text-shadow-sm text-shadow-black/5'>in</h2>
              </div>
            } targetTimestamp={1745326800000}
            countdownEndMessage={
              <span className="text-red-500 font-semibold text-lg">Registration closed.</span>
            } />
          <button onClick={() => {
            window.open("https://shorturl.at/Nfnze", "_blank");
          }} className="bg-blue-500 cursor-pointer text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 mt-auto transition duration-300">
            Register Now
          </button>
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
          <h6 className="text-xs md:text-[8px] text-center text-balance text-white font-semibold">
            Mookambigai College of Engineering, Keeranur, Pudukkottai - 622502.
          </h6>
        </div>
      </section>
    </main>
  );
}

export default App;
