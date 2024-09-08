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
const cif = {
  lat: 40.11278821816018, 
  lon: -88.22853501903802,
  addressLine1: "1405 W Springfield Ave",
  addressLine2: "Urbana, IL 61801",
  googleMapsLink: "https://www.google.com/maps/place/Campus+Instructional+Facility+(CIF)/@40.1124436,-88.2283419,16z/data=!4m14!1m7!3m6!1s0x880cd76d134f9943:0xe67002a644efa20f!2sCampus+Instructional+Facility+(CIF)!8m2!3d40.1124436!4d-88.2283419!16s%2Fg%2F11rb5x95w4!3m5!1s0x880cd76d134f9943:0xe67002a644efa20f!8m2!3d40.1124436!4d-88.2283419!16s%2Fg%2F11rb5x95w4?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",

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
  eceb:{
    ...eceb,
    locationName: "ECEB"
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
    locationName: "RSO Office ECEB 1016",
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
  CIF_4025:{
    ...cif,
    locationName: "CIF 4025",
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
  locationInfo: commonLocations[3013],
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

const resumeReview1 = (date: Date): Event => ({
  name: "Resume Review Sessions",
  date,
  time: "1:00 PM - 3:00 PM",
  virtual: false,
  locationInfo: commonLocations["rsoOffice"],
  description:
    "Come to the RSO Office to have your resume reviewed before the Engineering Career Fair!"
})

const resumeReview2 = (date: Date): Event => ({
  name: "Resume Review Sessions",
  date,
  time: "4:00 PM - 6:00 PM",
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
  locationInfo: commonLocations["eceb"],
  description:
  "Learn more about our society, what we do, and what's in it for you to join our chapter!"
})

const generalMeeting = (date: Date): Event => ({
  name: "General Meeting",
  date,
  time: "7:00-8:00 PM",
  virtual: false,
  locationInfo: commonLocations["2017"],
  description:
  "General Meeting and overview of our society, accomplishments, and plans"
})

const milleniumTalk = (date: Date): Event => ({
  name: "Millenium Tech Talk",
  date,
  time: "5:30 - 7:30 PM",
  virtual: false,
  locationInfo: commonLocations["1013"],
  description:
  "Come to learn more about Millenium and their career opportunities!"
})

const lutronTalk = (date: Date): Event => ({
  name: "Lutron Tech Talk",
  date,
  time: "7:00 PM - 9:00 PM",
  virtual: false,
  locationInfo: commonLocations["1015"],
  description:
  "Come to learn more about Lutron and their career opportunities!"
})

const BMcDTalk = (date: Date): Event => ({
  name: "Burns & McDonnell Tech Talk",
  date,
  time: "5:30 - 7:30 PM",
  virtual: false,
  locationInfo: commonLocations["1013"],
  description:
  "Come to learn more about Burns & McDonnell and their career opportunities!"
})

const TSMC_ISSA = (date: Date): Event => ({
  name: "TSMC x ISSA",
  date,
  time: "5:30 - 7:30 PM",
  virtual: false,
  locationInfo: commonLocations["CIF_4025"],
  description: "Come to the joint HKN x ISSA TSMC talk to learn more about their career opportunities!"
})

const halliburtonTalk = (date: Date): Event => ({
  name: "Halliburton Tech Talk",
  date,
  time: "7:00 - 9:00 PM",
  virtual: false,
  locationInfo: commonLocations["1013"],
  description: "Come learn more about Halliburton and their career opportunities!"
})

const TI_ISSA = (date: Date): Event => ({
  name: "TI x ISSA",
  date,
  time: "5:30 - 7:30 PM",
  virtual: false,
  locationInfo: commonLocations["1013"],
  description: "Come to the joint HKN x ISSA TI talk to learn more about their career opportunities!"
})



// Note that the below need not be ordered, the web UI will take care of sorting
// Also note that months are zero indexed but days are not!
const events: Event[] = [
  ...[
    // new Date(2024, 8, 6),
    // new Date(2024, 8, 13),
    // new Date(2024, 8, 20),
    // new Date(2024, 8, 27),
    new Date(2024, 8, 6),
    new Date(2024, 8, 13),
    new Date(2024, 8, 20),
    new Date(2024, 8, 27),
    new Date(2024, 9, 4),
    new Date(2024, 9, 11),
    new Date(2024, 9, 18),
    new Date(2024, 9, 25),
    new Date(2024, 10, 1),
    new Date(2024, 10, 8),
    new Date(2024, 10, 15),
    new Date(2024, 10, 22),
    // new Date(2024, 11, 29), // FALL BREAK
    new Date(2024, 11, 6),
  ].map(happyHour),
  ...[
    new Date(2024, 8, 10),
    new Date(2024, 8, 17),
    new Date(2024, 8, 24),
    new Date(2024, 9, 1),
    new Date(2024, 9, 8),
    new Date(2024, 9, 15),
    new Date(2024, 9, 22),
    new Date(2024, 9, 29),
    new Date(2024, 10, 5),
    new Date(2024, 10, 12),
    new Date(2024, 10, 19),
    // new Date(2024, 11, 26), // FALL BREAK
    new Date(2024, 11, 3),
  ].map(tuesdaySocial),
  ...[,
    new Date(2024, 8, 8),
    new Date(2024, 8, 15),
    new Date(2024, 8, 22),
    new Date(2024, 8, 29),
    new Date(2024, 9, 6),
    new Date(2024, 9, 13),
    new Date(2024, 9, 20),
    new Date(2024, 9, 27),
    new Date(2024, 10, 3),
    new Date(2024, 10, 10),
    new Date(2024, 10, 17),
    new Date(2024, 11, 1),
    new Date(2024, 11, 8)
  ].map(studentServices),
// ...[,
//     new Date(2024, 1, 13),
// ].map(valentineSocial),
...[
  ,new Date(2024, 8, 6)
].map(resumeReview1),
...[
  ,new Date(2024, 8,10)
].map(resumeReview2),
...[
  ,new Date(2024, 8, 9)
].map(lutronTalk),
...[
  ,new Date(2024, 8, 9)
].map(milleniumTalk),
...[
  ,new Date(2024,8,10)
].map(BMcDTalk),
...[
  ,new Date(2024, 8, 11)
].map(halliburtonTalk),
...[
  , new Date(2024, 8, 11)
].map(TSMC_ISSA),
...[
  , new Date(2024, 8 , 13)
].map(TI_ISSA),
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
