export type Events = {
  eventImg: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventDetails: string;
};

export const getEvents = (): Events[] => Events;

const Events: Events[] = [
  {
    eventImg: "events/hog-roast.jpg",
    eventTitle: "Hog Roast",
    eventDate: "Friday 2nd May",
    eventTime: "5PM Onwards",
    eventDetails: "Food From Tha Truck",
  },
  {
    eventImg: "events/pizza-02-ricardo.jpg",
    eventTitle: "Pizza Night",
    eventDate: "Friday 9th May",
    eventTime: "5PM Onwards",
    eventDetails: "Food From Ricardos Pizza",
  },
  {
    eventImg: "events/wine-night.jpg",
    eventTitle: "Wine Bar",
    eventDate: "Friday 16th May",
    eventTime: "5PM to 10PM",
    eventDetails: "Selected Wines at Forum",
  },
  {
    eventImg: "events/run-club.jpg",
    eventTitle: "Run Club",
    eventDate: "Sunday 25th May",
    eventTime: "9AM",
    eventDetails: "Forums Monthly Run Club",
  },
];
