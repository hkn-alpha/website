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
   * (the `-05:00` indicates that CST is 5 hourse behind UTC).
   *
   * *If no key release time is specified, the key will be accessible immediately*
   * *If there is no worksheet, the key will not be displayed*
   */
  keyReleaseTime?: string;
};

export const reviewSessions: Record<number, ReviewSession[]> = {
  1: [
    {
      course: "ECE/CS374",
      time: "5/11, 2:00-4:00PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE/CS375",
      time: "5/20, 2:00-4:00PM",
      location: "ECEB 1002",
      slidesLink: "https://yourmothers.house",
      worksheetLink: "https://google.com",
      keyLink: "https://apple.com",
      keyReleaseTime: "2023-05-21T11:13:00-04:00",
    },
  ],
  2: [
    {
      course: "ECE/CS374",
      time: "5/21 2:00-4:00PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE/CS375",
      time: "5/23 2:00-4:00PM",
      location: "ECEB 1002",
      slidesLink: "https://yourmothers.house",
      worksheetLink: "https://google.com",
      keyLink: "https://apple.com",
      keyReleaseTime: "2023-05-21T11:13:00-04:00",
    },
  ],
  3: [],
};

export const crammingCarnival: ReviewSession[] = [
  {
    course: "ECE/CS375",
    time: "5/9, 2:00-4:00PM",
    location: "ECEB 1002",
    slidesLink: "https://yourmothers.house",
    worksheetLink: "https://google.com",
    keyLink: "https://apple.com",
    keyReleaseTime: "2023-05-21T11:13:00-04:00",
  },
];
