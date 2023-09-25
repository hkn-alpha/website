type ReviewSession = {
  course: string;
  time: string;
  location: string;
  slidesLink?: string;
  worksheetLink?: string;
  recordingLink?: string;
  keyLink?: string;
  scribblesLink?: string;
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
      course: "ECE 210",
      time: "9/16, 12:30-3:00PM",
      location: "ECEB 1013",
      slidesLink:
        "https://docs.google.com/presentation/d/1CXofOoxZtO_cR1BebHQkYRe13f3pgFGrI8qTSA3OKug/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_hompq6wy",
    },
    {
      course: "ECE 329",
      time: "9/16, 3:00-5:30PM",
      location: "ECEB 1013",
      slidesLink:
        "https://docs.google.com/presentation/d/1UPCvAUi-ZzFZ6ORe8GsolVXFSI01bNWWHf4e8tKRo10/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_xz8kf7xd",
    },
    {
      course: "ECE 120",
      time: "9/16, 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1I4ZS-_0Etu7jwnx0D7A4Scd7oEGkFKFMThA1Q-XDR48/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/1_8aob1oz8",
    },
    {
      course: "ECE 350",
      time: "9/16, 3:00-5:30PM",
      location: "ECEB 3015",
      slidesLink:
        "https://docs.google.com/presentation/d/1ZE0piNmhcMcQdak_Kk_NHYDkpmR82QnQDZGtrPL89wA/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_0mq2wza9",
    },
    {
      course: "ECE 374B",
      time: "9/17, 12:30-3:00PM",
      location: "ECEB 1002",
      slidesLink:
        "https://drive.google.com/file/d/17L-drxEQNKRLHoSRvSBL7QIub20A1ADJ/view?usp=sharing",
      worksheetLink:
        "https://drive.google.com/file/d/1-rDiFGUKRu2xR4nK9bDSLzDKqITh17qO/view?usp=sharing",
      keyLink:
        "https://drive.google.com/file/d/19_mMuWbkKN-m7gugjq7rayM811pr5v2T/view?usp=sharing",
      keyReleaseTime: "2023-09-17T15:00:00-05:00",
      scribblesLink:
        "https://drive.google.com/file/d/1LWcq3Er-9YReYfkYc9Q5sdVhOLUCsrYD/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/1_ohalcdnh",
    },
    {
      course: "ECE 220",
      time: "9/17, 12:30-3:00PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1cpcY2Ew17Ohvo0O3EfwxhTan90mxuxk3ixhEac0M4wg/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_3hii29n3",
    },
    {
      course: "ECE 342",
      time: "9/17, 12:30-3:00PM",
      location: "ECEB 3017",
      slidesLink:
        "https://docs.google.com/presentation/d/1L9h0rWMtx8yyRTc59ia8tQt4R-iXdfYbDpD09YZsFok/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_v4vrv3gs",
    },
    {
      course: "ECE 110",
      time: "9/17, 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1Oh-aqrL1W4NiW9eirWWPyRiRd8GkcS8DU-xe6mHMP-4/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_dl5om45u",
    },
    {
      course: "ECE 411",
      time: "9/17, 3:00-5:30PM",
      location: "ECEB 3017",
      slidesLink:
        "https://docs.google.com/presentation/d/1j_Zn5haeTgr32OCv5dbMbQ1pwwj98LcdMG4gOxf2Gy0/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_udk1nzzl",
    },
    
    {
      course: "ECE 313",
      time: "9/23 12:30-3:00PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1JBbI-NtobciLy8ClZU8orgxUYxGYNwe1VF_hbzcXXb8/edit?usp=sharing",
    },
    {
      course: "ECE 391",
      time: "9/23 3:00-5:30PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 310",
      time: "9/24 12:30-3:00PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1ncav1BicR5VmJU2PyVeYhYkn6QZSKTHBdrikEqyWk_U/edit",
    },
    {
      course: "CS 374A",
      time: "9/24 3:00-5:30PM",
      location: "ECEB 1002",
      slidesLink:
        "https://drive.google.com/file/d/1ZQArHSbGCyU-WH3airOVDVfKW0v9aXuZ/view?usp=drivesdk",
    },
    {
      course: "ECE 330",
      time: "9/24 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1PaWICsnZj-vrO3L6qMJKQnLIvcblDxlRES5AeYLyL7w/edit?usp=sharing"
    },
  ],
  2: [],
  3: [],
};

// When the UI should rollover stop showing the given review session
// Remember that months are zero indexed but days are not.
export const until: Record<1 | 2 | 3, Date> = {
  1: new Date(2023, 8, 5),
  2: new Date(2023, 11, 10),
  3: new Date(1), // Date(1) makes sure this will never be default bc it occured in the past
};

export const crammingCarnival: ReviewSession[] = [];
