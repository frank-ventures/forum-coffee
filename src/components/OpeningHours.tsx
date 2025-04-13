import { getHours, Hours } from "@/stores/hours";

export default function OpeningHours() {
  const hours: Hours[] = getHours();
  return (
    <section
      id="times"
      className="flex flex-col gap-4 items-center bg-black text-white py-10"
    >
      <h2 className="text-2xl">Opening Hours</h2>
      <ul>
        {hours.map((hour) => {
          return (
            <li
              key={`opening_hours_${hour.day}`}
              className="flex gap-4 justify-center  "
            >
              <p className="text-right w-28 pr-6 ">{hour.day}</p>
              <p>
                <span>{hour.opening}</span> - <span>{hour.closing}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
