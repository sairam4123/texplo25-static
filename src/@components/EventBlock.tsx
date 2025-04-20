import EventCard from "./EventCard"
import EventJson from "../data/events.json"
const EventBlock = ({
    events,
    deptName
}: {
    events: typeof EventJson[number][];
    deptName: typeof EventJson[number]["dept"];
}) => {
    return <div className="flex flex-col py-1 drop-shadow-lg bg-white/20 rounded-lg snap-start w-full h-full">
    <h2 className="text-2xl/tight px-6 text-black font-semibold">Department of {deptName}</h2>
    <div className="grid grid-rows-1 snap-mandatory snap-x pb-4 grid-flow-col overflow-hidden scroll-mx-2 auto-cols-[95%] md:auto-cols-[46%] lg:auto-cols-[31%] overflow-x-auto gap-2 lg:gap-8 w-full h-full">
      {events.map((event, index) => (
        <EventCard
          key={index}
          frontTitle={event.title}
          frontChildren={
            <div className="flex flex-col gap-0.5">
                <p className="text-sm text-gray-600">{event.description}</p>
                <h2 className="text-lg font-semibold">Rules</h2>
              <ul className="text-sm text-gray-600">
                {event.rules.map((rule, index) => (
                  <li
                    key={index}
                    className="list-disc px-4 list-inside"
                  >
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          }
          backTitle={event.title}
          backChildren={
            <div className="">
              
              <h2 className="text-lg font-semibold">Event Coordinators</h2>
                <ul className="text-sm text-gray-600">
                    {event.coordinators.map((coordinator, index) => (
                    <li
                        key={index}
                        className="list-disc px-4 list-inside"
                    >
                        {coordinator.name} - {coordinator.phoneNo}
                    </li>
                    ))}
                </ul>

              {event.more_info && (
                <>
                  <h2 className="text-lg font-semibold">More Info</h2>
                  <ul className="text-sm text-gray-600">
                    {event.more_info.map((m, idx) => (
                      <li
                        key={idx}
                        className="list-disc px-4 list-inside"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          }
        />
      ))}
    </div>
    </div>
}

export default EventBlock;