import IncreasingCountdown from './@components/Countdown'
import EventBlock from './@components/Event'

function App() {

  return (
    <main className='h-screen w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-auto'>
    <section className='h-screen w-screen snap-start'>
    <div className='h-full w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
    <IncreasingCountdown targetTimestamp={1745361000000} />
    </div>
    </section>
    <section className='h-screen w-screen snap-start'>
    <div className='flex h-full flex-col gap-2 w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
    <h1 className='lg:text-5xl md:text-4xl text-3xl text-white font-bold'>Welcome to Texplo'25</h1>
    <h2 className='lg:text-3xl md:text-2xl text-xl text-white font-bold'>Skill. Compete. Conquer.</h2>
    <h2 className="lg:text-2xl md:text-xl text-lg text-white font-semibold">
      <span className='text-white font-bold'> TEXPLO'25</span> is a tech event that brings together students from all over the country.
    </h2>
    {/* <p className='lg:text-xl md:text-lg text-sm text-white mt-4'>Join us for an unforgettable experience!</p> */}
    {/* <p className='lg:text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p> */}
    </div>
    </section>
    <section className='h-screen w-screen snap-start'>
    <div className='flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
    <div className='flex flex-col gap-4 w-3/4 lg:w-2/3 h-fit max-h-5/6 lg:h-1/2 bg-white shadow-2xl rounded-lg items-start-safe p-4'>
    <h1 className='lg:text-5xl md:text-4xl text-3xl text-black font-bold'>About Texplo'25</h1>
    <h2 className='lg:text-xl md:text-lg text-black text-sm font-semibold flex flex-col gap-2'>
<span>
    Happening offline every year, Texplo25 is more than just an event — it's a knowledge-sharing playground where learning gets gamified.
</span>
<span>
Whether you're here to upskill, compete, or connect, we've crafted a lineup of dynamic tech challenges and experiences that bring out the best in you.
</span>
<span>
With massive cash prizes and a stage that celebrates real talent, this is your chance to learn, level up, and lead.
</span>

    </h2>
    {/* <p className='text-xl text-white mt-4'>Join us for an unforgettable experience!</p> */}
    <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 mt-auto transition duration-300'>
      Learn more
    </button>
    </div>
    </div>
    </section>
    <section className='h-screen w-screen snap-start'>
    <div className='flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
    <div className='flex flex-col gap-4 w-3/4 h-fit max-h-5/6 lg:w-2/3 lg:h-1/2 bg-white shadow-2xl rounded-lg items-start-safe p-4'>
    <h1 className='lg:text-5xl md:text-4xl text-3xl text-black font-bold'>Motivation</h1>
      <h2 className='lg:text-3xl md:text-2xl text-xl text-black font-semibold'>
        <span className='text-blue-500 font-bold'> TEXPLO'25</span> is more than just a tech event; it's a revolution in the making.
      </h2>
      <h2 className='lg:text-lg md:text-lg text-sm text-black font-semibold flex flex-col gap-2'>
<span>

We're creating a platform for students to dive into cutting-edge tech events, compete with brilliant minds, and bring their ideas to life.
Whether you're a coder, creator, hacker, or innovator — this is your arena.
</span>
<span>

With some of the most rewarding cash prizes and a commitment to recognizing real talent, we go beyond just hosting events —
we spotlight the future of tech.
Unleash your skills, make your mark, and be part of something bigger.
</span>

</h2>
    {/* <p className='text-xl text-white mt-4'>Join us for an unforgettable experience!</p> */}
    </div>
    </div>
    </section>

    <section className='h-screen w-screen snap-start'>
    <div className='flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
    <div className='flex flex-col gap-4 w-5/6 h-3/4 bg-white shadow-2xl rounded-lg items-start-safe p-4'>
    <h1 className='text-5xl text-black font-bold'>Events</h1>
    <div className='grid grid-rows-1 pb-2 grid-flow-col px-4 overflow-hidden auto-cols-[90%] md:auto-cols-[46%] lg:auto-cols-[31%] overflow-x-auto gap-8 py-9 w-full h-full'>
      <EventBlock />
      <EventBlock />
      <EventBlock />
      <EventBlock />
      <EventBlock />
    </div>
    </div>
    </div>
    </section>
    </main>
  )
}

export default App
