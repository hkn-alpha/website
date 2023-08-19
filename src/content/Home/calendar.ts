export type LocationInfo = {
  lon: number;
  lat: number;
  locationName: string;
  addressLine1: string;
  addressLine2: string;
  googleMapsLink: string;
};

export type VirtualInfo = {
  meetingPlatform: string;
  meetingJoinUrl: string;
  meetingPasscode?: string;
};

type InitiatePointsCategory = "social" | "service";

type Event = {
  name: string;
  date: Date;
  description: string;
  time: string;
  initiatePointsCount?: number;
  initiatePointsCategory?: InitiatePointsCategory;
} & (
  | {
      virtual: false;
      locationInfo: LocationInfo;
    }
  | {
      virtual: true;
      virtualInfo: VirtualInfo;
    }
);

/**
 * HKN editors: Unless you're modifying website functionality, ONLY EDIT LINES
 * BELOW THIS POINT!
 */

const commonLocations = {
  legends: {
    lat: 40.1103786,
    lon: -88.2311247,
    locationName: "Legends Bar and Grill",
    addressLine1: "522 E Green St",
    addressLine2: "Champaign, IL 61820",
    googleMapsLink: "https://goo.gl/maps/ZRr4eiiWSQG3pQRG6?coh=178571&entry=tt",
  },
  atrium: {
    lat: 40.11487240610786,
    lon:  -88.22795431703628,
    locationName: "ECEB Atrium",
    addressLine1: "306 N Wright St",
    addressLine2: "Urbana, IL 61801",
    googleMapsLink: "https://goo.gl/maps/3D5E3M8CEyEKEqc3A",
  },
};

// Note that the below need not be ordered, the web UI will take care of sorting
// Also note that months are zero indexed but days are not!
const events: Event[] = [
  // {
  //   name: "Tech Talk",
  //   date: new Date(2023, 4, 29), // year, month, day
  //   description:
  //     "This is a talk about some cool technology by some corporate sponsor. I like corporate sponsors because they give talks.",
  //   time: "12:00PM", // making this a string because otherwise timezones are hard`
  //   virtual: true,
  //   virtualInfo: {
  //     meetingPlatform: "Zoom",
  //     meetingJoinUrl: "https://yourmothers.house",
  //     meetingPasscode: "8675309",
  //   },
  // },
  // {
  //   name: "Happy Hour",
  //   date: new Date(2023, 5, 10),
  //   description:
  //     "Join HKN and chat with some of your fellow members! Enjoy free food on us as you get a chance to know your peers better!",
  //   time: "6:09PM",
  //   virtual: false,
  //   locationInfo: commonLocations["legends"],
  //   initiatePointsCount: 1,
  //   initiatePointsCategory: "social",
  // },
  {
    name: "Course Advising",
    date: new Date(2024, 8, 21),
    description: "Ask upperclassmen about course choices and paths!",
    time: "12:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations["atrium"],
  },
  {
    name: "Course Advising",
    date: new Date(2024, 8, 22),
    description: "Ask upperclassmen about course choices and paths!",
    time: "12:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations["atrium"],
  },
  {
    name: "Course Advising",
    date: new Date(2024, 8, 23),
    description: "Ask upperclassmen about course choices and paths!",
    time: "12:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations["atrium"],
  },
  {
    name: "Course Advising",
    date: new Date(2024, 8, 24),
    description: "Ask upperclassmen about course choices and paths!",
    time: "12:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations["atrium"],
  },
  {
    name: "Course Advising",
    date: new Date(2024, 8, 25),
    description: "Ask upperclassmen about course choices and paths!",
    time: "12:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations["atrium"],
  },
];

export default events;
