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
        "https://docs.google.com/presentation/d/1PaWICsnZj-vrO3L6qMJKQnLIvcblDxlRES5AeYLyL7w/edit?usp=sharing",
    },
    {
      course: "ECE 340",
      time: "10/01 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1wyKH0Jcpi_YmwBwWIGH7pO9yyO-pfQPm1OZyuQO5y5U/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_2rnbx347",
    },
  ],
  2: [
    {
      course: "ECE 110",
      time: "10/14 12:30-3:00PM",
      location: "ECEB 1002",
      slidesLink:
        "https://docs.google.com/presentation/d/1dlUrP7N9YIuslbnsIuSkLNTctEXXfTMaPJ3_OE083FY/edit?usp=sharing",
      recordingLink:  "https://mediaspace.illinois.edu/media/t/1_fy3c2bik",
    },
    {
      course: "ECE 210",
      time: "10/14 12:30-3:00PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1FLWUyBAbRcMg3qChmFa6195P0i4_6bwl9HDL4GHcpYQ/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_0e2jahqc",
    },
    {
      course: "ECE 120",
      time: "10/14 3:00-5:30PM",
      location: "ECEB 1002",
      slidesLink:
        "https://docs.google.com/presentation/d/1W0Ta4_LwfKXOBjj2kYrGVJ3gLCzaIWhydKWHHd_6nSQ/edit?usp=sharing",
        recordingLink:   "https://mediaspace.illinois.edu/media/t/1_jdnxkt8n",
    },
    {
      course: "ECE 329",
      time: "10/14 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1fQ2ePktve7hgtpm_QA_hhB6dLURO1pd4goiwwV81dCQ/edit?usp=sharing",
        recordingLink:   "https://mediaspace.illinois.edu/media/t/1_vsua79wk",
    },
    {
      course: "ECE 350",
      time: "10/14 3:00-5:30PM",
      location: "ECEB 3015",
      slidesLink:
        "https://docs.google.com/presentation/d/1l6_uKIay8u91N4YVJg_nCMIETB0GxrmWy0NC9qB9DGY/edit?usp=sharing",
    },
    {
      course: "ECE 342",
      time: "10/15 12:30-3:00PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1pwWygOz5bBHFrVYeW0o5_k6HFDJcfIBsFW1F6MhPfkU/edit?usp=sharing",
    },
    {
      course: "ECE 220",
      time: "10/28 12:30-3:00PM",
      location: "ECEB 1015",
      slidesLink: "https://docs.google.com/presentation/d/1V6qqxGOgnFcgI83QXwsbHh_nx_72zf6liahRgr2-jSM/edit?usp=sharing",
      recordingLink:   "https://mediaspace.illinois.edu/media/t/1_cnn9esgh",
      worksheetLink:
        "https://cdn.discordapp.com/attachments/1026312923666206731/1169090514243563571/ECE220_MT2_Worksheet_1.pdf?ex=65542363&is=6541ae63&hm=94cd2674512bc59166fe0d458e12721d3f167730edc40106a6df76623167fd18&",
      keyLink:
        "https://cdn.discordapp.com/attachments/1026312923666206731/1169131485966647307/ECE220_MT2_WorksheetFA23_solutions.pdf?ex=6554498b&is=6541d48b&hm=84e936cd312d53167f40ae4969592c22aa2caba5dfb673cc95922ed7484d6561&",
    },
    {
      course: "ECE 313",
      time: "10/28 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink: "https://docs.google.com/presentation/d/1nw052Ty7WH8-kGdZTvHYT-LCIyV4OTo4eHR0djIT1YM/edit?usp=sharing",
      recordingLink:   "https://mediaspace.illinois.edu/media/t/1_8oiexu9f",
    },
    {
      course: "ECE 374B",
      time: "10/28 3:00-5:30PM",
      location: "ECEB 1002",
      slidesLink: "https://drive.google.com/file/d/19cirgmF24QO9xwP8UwXdqHf-pRrVcZF9/view?usp=sharing",
      scribblesLink: "https://drive.google.com/file/d/1ZZsszBtJo3fvqj0VmFnVqIQLp3QFzNZy/view?usp=sharing",
      recordingLink:   "https://mediaspace.illinois.edu/media/t/1_8boujegt",
    },
    {
      course: "ECE 310",
      time: "10/29 12:30-3:00PM",
      location: "ECEB 1015",
      recordingLink:   "https://mediaspace.illinois.edu/media/t/1_yof8kzea",
      slidesLink:  "https://docs.google.com/presentation/d/1HbR9sTHtezBkg0azU-Q1MWmEQHga1Ui1sxniE_pm4Mg/edit?usp=sharing",
    },
    {
      course: "ECE 330",
      time: "10/29 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink: "https://docs.google.com/presentation/d/12YqjBW0YdTzPRlnhlN-zMrCYQuc8jgf6yuyixIVVvmg/edit?usp=sharing",
      recordingLink:   "https://mediaspace.illinois.edu/media/t/1_rqbqidsb"
    },
    {
      course: "ECE 391",
      time: "11/04 3:00-5:30PM",
      location: "ECEB 1002",
    },
    {
      course: "CS 374A",
      time: "11/04 5:30-8:00PM",
      location: "ECEB 1002",
      slidesLink: "https://drive.google.com/file/d/1BVppK_jApksBTZjT8IJ_tyohV0VNBav1/view?usp=drive_link",
      recordingLink:   "https://mediaspace.illinois.edu/media/t/1_sgt8mpzt"
    },
    
    {
      course: "ECE 340",
      time: "11/05 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink: "https://docs.google.com/presentation/d/1R6lPhmtKsaX5lrs9T36xxDr5xAaKbtpJ5ktMOYihdAo/edit?usp=sharing",
      recordingLink:   "https://mediaspace.illinois.edu/media/t/1_qmnrrggr",
    },
  ],
  3: [
    {
      course: "ECE 110",
      time: "11/11 12:30-3:00PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 120",
      time: "11/11 3:00-5:30PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 210",
      time: "11/11 12:30-3:00PM",
      location: "ECEB 1015",
    },
    {
      course: "ECE 329",
      time: "11/11 3:00-5:30PM",
      location: "ECEB 1015",
    },
    {
      course: "ECE 350",
      time: "11/11 3:00-5:30PM",
      location: "ECEB 3015",
    },
    {
      course: "ECE 342",
      time: "11/12 3:00-5:30PM",
      location: "ECEB 1015",
    },
  ],
};

// When the UI should rollover stop showing the given review session
// Remember that months are zero indexed but days are not.
export const until: Record<1 | 2 | 3, Date> = {
  1: new Date(2023, 9, 5), // ends 10/5
  2: new Date(2023, 10, 5), // ends 11/5
  3: new Date(1), // Date(1) makes sure this will never be default bc it occured in the past
};

export const crammingCarnival: ReviewSession[] = [];
