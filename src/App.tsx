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
    <h1 className='text-5xl text-white font-bold'>Welcome to Texplo'25</h1>
    <h2 className='text-3xl text-white font-semibold'>Lorem ipsum dolor sit amet.</h2>
    <p className='text-xl text-white mt-4'>Join us for an unforgettable experience!</p>
    <p className='text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    </div>
    </section>
    <section className='h-screen w-screen snap-start'>
    <div className='flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
    <div className='flex flex-col gap-4 w-1/2 h-1/2 bg-white shadow-2xl rounded-lg items-start-safe p-4'>
    <h1 className='text-5xl text-black font-bold'>About Texplo'25</h1>
    <h2 className='text-xl text-black font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
    {/* <p className='text-xl text-white mt-4'>Join us for an unforgettable experience!</p> */}
    <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 mt-auto transition duration-300'>
      Learn more
    </button>
    </div>
    </div>
    </section>
    <section className='h-screen w-screen snap-start'>
    <div className='flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
    <div className='flex flex-col gap-4 w-1/2 h-1/2 bg-white shadow-2xl rounded-lg items-start-safe p-4'>
    <h1 className='text-5xl text-black font-bold'>Motivation</h1>
    <h2 className='text-xl text-black font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
    {/* <p className='text-xl text-white mt-4'>Join us for an unforgettable experience!</p> */}
    </div>
    </div>
    </section>

    <section className='h-screen w-screen snap-start'>
    <div className='flex h-full flex-col w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
    <div className='flex flex-col gap-4 w-5/6 h-3/4 bg-white shadow-2xl rounded-lg items-start-safe p-4'>
    <h1 className='text-5xl text-black font-bold'>Events</h1>
    <div className='grid grid-cols-3 grid-flow-row-dense overflow-x-scroll gap-4 w-full h-full'>
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
