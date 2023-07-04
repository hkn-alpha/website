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
      course: "ECE 329",
      time: "7/12, 7:00-9:00PM",
      location:
        "https://illinois.zoom.us/j/86158717865?pwd=cjNGZVBoNEkxaGdNVC9lNGJUa0xVQT09",
      slidesLink:
        "https://docs.google.com/presentation/d/1EzHlSO1P7II8x_rJVyhLENJI7YxCUPhtXyt2oHLYDLg/edit?usp=sharing",
    },
  ],
  2: [
    {
      course: "ECE 329",
      time: "7/26, 7:00-9:00PM",
      location:
        "https://illinois.zoom.us/j/86158717865?pwd=cjNGZVBoNEkxaGdNVC9lNGJUa0xVQT09",
      slidesLink: "https://hkn-alpha.netlify.app/abcde",
    },
  ],
  3: [],
};

export const crammingCarnival: ReviewSession[] = [
  {
    course: "ECE 329",
    time: "8/4, 7:00-9:00PM",
    location:
      "https://illinois.zoom.us/j/86158717865?pwd=cjNGZVBoNEkxaGdNVC9lNGJUa0xVQT09",
    slidesLink: "https://hkn-alpha.netlify.app/abcde",
    // worksheetLink: "https://hkn-alpha.netlify.app/abcde",
    // keyLink: "https://hkn-alpha.netlify.app/abcde",
    // keyReleaseTime: "2023-05-21T11:13:00-04:00",
  },
];
