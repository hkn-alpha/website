export type LocationInfo = {
  lon: number;
  lat: number;
  locationName: string;
  addressLine1: string;
  addressLine2: string;
};

type Event = {
  name: string;
  date: Date;
  description: string;
  time: string;
} & (
  | {
      virtual: false;
      locationInfo: LocationInfo;
    }
  | {
      virtual: true;
    }
);

const commonLocations = {
  legends: {
    lat: 40.1103786,
    lon: -88.2311247,
    locationName: "Legends Bar and Grill",
    addressLine1: "522 E Green St",
    addressLine2: "Champaign, IL 61820",
  },
};

const events: Event[] = [
  {
    name: "Old event",
    date: new Date(2023, 1, 5), // year, month, day
    description: "This is the event description",
    time: "12:00PM", // making this a string because otherwise timezones are hard`
    virtual: true,
  },
  {
    name: "Happy Hour",
    date: new Date(2023, 5, 10),
    description:
      "Join HKN and chat with some of your fellow members! Enjoy free food on us as you get a chance to know your peers better!",
    time: "6:09PM",
    virtual: false,
    locationInfo: commonLocations["legends"],
  },
];

export default events;
