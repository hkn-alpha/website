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
  2017: {
    ...eceb,
    locationName: "ECEB 2017",
  },
  3002: {
    ...eceb,
    locationName: "ECEB 3002",
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
  locationInfo: commonLocations["rsoOffice"],
  initiatePointsCount: 1,
  initiatePointsCategory: "social",
});
const studentServices = (date: Date): Event => ({
  name: "Student Services Meeting",
  date,
  time: "2:00pm-4:00pm",
  virtual: false,
  locationInfo: commonLocations[3013],
  description:
    "Preparation/Meeting for all things Student Services! (I.e. Review sessions, Worksheets, Videos, HKN wiki, etc)",
  initiatePointsCategory: "service",
  initiatePointsCount: 1,
});

// Note that the below need not be ordered, the web UI will take care of sorting
// Also note that months are zero indexed but days are not!
const events: Event[] = [
  ...[
    new Date(2024, 1, 2),
    new Date(2024, 1, 9),
    new Date(2024, 1, 16),
    new Date(2024, 1, 23),
    new Date(2024, 2, 1),
    new Date(2024, 2, 8),
    new Date(2024, 2, 15),
    new Date(2024, 2, 22),
    new Date(2024, 2, 29),
    new Date(2024, 3, 5),
    new Date(2024, 3, 12),
    new Date(2024, 3, 19),
    new Date(2024, 3, 26),
    new Date(2024, 4, 3)
  ].map(happyHour),
  ...[,
    new Date(2024, 1, 4),
    new Date(2024, 1, 11),
    new Date(2024, 1, 18),
    new Date(2024, 1, 25),
    new Date(2024, 2, 3),
    new Date(2024, 2, 10),
    new Date(2024, 2, 17),
    new Date(2024, 2, 24),
    new Date(2024, 2, 31),
    new Date(2024, 3, 7),
    new Date(2024, 3, 14),
    new Date(2024, 3, 21),
    new Date(2024, 3, 28)
  ].map(studentServices),
];

export default events;
