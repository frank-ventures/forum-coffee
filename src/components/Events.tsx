import { getEvents } from "@/stores/events";

export default function Events() {
  const events = getEvents();
  return (
    <section className="events-container w-full h-[75dvh] p-4 flex gap-4 overflow-scroll">
      {events.map((individualEvent, index) => {
        return (
          <Event
            key={`individual-event-${index}`}
            eventImg={individualEvent.eventImg}
            eventTitle={individualEvent.eventTitle}
            eventDate={individualEvent.eventDate}
            eventTime={individualEvent.eventTime}
            eventDetails={individualEvent.eventDetails}
          />
        );
      })}
    </section>
  );
}

function Event({
  eventImg,
  eventTitle,
  eventDate,
  eventTime,
  eventDetails,
}: {
  eventImg: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventDetails: string;
}) {
  return (
    <div className="event relative shrink-0 w-[80%] aspect-square rounded-xl">
      <img
        src={eventImg}
        alt=""
        className="w-full h-full object-cover rounded-xl"
      />

      <h3 className="absolute top-0 rounded-t-xl bg-white/75 w-full text-black text-center text-2xl font-light">
        {eventTitle}
      </h3>
      <div className="py-2 absolute bottom-0 flex flex-col gap-2 justify-center items-center rounded-b-xl bg-black/75 w-full text-white text-xl font-extralight">
        <h4>{eventDate}</h4>
        <h4>{eventTime}</h4>
        <h5>{eventDetails}</h5>
      </div>
    </div>
  );
}
