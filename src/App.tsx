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
    <div className='flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
    <h1 className='lg:text-5xl md:text-4xl text-3xl text-white font-bold'>Welcome to Texplo'25</h1>
    <h2 className='lg:text-3xl md:text-2xl text-xl text-white font-semibold'>Lorem ipsum dolor sit amet.</h2>
    <p className='lg:text-xl md:text-lg text-sm text-white mt-4'>Join us for an unforgettable experience!</p>
    {/* <p className='lg:text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p> */}
    </div>
    </section>
    <section className='h-screen w-screen snap-start'>
    <div className='flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
    <div className='flex flex-col gap-4 w-3/4 lg:w-2/3 h-fit max-h-5/6 lg:h-1/2 bg-white shadow-2xl rounded-lg items-start-safe p-4'>
    <h1 className='lg:text-5xl md:text-4xl text-3xl text-black font-bold'>About Texplo'25</h1>
    <h2 className='lg:text-xl md:text-lg text-black text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
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
    <h2 className='lg:text-xl md:text-lg text-sm text-black font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
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
