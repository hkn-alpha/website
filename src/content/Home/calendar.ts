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

type BaseEvent = {
  name: string;
  description: string;
  virtual: boolean;
};


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

function makeEvent(base: Omit<Event, "date" | "time" | "locationInfo" | "virtualInfo"> & { virtual: false }) {
  return (date: Date, time: string, locationInfo: LocationInfo): Event => ({
    ...base,
    date,
    time,
    locationInfo,
    virtual: false,
  });
}

function makeVirtualEvent(base: Omit<Event, "date" | "time" | "locationInfo" | "virtualInfo"> & { virtual: true }) {
  return (date: Date, time: string, virtualInfo: VirtualInfo): Event => ({
    ...base,
    date,
    time,
    virtualInfo,
    virtual: true,
  });
}

/**
 * HKN editors: Unless you're modifying website functionality, ONLY EDIT LINES
 * BELOW THIS POINT!
 */


/* Common locations used in events
  Fill out all fields for each location
  Defined by the locationInfo type above
  You can add more locations if needed, otherwise use the commonLocations object below
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
  northQuad:{
    lat: 40.1149104,
    lon: -88.2298627,
    locationName: "North Quad",
    addressLine1: "W Main St",
    addressLine2: "Urbana, IL 61801",
    googleMapsLink: "https://www.google.com/maps/place/North+Quad/@40.1149104,-88.2298627,16z/data=!3m1!4b1!4m6!3m5!1s0x880cd741c34031a3:0xed8ada33e3421567!8m2!3d40.1149104!4d-88.2272878!16s%2Fg%2F11bytn1hz5?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D",
  },
  southQuad:{
    lat: 40.10289,
    lon: -88.22718,
    locationName: "South Quad (McFarland Memorial Bell Tower)",
    addressLine1: "607 S Mathews Ave",
    addressLine2: "Urbana, IL 61801",
    googleMapsLink: "https://maps.google.com/?q=40.10289,-88.22718"
  },
  atrium: {
    ...eceb,
    locationName: "ECEB Atrium",
    
  },
  1002: {
    ...eceb,
    locationName: "Grainger Auditorium (ECEB 1002)"
  },
  1013: {
    ...eceb,
    locationName: "ECEB 1013"
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
  3015: {
    ...eceb,
    locationName: "ECEB 3015",
  },
  2013: {
    ...eceb,
    locationName: "ECEB 2013",
  },
  2015: {
    ...eceb,
    locationName: "ECEB 2015",
  },
  2017: {
    ...eceb,
    locationName: "ECEB 2017",
  },
  3002: {
    ...eceb,
    locationName: "ECEB 3002",
  },
  3081: {
    ...eceb,
    locationName: "ECEB 3081",
  },
  CIF_4025:{
    ...cif,
    locationName: "CIF 4025",
  },
  CIF_first_floor:{
    ...cif,
    locationName: "CIF First Floor",
  },
  TBA:{
    ...eceb,
    locationName: "TBA",
  },
};


//Friday events are formatted differently because the activities change weekly
// Don't use this method if you're making another event that repeats weekly, see below for other examples

const fridaySchedule: [Date, string][] = [
  [new Date(2025, 8, 12), "Board Games + Snacks"],   
  [new Date(2025, 8, 19), "Trivia Night"],
  [new Date(2025, 8, 26), "Brain Food + Lockbox"],
  [new Date(2025, 9, 3), "Picnic + Movie Night"], 
  [new Date(2025, 9, 10), "Spooky Music Study Party"],
  [new Date(2025, 9, 17), "Mini Pumpkin Making"],
  [new Date(2025, 9, 24), "Spooky Cookie Decorating"],   
  [new Date(2025, 9, 31), "Halloween Costume Contest"],
  [new Date(2025, 10, 7), "Scarecrow Keychains"],
  [new Date(2025, 10, 14), "Winter/Autumn Treats Study Party"],
  [new Date(2025, 10, 21), "Friendsgiving Potluck"],
  [new Date(2025, 11, 5), "Gingerbread Houses!"],

];

const fridayEvent = (activity: string) => (date: Date): Event => ({
  name: activity,
  date,
  time: "5:00–6:00 PM",
  virtual: false,
  locationInfo: commonLocations["eceb"],
  description: `Join us for ${activity}!`,
  initiatePointsCount: 1,
  initiatePointsCategory: "social",
});

//--- ADD NEW EVENTS BELOW THIS LINE ---------------------------------------------------------------

/* Use the makeEvent function for in-person events
  Use the makeVirtualEvent function for virtual events
  Make sure to fill out all fields in the event object
  THIS SECTION IS FOR CREATING THE EVENT TEMPLATES ONLY
  TO ADD THE EVENT TO THE CALENDAR OR MODIFY THE CALENDAR, SEE THE SECTION BELOW
*/
const quadDay = makeEvent({
  name: "Quad Day",
  description:
    "HKN has a table at Quad Day! Stop by to learn more about our chapter!",
    virtual: false,
});

const tuesdaySocial = makeEvent({
  name: "Tuesday Social",
  description: "Join us for Pizza, Poker, and Smash!",
  virtual: false,
  initiatePointsCount: 1,
  initiatePointsCategory: "social",
});

const studentServices = makeEvent({
  name: "Student Services Meeting",
  description:
    "Preparation/Meeting for all things Student Services! (i.e. Review Sessions, Worksheets, Videos, HKN Wiki, etc)",
  virtual: false,
  initiatePointsCategory: "service",
  initiatePointsCount: 1,
});

const olympics = makeEvent({
  name: "Olympics",
  description:
    "Olympics! Initiates are required to attend. There will be a penalty if you don't!",
  virtual: false,
  initiatePointsCategory: "service",
  initiatePointsCount: 1,
});

const valentineSocial = makeEvent({
  name: "Valentine's Day Social",
  description: "Join us for a Valentine's Day Social with snacks and games!",
  virtual: false,
  initiatePointsCount: 1,
  initiatePointsCategory: "social",
});

const resumeReview = makeEvent({
  name: "Resume Review Sessions",
  description:
    "Come on by to have your resume reviewed before the Engineering Career Fair!",
  virtual: false,
});

const tutoringWorkshop = makeEvent({
  name: "Tutoring and Review Session Workshop",
  description:
    "Come to this workshop to improve your tutoring and lecturing skills.",
  virtual: false,
});

const courseAdvising = makeEvent({
  name: "Course Advising",
  description:
    "Stop by if you want some feedback about your schedule or course plan!",
  virtual: false,
});

const initiateWelcome = makeEvent({
  name: "Initiate Welcome",
  description:
    "Welcome new initiates to HKN! Learn more about our society and what's in it for you to join our chapter!",
  virtual: false,
  initiatePointsCategory: "service",
  initiatePointsCount: 1,
});

const infoSessions = makeEvent({
  name: "Info Session",
  description:
    "Learn more about our society, what we do, and what's in it for you to join our chapter!",
  virtual: false,
});

const ECEliftoff = makeEvent({
  name: "ECE Liftoff",  
  description:
    "Come get introduced to the ECE department and meet your fellow ECE students!",
  virtual: false,
});

const ecex4 = makeEvent({ 
  name: "ECEx4 Sports Day",
  description:
    "Come to the North Quad for fun and games!",
  virtual: false,
});

const generalMeeting = makeEvent({
  name: "General Meeting",
  description:
    "General Meeting and overview of our society, accomplishments, and plans",
  virtual: false,
});

const milleniumTalk = makeEvent({
  name: "Millenium Tech Talk",
  description:
    "Come to learn more about Millenium and their career opportunities!",
  virtual: false,
});

const lutronTalk = makeEvent({
  name: "Lutron Tech Talk",
  description:
    "Come to learn more about Lutron and their career opportunities!",
  virtual: false,
});

const BMcDTalk = makeEvent({
  name: "Burns & McDonnell Tech Talk",
  description:
    "Come to learn more about Burns & McDonnell and their career opportunities!",
  virtual: false,
});

const AsteraTalk = makeEvent({
  name: "Astera Labs Tech Talk",
  description:
    "Come to learn more about Astera Labs and their career opportunities!",
  virtual: false,
});


const ece_220_hours = makeEvent({
  name: "ECE 220 Tutoring Hours",
  description: "Eisa and Kyle are holding extra tutoring hours for ECE 220; please stop by.",
  virtual: false,
});

const TSMC_ISSA = makeEvent({
  name: "TSMC x ISSA",
  description: "Come to the joint HKN x ISSA TSMC talk to learn more about their career opportunities!",
  virtual: false,
});

const halliburtonTalk = makeEvent({
  name: "Halliburton Tech Talk",
  description: "Come learn more about Halliburton and their career opportunities!",
  virtual: false,
});

const TI_ISSA = makeEvent({
  name: "TI x ISSA",
  description: "Come to the joint HKN x ISSA TI talk to learn more about their career opportunities!",
  virtual: false,
});

const TownHall = makeEvent({
  name: "ECE Town Hall",
  description: "Come to voice your opinions about the ECE curriculum and student body!",
  virtual: false,
});

const election = makeEvent({
  name: "HKN Elections",
  description: "Elections for HKN! Go vote for your fellow members to be on board!",
  virtual: false,
});

const initiation = makeEvent({
  name: "HKN Initiation",
  description: "HKN Initiation!",
  virtual: false,
});

const editathon = makeEvent({
  name: "Student Services Editathon",
  description:
    "Come to the RSO Office to help edit the HKN wiki!",
  virtual: false,
  initiatePointsCategory: "service",
  initiatePointsCount: 1,
});

const graduatePanel = makeEvent({
  name: "HKN Graduate Panel",
  description:
    "Come talk to graduate students!",
  virtual: false,
});


/* IF YOU ARE ADDING AN EVENT TEMPLATE, PLEASE ADD IT TO THE LIST ABOVE!
   -----------------------------------------------------------------------------
  IF YOU ARE MODIFYING THE CALENDAR, PLEASE MODIFY THE LIST BELOW!
*/

/* These events are the ones that are displayed on the calendar
  Note that the below need not be ordered, the web UI will take care of sorting

  MONTHS ARE ZERO-INDEXED (0 = JANUARY, 1 = FEBRUARY, etc.)
  DAYS ARE ONE-INDEXED (1 = 1st of the month, 2 = 2nd of the month, etc.)

  Using the events created by the makeEvent function above, you add them to the calendar here

  example for single, one time event
  ece_220_hours(new Date(2025, 1, 12), "7:00 AM - 7:00 PM", commonLocations["CIF_first_floor"]), 

  example for repeat event
  ...[
    new Date(2025, 1, 12), //(FEB 12 2025)
    new Date(2025, 0, 13), //(JAN 13 2025)
    new Date(2025, 2, 14), //(MAR 14 2025)
  ].map(date => tutoringWorkshop(date, "6:00 PM - 7:00 PM", commonLocations[2017]))
*/

const events: Event[] = [
  ...fridaySchedule.map(([date, activity]) => fridayEvent(activity)(date)), //this one is weird, don't use this method for other events

  quadDay(new Date(2025, 7, 24), "12:00am - 4:00pm", commonLocations["southQuad"]),
  olympics(new Date(2025, 8, 6), "2:00pm-4:00 pm", commonLocations[2017]),
  resumeReview(new Date(2025, 8, 8), "6:30-8:00 PM", commonLocations["rsoOffice"]),
  resumeReview(new Date(2025, 8, 9), "5:00-6:00 PM", commonLocations["rsoOffice"]),
  initiation(new Date(2025, 11, 7), "TBA", commonLocations["TBA"]),
  election(new Date(2025, 11, 5), "TBA", commonLocations["TBA"]),
  
  AsteraTalk(new Date(2025, 8, 10), "5:30 - 7:30 PM", commonLocations[1013]),

  ...[
    new Date(2025, 8, 30),
    new Date(2025, 11, 5),
  ].map(date => generalMeeting(date, "TBA", commonLocations["TBA"])),

  ...[
    new Date(2025, 10, 13),
    new Date(2025, 10, 14),
    new Date(2025, 10, 15),
    new Date(2025, 10, 16),
    new Date(2025, 10, 17),
  ].map(date => ecex4(date, "TBA", commonLocations["TBA"])),
  

  tuesdaySocial(new Date(2025, 8, 2), "6:00-7:00pm", commonLocations["rsoOffice"]),

  ...[
    new Date(2025, 8, 9),
    new Date(2025, 8, 16),
    new Date(2025, 8, 23),
    new Date(2025, 8, 30),
    new Date(2025, 9, 7),
    new Date(2025, 9, 14),
    new Date(2025, 9, 21),
    new Date(2025, 9, 28),
    new Date(2025, 10, 4),
    new Date(2025, 10, 11),
    new Date(2025, 10, 18),
    new Date(2025, 11, 2),
    new Date(2025, 11, 9),
  ].map(date => tuesdaySocial(date, "6:00-7:00pm", commonLocations[2015])),

  
  ...[
    new Date(2024, 2, 2),
    new Date(2024, 2, 9),
    new Date(2024, 2, 16),
    new Date(2024, 2, 23),
    new Date(2024, 3, 2),
    new Date(2024, 2, 9),
    new Date(2024, 2, 16),
    new Date(2024, 2, 23),
    new Date(2024, 2, 30),
    new Date(2024, 3, 6),
    new Date(2024, 3, 13),
    new Date(2024, 3, 20),
    new Date(2024, 3, 27),
    new Date(2024, 4, 4),
  ].map(date => studentServices(date, "2:00pm-4:00pm", commonLocations[3081])),

  initiateWelcome(new Date (2025, 8, 5), "6:00-7:00 PM", commonLocations["3015"]),
  ...[
    new Date(2024, 8, 6),
    new Date(2024, 8,10)
  ].map(date => resumeReview(date, "5:00-7:00 PM", commonLocations["rsoOffice"])),

  ...[
  new Date(2025, 7, 26),
  new Date(2025, 7, 28),
  new Date(2025, 7, 29)
  ].map(date => courseAdvising(date, "12:00 PM - 4:00 PM", commonLocations[2015])),
  courseAdvising(new Date(2025, 7, 27), "12:00 PM - 4:00 PM", commonLocations["rsoOffice"]),

  infoSessions(new Date(2025, 7, 27), "4:30-5:30 PM", commonLocations["rsoOffice"]),
  infoSessions(new Date(2025, 8, 4), "7:00-8:00 PM", commonLocations["rsoOffice"]),
  ECEliftoff(new Date(2025, 7, 27), "5:30-6:15 PM", commonLocations["atrium"]),

];

export default events;
