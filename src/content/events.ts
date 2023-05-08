type Event = {
  name: string;
  date: Date;
  description: string;
  time: string;
};

const events: Event[] = [
  {
    name: "Old event",
    date: new Date(2023, 1, 5), // year, month, day
    description: "This is the event description",
    time: "12:00PM", // making this a string because otherwise timezones are hard`
  },
  {
    name: "Happy Hour",
    date: new Date(2023, 5, 10),
    description:
      "Join HKN and chat with some of your fellow members! Enjoy free food on us as you get a chance to know your peers better!",
    time: "6:09PM",
  },
];

export default events;
