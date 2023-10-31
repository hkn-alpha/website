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

const eceb = {
  lat: 40.11487240610786,
  lon: -88.22795431703628,
  addressLine1: "306 N Wright St",
  addressLine2: "Urbana, IL 61801",
  googleMapsLink: "https://goo.gl/maps/3D5E3M8CEyEKEqc3A",
};

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
    ...eceb,
    locationName: "ECEB Atrium",
  },
  1015: {
    ...eceb,
    locationName: "ECEB 1015",
  },
  3017: {
    ...eceb,
    locationName: "ECEB 3017",
  },
  rsoOffice: {
    ...eceb,
    locationName: "HKN RSO Office (Next to Daily Byte)",
  },
  3013: {
    ...eceb,
    locationName: "ECEB 3013",
  },
  2013: {
    ...eceb,
    locationName: "ECEB 2013",
  },
};

const happyHour = (date: Date): Event => ({
  name: "Happy Hour",
  date,
  description:
    "Free fry friday! Join HKN and chat with some of your fellow members!",
  time: "5:00PM",
  virtual: false,
  locationInfo: commonLocations["legends"],
  initiatePointsCount: 1,
  initiatePointsCategory: "social",
});
const tuesdaySocial = (date: Date): Event => ({
  name: "Tuesday Social",
  date,
  description: "Join us for Pizza, Poker, and Smash!",
  time: "6:00-7:00pm",
  virtual: false,
  locationInfo: commonLocations[rsoOffice],
  initiatePointsCount: 1,
  initiatePointsCategory: "social",
});

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
  {
    name: "Course Advising",
    date: new Date(2023, 7, 21),
    description: "Ask upperclassmen about course choices and paths!",
    time: "12:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations["atrium"],
  },
  {
    name: "Course Advising",
    date: new Date(2023, 7, 22),
    description: "Ask upperclassmen about course choices and paths!",
    time: "12:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations["atrium"],
  },
  {
    name: "Course Advising",
    date: new Date(2023, 7, 23),
    description: "Ask upperclassmen about course choices and paths!",
    time: "12:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations["atrium"],
  },
  {
    name: "Course Advising",
    date: new Date(2023, 7, 24),
    description: "Ask upperclassmen about course choices and paths!",
    time: "12:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations["atrium"],
  },
  {
    name: "Course Advising",
    date: new Date(2023, 7, 25),
    description: "Ask upperclassmen about course choices and paths!",
    time: "12:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations["atrium"],
  },
  ...[
    new Date(2023, 8, 8),
    new Date(2023, 8, 15),
    new Date(2023, 8, 22),
    new Date(2023, 8, 29),
    new Date(2023, 9, 6),
    new Date(2023, 9, 13),
    new Date(2023, 9, 20),
    new Date(2023, 9, 27),
    new Date(2023, 10, 3),
    new Date(2023, 10, 10),
    new Date(2023, 10, 17),
    new Date(2023, 11, 1),
    new Date(2023, 11, 8),
    new Date(2023, 11, 15),
  ].map(happyHour),
  ...[
    new Date(2023, 9, 3),
    new Date(2023, 9, 10),
    new Date(2023, 9, 17),
    new Date(2023, 9, 24),
    new Date(2023, 9, 31),
    new Date(2023, 10, 7),
    new Date(2023, 10, 14),
    new Date(2023, 10, 28),
    new Date(2023, 11, 5),
  ].map(tuesdaySocial),
  {
    name: "HKN Info Session",
    date: new Date(2023, 8, 4),
    time: "5:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations.rsoOffice,
    description: "Come learn more about HKN and how to join!",
  },
  {
    name: "HKN Info Session",
    date: new Date(2023, 8, 5),
    time: "5:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations.rsoOffice,
    description: "Come learn more about HKN and how to join!",
  },
  {
    name: "HKN Info Session",
    date: new Date(2023, 8, 6),
    time: "6:00-7:00pm",
    virtual: false,
    locationInfo: commonLocations.rsoOffice,
    description: "Come learn more about HKN and how to join!",
  },
  {
    name: "Tuesday Social",
    date: new Date(2023, 8, 12),
    time: "6:00-7:00pm",
    virtual: false,
    locationInfo: commonLocations[3017],
    description: "Join us for Pizza, Poker, and Smash!",
    initiatePointsCategory: "social",
    initiatePointsCount: 1,
  },
  {
    name: "Resume Reivews",
    date: new Date(2023, 8, 12),
    time: "5:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations[1015],
    description:
      "Join HKN and WECE for resume and LinkedIn tips and tricks, Q&A, and reviews (and pizza!)!",
  },
  {
    name: "Initiate Olympics",
    date: new Date(2023, 8, 10),
    time: "11:00am-1:00pm",
    virtual: false,
    locationInfo: commonLocations.atrium,
    description:
      "Meet other initiates and get to know the HKN board! Required for all initiates.",
  },
  {
    name: "Tuesday Social",
    date: new Date(2023, 8, 19),
    time: "6:00-7:00pm",
    virtual: false,
    locationInfo: commonLocations[3017],
    description: "Join us for Pizza, Poker, and Smash!",
    initiatePointsCategory: "social",
    initiatePointsCount: 1,
  },
  {
    name: "Tuesday Social",
    date: new Date(2023, 8, 26),
    time: "6:00-7:00pm",
    virtual: false,
    locationInfo: commonLocations[3017],
    description: "Join us for Pizza, Poker, and Smash!",
    initiatePointsCategory: "social",
    initiatePointsCount: 1,
  },
  {
    name: "Student Services Meeting",
    date: new Date(2023, 8, 10),
    time: "2:00-4:00pm",
    virtual: false,
    locationInfo: commonLocations[3013],
    description:
      "Preparation/Meeting for all things Student Services! (I.e. Review sessions, Worksheets, Videos, HKN wiki, etc)",
    initiatePointsCategory: "service",
    initiatePointsCount: 1,
  },
  {
    name: "Student Services Meeting",
    date: new Date(2023, 8, 17),
    time: "2:00-4:00pm",
    virtual: false,
    locationInfo: commonLocations[3013],
    description:
      "Preparation/Meeting for all things Student Services! (I.e. Review sessions, Worksheets, Videos, HKN wiki, etc)",
    initiatePointsCategory: "service",
    initiatePointsCount: 1,
  },
  {
    name: "Student Services Meeting",
    date: new Date(2023, 8, 24),
    time: "2:00-4:00pm",
    virtual: false,
    locationInfo: commonLocations[3013],
    description:
      "Preparation/Meeting for all things Student Services! (I.e. Review sessions, Worksheets, Videos, HKN wiki, etc)",
    initiatePointsCategory: "service",
    initiatePointsCount: 1,
  },
  {
    name: "Student Services Meeting",
    date: new Date(2023, 9, 1),
    time: "2:00-4:00pm",
    virtual: false,
    locationInfo: commonLocations[3013],
    description:
      "Preparation/Meeting for all things Student Services! (I.e. Review sessions, Worksheets, Videos, HKN wiki, etc)",
    initiatePointsCategory: "service",
    initiatePointsCount: 2,
  },
  {
    name: "Student Services Meeting",
    date: new Date(2023, 9, 8),
    time: "2:00-4:00pm",
    virtual: false,
    locationInfo: commonLocations[3013],
    description:
      "Preparation/Meeting for all things Student Services! (I.e. Review sessions, Worksheets, Videos, HKN wiki, etc)",
    initiatePointsCategory: "service",
    initiatePointsCount: 2,
  },
  {
    name: "Student Services Meeting",
    date: new Date(2023, 9, 15),
    time: "2:00-4:00pm",
    virtual: false,
    locationInfo: commonLocations[3013],
    description:
      "Preparation/Meeting for all things Student Services! (I.e. Review sessions, Worksheets, Videos, HKN wiki, etc)",
    initiatePointsCategory: "service",
    initiatePointsCount: 2,
  },
  {
    name: "Student Services Meeting",
    date: new Date(2023, 9, 22),
    time: "2:00-4:00pm",
    virtual: false,
    locationInfo: commonLocations[3013],
    description:
      "Preparation/Meeting for all things Student Services! (I.e. Review sessions, Worksheets, Videos, HKN wiki, etc)",
    initiatePointsCategory: "service",
    initiatePointsCount: 2,
  },
  {
    name: "Student Services Meeting",
    date: new Date(2023, 9, 29),
    time: "2:00-4:00pm",
    virtual: false,
    locationInfo: commonLocations[3013],
    description:
      "Preparation/Meeting for all things Student Services! (I.e. Review sessions, Worksheets, Videos, HKN wiki, etc)",
    initiatePointsCategory: "service",
    initiatePointsCount: 2,
  },
  {
    name: "Grad Panel",
    date: new Date(2023, 9, 4),
    time: "5:00-6:00pm",
    virtual: false,
    locationInfo: commonLocations[2013],
    description:
      "Stop by and listen to our grad students discuss everything from coursework and application process to student life. Ask any questions you may have!",
  },
];

export default events;
