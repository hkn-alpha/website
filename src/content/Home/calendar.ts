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
    locationName: "HKN RSO Office ECEB 1016",
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
    "Preparation/Meeting for all things Student Services! (i.e. Review Sessions, Worksheets, Videos, HKN Wiki, etc)",
  initiatePointsCategory: "service",
  initiatePointsCount: 1,
});
const valentineSocial = (date: Date): Event => ({
  name: "Valentine's Day Social",
  date,
  time: "5:00pm-7:00pm",
  virtual: false,
  locationInfo: commonLocations["rsoOffice"],
  description:
    "Come make custom cards with HKN! We have papercraft, fun stickers, markers, and more for everyone! All are welcome!!",
  initiatePointsCategory: "social",
  initiatePointsCount: 2,
});

const resumeReview = (date: Date): Event => ({
  name: "Resume Review Sessions",
  date,
  time: "TBD",
  virtual: false,
  locationInfo: commonLocations["rsoOffice"],
  description:
    "Come to the RSO Office to have your resume reviewed before the Engineering Career Fair!"
})

const courseAdvising = (date: Date): Event => ({
  name: "Course Advising",
  date,
  time: "12:00-5:00 PM",
  virtual: false,
  locationInfo: commonLocations["atrium"],
  description:
    "Stop by if you want some feedback about your schedule or course plan!"


})

const infoSessions = (date: Date): Event => ({
  name: "Info Session",
  date,
  time: "7:00-8:00 PM",
  virtual: false,
  locationInfo: commonLocations["2017"],
  description:
  "Learn more about our society, what we do, and what's in it for you to join our chapter!"
})

const generalMeeting = (date: Date): Event => ({
  name: "generalMeeting",
  date,
  time: "7:00-8:00 PM",
  virtual: false,
  locationInfo: commonLocations["2017"],
  description:
  "General Meeting and overview of our society, accomplishments, and plans"
})
// Note that the below need not be ordered, the web UI will take care of sorting
// Also note that months are zero indexed but days are not!
const events: Event[] = [
//   ...[
//     new Date(2024, 8, 6),
//     new Date(2024, 8, 13),
//     new Date(2024, 8, 20),
//     new Date(2024, 8, 27),
//     new Date(2024, 9, 4),
//     new Date(2024, 9, 11),
//     new Date(2024, 9, 18),
//     new Date(2024, 9, 25),
//     new Date(2024, 10, 1),
//     new Date(2024, 10, 8),
//     new Date(2024, 10, 15),
//     new Date(2024, 11, 6),
//   ].map(happyHour),
//   ...[,
//     new Date(2024, 1, 4),
//     new Date(2024, 1, 11),
//     new Date(2024, 1, 18),
//     new Date(2024, 1, 25),
//     new Date(2024, 2, 3),
//     new Date(2024, 2, 10),
//     new Date(2024, 2, 17),
//     new Date(2024, 2, 24),
//     new Date(2024, 2, 31),
//     new Date(2024, 3, 7),
//     new Date(2024, 3, 14),
//     new Date(2024, 3, 21),
//     new Date(2024, 3, 28)
//   ].map(studentServices),
// ...[,
//     new Date(2024, 1, 13),
// ].map(valentineSocial),
...[
  ,new Date(2024, 8, 6)
  ,new Date(2024, 8, 10)
].map(resumeReview),
...[
  , new Date(2024, 7, 26 )
, new Date(2024, 7, 27 )
, new Date(2024, 7, 29 )
, new Date(2024, 7, 30 )
, new Date(2024, 8, 2 )
, new Date(2024, 8, 3 )
, new Date(2024, 8, 4 )
, new Date(2024, 8, 5 )
, new Date(2024, 8, 6 )
].map(courseAdvising),
...[
  , new Date(2024, 8, 3)
  , new Date(2024, 8, 4)
].map(infoSessions),
...[
  , new Date(2024, 8, 5)

].map(generalMeeting)


];

export default events;
