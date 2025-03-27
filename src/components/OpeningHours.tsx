import { getHours, Hours } from "@/stores/hours";

export default function OpeningHours() {
  const hours: Hours[] = getHours();
  return (
    <section>
      <h2>Opening Hours</h2>
      <ul>
        {hours.map((hour) => {
          return (
            <li key={`opening_hours_${hour.day}`}>
              <p>{hour.day}</p>
              <p>
                <span>{hour.opening}</span> : <span>{hour.closing}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
