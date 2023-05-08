type Event = {
  name: string;
  date: Date;
  description: string;
};

const events: Event[] = [
  {
    name: "Old event",
    date: new Date(2023, 1, 5), // year, month, day
    description: "This is the event description",
  },
  {
    name: "New event",
    date: new Date(2023, 5, 1),
    description: "this is a new event",
  },
];

export default events;
