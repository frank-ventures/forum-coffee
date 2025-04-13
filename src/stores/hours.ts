export type Hours = {
  day: string;
  opening: string;
  closing: string;
};

export const getHours = (): Hours[] => openingHours;

const openingHours: Hours[] = [
  {
    day: "Monday",
    opening: "09:00",
    closing: "18:00",
  },
  {
    day: "Tuesday",
    opening: "09:00",
    closing: "18:00",
  },
  {
    day: "Wednesday",
    opening: "09:00",
    closing: "18:00",
  },
  {
    day: "Thursday",
    opening: "09:00",
    closing: "18:00",
  },
  {
    day: "Friday",
    opening: "09:00",
    closing: "18:00",
  },
  {
    day: "Saturday",
    opening: "09:00",
    closing: "16:00",
  },
  {
    day: "Sunday",
    opening: "09:00",
    closing: "15:00",
  },
];
