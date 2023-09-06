type ReviewSession = {
  course: string;
  time: string;
  location: string;
  slidesLink?: string;
  worksheetLink?: string;
  recordingLink?: string;
  keyLink?: string;
  /**
   * If set, the key link will not be published
   * until the time and date (in CST) specified by the below.
   * You must follow JS date string format. For example,
   * to release on March 14th at 3PM central time, use the following
   * string:
   * ```
   * 2022-03-14T15:00:00-05:00
   * ```
   * (the `-05:00` indicates that CST is 5 hours behind UTC).
   *
   * *If no key release time is specified, the key will be accessible immediately*
   * *If there is no worksheet, the key will not be displayed*
   */
  keyReleaseTime?: string;
};

export const reviewSessions: Record<1 | 2 | 3, ReviewSession[]> = {
  1: [
    {
      course: "ECE 110",
      time: "9/16, 3:00-5:30PM",
      location:
        "ECEB 1015"
    },
    {
      course: "ECE 120",
      time: "9/17, 3:00-5:30PM",
      location:
        "ECEB 1015"
    },
    {
      course: "ECE 329",
      time: "9/16, 3:00-5:30PM",
      location:
        "ECEB 1013"
    },
    {
      course: "ECE 350",
      time: "9/16, 3:00-5:30PM",
      location:
        "ECEB 3015"
    },
  ],
  2: [],
  3: [],
};

// When the UI should rollover stop showing the given review session
// Remember that months are zero indexed but days are not.
export const until: Record<1 | 2 | 3, Date> = {
  1: new Date(2023, 8, 31),
  2: new Date(2023, 10, 10),
  3: new Date(1), // Date(1) makes sure this will never be default bc it occured in the past
};

export const crammingCarnival: ReviewSession[] = [];
