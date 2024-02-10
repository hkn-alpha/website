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
  
  // Midterm 1 review sessions

  1: [
    {
      course: "ECE 210",
      time: "2/10, 12:30-3:00PM",
      location: "ECEB 1013",
      slidesLink:
        "https://docs.google.com/presentation/d/1D7qt_PjZCe-7bt2o37A4IkEdaUpQHC8OmryWWTjjGrw/edit",
      worksheetLink:
        "https://drive.google.com/file/d/161xDkxfiGE619EqR6OQTjHOOKdvNC51Q/view?usp=drive_link",
      // keyLink:
      //   "",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_hompq6wy",
    },
    {
      course: "ECE 329",
      time: "2/17, 3:00-5:30PM",
      location: "ECEB 1013",
      // slidesLink:
      //   "https://docs.google.com/presentation/d/1UPCvAUi-ZzFZ6ORe8GsolVXFSI01bNWWHf4e8tKRo10/edit?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_xz8kf7xd",
    },
    {
      course: "ECE 120",
      time: "2/11, 1:00-3:00PM",
      location: "ECEB 1002",
      // slidesLink:
      //   "https://docs.google.com/presentation/d/1I4ZS-_0Etu7jwnx0D7A4Scd7oEGkFKFMThA1Q-XDR48/edit?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/1_8aob1oz8",
    },
    {
      course: "ECE 350",
      time: "2/17, 12:30-3:00PM",
      location: "ECEB 2015",
      // slidesLink:
      //   "https://docs.google.com/presentation/d/1ZE0piNmhcMcQdak_Kk_NHYDkpmR82QnQDZGtrPL89wA/edit?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_0mq2wza9",
    },
    {
      course: "ECE 374B",
      time: "2/11, 3:00-5:30PM",
      location: "ECEB 1013",
      // slidesLink:
      //   "https://drive.google.com/file/d/17L-drxEQNKRLHoSRvSBL7QIub20A1ADJ/view?usp=sharing",
      // worksheetLink:
      //   "https://drive.google.com/file/d/1-rDiFGUKRu2xR4nK9bDSLzDKqITh17qO/view?usp=sharing",
      // keyLink:
      //   "https://drive.google.com/file/d/19_mMuWbkKN-m7gugjq7rayM811pr5v2T/view?usp=sharing",
      // keyReleaseTime: "2023-09-17T15:00:00-05:00",
      // scribblesLink:
      //   "https://drive.google.com/file/d/1LWcq3Er-9YReYfkYc9Q5sdVhOLUCsrYD/view?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/1_ohalcdnh",
    },
    {
      course: "ECE 220",
      time: "2/10, 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1bT0OEXtO2O1YNWuZl-T_vqt0Ml8n78w8zX0DjI3G64M",
      worksheetLink:
        "https://drive.google.com/file/d/1n9P8LMIEFZXKYSaQCWnhG0det1iql6zN/view?usp=drive_link",
      // keyLink:
      //   "",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_3hii29n3",
    },
    {
      course: "ECE 342",
      time: "2/11, 3:00-5:30PM",
      location: "ECEB 1015",
      // slidesLink:
      //   "https://docs.google.com/presentation/d/1luZMo6VillVmYgoIj4LHa38TeRx_EHNcbU0sOkzCyhU/",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_v4vrv3gs",
    },
    {
      course: "ECE 110",
      time: "2/17, 12:30-3:00PM",
      location: "ECEB 1002",
      // slidesLink:
      //   "https://docs.google.com/presentation/d/1Oh-aqrL1W4NiW9eirWWPyRiRd8GkcS8DU-xe6mHMP-4/edit?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_dl5om45u",
    },
    // {
    //   course: "ECE 411",
    //   time: "9/17, 3:00-5:30PM",
    //   location: "ECEB 3017",
    //   slidesLink:
    //     "https://docs.google.com/presentation/d/1j_Zn5haeTgr32OCv5dbMbQ1pwwj98LcdMG4gOxf2Gy0/edit?usp=sharing",
    //   recordingLink: "https://mediaspace.illinois.edu/media/t/1_udk1nzzl",
    // },

    // {
    //   course: "ECE 313",
    //   time: "9/23 12:30-3:00PM",
    //   location: "ECEB 1015",
    //   slidesLink:
    //     "https://docs.google.com/presentation/d/1JBbI-NtobciLy8ClZU8orgxUYxGYNwe1VF_hbzcXXb8/edit?usp=sharing",
    // },
    // {
    //   course: "ECE 391",
    //   time: "9/23 3:00-5:30PM",
    //   location: "ECEB 1002",
    // },
    // {
    //   course: "ECE 310",
    //   time: "9/24 12:30-3:00PM",
    //   location: "ECEB 1015",
    //   slidesLink:
    //     "https://docs.google.com/presentation/d/1ncav1BicR5VmJU2PyVeYhYkn6QZSKTHBdrikEqyWk_U/edit",
    // },
    {
      course: "CS 374A",
      time: "2/18 12:30-3:00PM",
      location: "ECEB 1002",
      // slidesLink:
      //   "https://drive.google.com/file/d/1ZQArHSbGCyU-WH3airOVDVfKW0v9aXuZ/view?usp=drivesdk",
    },
    {
      course: "ECE 330",
      time: "2/18 12:30-3:00PM",
      location: "ECEB 1013",
      // slidesLink:
      //   "https://docs.google.com/presentation/d/1PaWICsnZj-vrO3L6qMJKQnLIvcblDxlRES5AeYLyL7w/edit?usp=sharing",
    },
    // {
    //   course: "ECE 340",
    //   time: "10/01 3:00-5:30PM",
    //   location: "ECEB 1015",
    //   slidesLink:
    //     "https://docs.google.com/presentation/d/1wyKH0Jcpi_YmwBwWIGH7pO9yyO-pfQPm1OZyuQO5y5U/edit?usp=sharing",
    //   recordingLink: "https://mediaspace.illinois.edu/media/t/1_2rnbx347",
    // },
  ],

  // Midterm 2 review sessions

  2: [
//     {
//       course: "ECE 110",
//       time: "10/14 12:30-3:00PM",
//       location: "ECEB 1002",
//       slidesLink:
//         "https://docs.google.com/presentation/d/1dlUrP7N9YIuslbnsIuSkLNTctEXXfTMaPJ3_OE083FY/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_fy3c2bik",
//     },
//     {
//       course: "ECE 210",
//       time: "10/14 12:30-3:00PM",
//       location: "ECEB 1015",
//       slidesLink:
//         "https://docs.google.com/presentation/d/1FLWUyBAbRcMg3qChmFa6195P0i4_6bwl9HDL4GHcpYQ/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_0e2jahqc",
//     },
//     {
//       course: "ECE 120",
//       time: "10/14 3:00-5:30PM",
//       location: "ECEB 1002",
//       slidesLink:
//         "https://docs.google.com/presentation/d/1W0Ta4_LwfKXOBjj2kYrGVJ3gLCzaIWhydKWHHd_6nSQ/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_jdnxkt8n",
//     },
//     {
//       course: "ECE 329",
//       time: "10/14 3:00-5:30PM",
//       location: "ECEB 1015",
//       slidesLink:
//         "https://docs.google.com/presentation/d/1fQ2ePktve7hgtpm_QA_hhB6dLURO1pd4goiwwV81dCQ/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_vsua79wk",
//     },
//     {
//       course: "ECE 350",
//       time: "10/14 3:00-5:30PM",
//       location: "ECEB 3015",
//       slidesLink:
//         "https://docs.google.com/presentation/d/1l6_uKIay8u91N4YVJg_nCMIETB0GxrmWy0NC9qB9DGY/edit?usp=sharing",
//     },
//     {
//       course: "ECE 342",
//       time: "10/15 12:30-3:00PM",
//       location: "ECEB 1015",
//       slidesLink:
//         "https://docs.google.com/presentation/d/1pwWygOz5bBHFrVYeW0o5_k6HFDJcfIBsFW1F6MhPfkU/edit?usp=sharing",
//     },
//     {
//       course: "ECE 220",
//       time: "10/28 12:30-3:00PM",
//       location: "ECEB 1015",
//       slidesLink:
//         "https://docs.google.com/presentation/d/1V6qqxGOgnFcgI83QXwsbHh_nx_72zf6liahRgr2-jSM/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_cnn9esgh",
//       worksheetLink:
//         "https://cdn.discordapp.com/attachments/1026312923666206731/1169090514243563571/ECE220_MT2_Worksheet_1.pdf?ex=65542363&is=6541ae63&hm=94cd2674512bc59166fe0d458e12721d3f167730edc40106a6df76623167fd18&",
//       keyLink:
//         "https://cdn.discordapp.com/attachments/1026312923666206731/1169131485966647307/ECE220_MT2_WorksheetFA23_solutions.pdf?ex=6554498b&is=6541d48b&hm=84e936cd312d53167f40ae4969592c22aa2caba5dfb673cc95922ed7484d6561&",
//     },
//     {
//       course: "ECE 313",
//       time: "10/28 3:00-5:30PM",
//       location: "ECEB 1015",
//       slidesLink:
//         "https://docs.google.com/presentation/d/1nw052Ty7WH8-kGdZTvHYT-LCIyV4OTo4eHR0djIT1YM/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_8oiexu9f",
//     },
//     {
//       course: "ECE 374B",
//       time: "10/28 3:00-5:30PM",
//       location: "ECEB 1002",
//       slidesLink:
//         "https://drive.google.com/file/d/19cirgmF24QO9xwP8UwXdqHf-pRrVcZF9/view?usp=sharing",
//       scribblesLink:
//         "https://drive.google.com/file/d/1ZZsszBtJo3fvqj0VmFnVqIQLp3QFzNZy/view?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_8boujegt",
//     },
//     {
//       course: "ECE 310",
//       time: "10/29 12:30-3:00PM",
//       location: "ECEB 1015",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_yof8kzea",
//       slidesLink:
//         "https://docs.google.com/presentation/d/1HbR9sTHtezBkg0azU-Q1MWmEQHga1Ui1sxniE_pm4Mg/edit?usp=sharing",
//     },
//     {
//       course: "ECE 330",
//       time: "10/29 3:00-5:30PM",
//       location: "ECEB 1015",
//       slidesLink:
//         "https://docs.google.com/presentation/d/12YqjBW0YdTzPRlnhlN-zMrCYQuc8jgf6yuyixIVVvmg/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_rqbqidsb",
//     },
//     {
//       course: "ECE 391",
//       time: "11/04 3:00-5:30PM",
//       location: "ECEB 1002",
//     },
//     {
//       course: "CS 374A",
//       time: "11/04 5:30-8:00PM",
//       location: "ECEB 1002",
//       slidesLink:
//         "https://drive.google.com/file/d/1BVppK_jApksBTZjT8IJ_tyohV0VNBav1/view?usp=drive_link",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_sgt8mpzt",
//     },

//     {
//       course: "ECE 340",
//       time: "11/05 3:00-5:30PM",
//       location: "ECEB 1015",
//       slidesLink:
//         "https://docs.google.com/presentation/d/1R6lPhmtKsaX5lrs9T36xxDr5xAaKbtpJ5ktMOYihdAo/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_qmnrrggr",
//     },
  ],

// Midterm 3 review sessions

  3: [
//     {
//       course: "ECE 110",
//       time: "11/11 12:30-3:00PM",
//       location: "ECEB 1002",
//       slidesLink: "https://docs.google.com/presentation/d/1TK59nHz3wMp3DFaRmbxYKBj30dlgWCMSkdk1fd4SE5M/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_28d3r48a",
//     },
//     {
//       course: "ECE 120",
//       time: "11/11 3:00-5:30PM",
//       location: "ECEB 1002",
//       slidesLink: "https://docs.google.com/presentation/d/1FsBrROy3kXH8TffpkNyq5T79h9DKE976UTF9LFGGe1Q/edit?usp=sharing",
//       worksheetLink: "https://docs.google.com/document/d/14zn0CNY-1P2i41quMAt3TmFlfz4lYQrqWY9Yz4bTkZk/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_yf8f1jf9",
//     },
//     {
//       course: "ECE 210",
//       time: "11/11 12:30-3:00PM",
//       location: "ECEB 1015",
//       slidesLink: "https://docs.google.com/presentation/d/11AKUDRHA9JxM0WGo5J0FWAdvKTIY2JJ5KQRySb9wzpg/edit?usp=sharing", 
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_fnc4grik",
//     },
//     {
//       course: "ECE 329",
//       time: "11/11 3:00-5:30PM",
//       location: "ECEB 1015",
//       slidesLink: "https://docs.google.com/presentation/d/1-SlxVeSnWRabh_JpPueFAXS_oZNMpPXAKxwZDPCOt8Y/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_9i6aubp9",
//     },
//     {
//       course: "ECE 350",
//       time: "Cancelled",
//       location: "N/A",
//       slidesLink: "https://docs.google.com/presentation/d/1DRcFt1Yiec-REI1L-pTcy06_AGoqrz3TwaTNV6gaO-Q/edit?usp=sharing"
//     },
//     {
//       course: "ECE 342",
//       time: "11/12 3:00-5:30PM",
//       location: "ECEB 1015",
//       slidesLink: "https://docs.google.com/presentation/d/1oo5I7Y-vQCH7pBZH1LO4gd48pXrmOBaND1xB2vL91to/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_m9xjoixx"
//     },
//     {
//       course: "ECE 374B",
//       time: "Prerecorded",
//       location: "N/A",
//       slidesLink: "https://drive.google.com/file/d/1k10ZIkoo3lJk4qpopX3AoQFPiJAM48FE/view?usp=sharing",
//       scribblesLink: "https://drive.google.com/file/d/1sSDGObzFvQ136ib-DUcnXO19KXCdSMWH/view?usp=sharing",
//       worksheetLink: "https://drive.google.com/file/d/1riUxlkpnRqSBwR0lBSm5GT7qKCT0EJr4/view?usp=sharing",
//       keyLink: "https://drive.google.com/file/d/1Pxkpyi-X9JGThPWZ5qw9J8oIo3EBGUCl/view?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_odrz04ix"
//     }
  ],
};

// When the UI should rollover stop showing the given review session
// Remember that months are zero indexed but days are not.
export const until: Record<1 | 2 | 3, Date> = {
  1: new Date(2024, 2, 1), // ends 3/1
  2: new Date(2024, 3, 15), // ends 4/15
  3: new Date(2024, 3, 29), // Date(1) makes sure this will never be default bc it occured in the past
};

// Final review sessions

export const crammingCarnival: ReviewSession[] = [
//   {
//     course: "ECE 120",
//     time: "12/6 7:00-9:00PM",
//     location: "ECEB 1002",
//     worksheetLink: "https://drive.google.com/file/d/1wwK8ZB5nmy4Zk-7LNGmxwqdmR80CIbr-/view?usp=drive_link",
//     keyLink:  "https://drive.google.com/file/d/1bteNnUzgHJwyHverdWQyiCVe1nTPNbdu/view?usp=drive_link",
//   },
//   {
//     course: "CS 374A",
//     time: "12/7 12:30-3:00PM",
//     location: "ECEB 1002",
//     slidesLink: "https://drive.google.com/file/d/1cKqBNrH7k2fnFHp06Y11nUkp9K3lOE7O/view?usp=drive_link",
//     scribblesLink: "https://drive.google.com/file/d/1m4SSRyVtapDuvSFK7KXoYJiQlFZAoaE3/view?usp=drive_link",
//     worksheetLink: "https://drive.google.com/file/d/1z94MWnPofl8wmcb7eeA_bynZDmh-EQ-X/view?usp=drive_link",
//     keyLink: "https://drive.google.com/file/d/1tEgoYL3vyryEalS5us-mBotVc1_b0K5F/view?usp=sharing",
//   },
//   {
//     course: "ECE 342",
//     time: "12/7 12:30-3:00PM",
//     location: "ECEB 1015",
//     worksheetLink: "https://drive.google.com/file/d/1UcKpc7HTjhum5sMqn-58iIoTofl4I4aH/view?usp=drive_link",
//     keyLink: "https://drive.google.com/file/d/1FsARSjg43yp00vyp2j6HcICw28m8Kwhr/view?usp=drive_link",
//   },
//   {
//     course: "ECE 374B",
//     time: "12/9 12:30-3:00PM",
//     location: "ECEB 1002",
//     worksheetLink: "https://drive.google.com/file/d/1z94MWnPofl8wmcb7eeA_bynZDmh-EQ-X/view?usp=drive_link",
//     keyLink: "https://drive.google.com/file/d/1tEgoYL3vyryEalS5us-mBotVc1_b0K5F/view?usp=sharing",
//     slidesLink: "https://drive.google.com/file/d/1cKqBNrH7k2fnFHp06Y11nUkp9K3lOE7O/view?usp=drive_link",
//     recordingLink: "https://mediaspace.illinois.edu/media/t/1_35kv49ft",
//   },
//   {
//     course: "ECE 220",
//     time: "12/9 12:30-3:00PM",
//     location: "ECEB 1013",
//     worksheetLink: "https://drive.google.com/file/d/1VdE-S1HzjYFab-lisP3m3picBoPPt_Ld/view?usp=drive_link",
//     keyLink: "https://drive.google.com/file/d/1jZwPaOV9NNgEI051_dW5f7NeIK-WLCdg/view?usp=drive_link",
//     slidesLink: "https://docs.google.com/presentation/d/12HG697kACXEFVtFxx99-T8gVxCguXIe-C98YC_fOkto/edit?usp=sharing",
//     recordingLink: "https://mediaspace.illinois.edu/media/t/1_fdcs3o5t",
//   },
//   {
//     course: "ECE 330",
//     time: "12/9 12:30-3:00PM",
//     location: "ECEB 1015",
//     worksheetLink: "https://drive.google.com/file/d/1b0vOm0revQ5jLFS1fG3YjBnUQY5R7lUZ/view?usp=drive_link",
//     keyLink: "https://drive.google.com/file/d/1uHtzwOenUVr7TzLSINaNW1jqKfPwTyho/view?usp=drive_link",
//     slidesLink: "https://docs.google.com/presentation/d/1pmWpt3XFVYnzP2hMZBeHgilXTo5t4--U474ELiM6oJc/edit?usp=drive_link",
//     recordingLink: "https://mediaspace.illinois.edu/media/t/1_u7zz6edp"

//   },
//   {
//     course: "ECE 391",
//     time: "12/9 3:00-5:30PM",
//     location: "ECEB 1002",
//   },
//   {
//     course: "ECE 210",
//     time: "12/9 3:00-5:30PM",
//     location: "ECEB 1013",
//     worksheetLink: "https://drive.google.com/file/d/15RmW9bj7iUgdrgpbQ-UTAzFoZdXlY6zx/view?usp=sharing",
//     keyLink: "https://drive.google.com/file/d/1XXM_ec2DjGvA8EoK_mpErtUEabeKNGTR/view?usp=drive_link",
//     slidesLink: "https://docs.google.com/presentation/d/1yUOEXgJFhq3aQyJxZSa1z5dKIqCRmHiRzQjn7hOwTc8/edit?usp=sharing",
//     recordingLink: "https://mediaspace.illinois.edu/media/t/1_cui9ujoj",
    
//   },
//   {
//     course: "ECE 310",
//     time: "12/9 3:00-5:30PM",
//     location: "ECEB 1015",
//     worksheetLink: "https://drive.google.com/file/d/1eWzrF2HjawEUrbnELsJMKekOi6MRw2Tf/view?usp=drive_link",
//     keyLink: "https://drive.google.com/file/d/1qThTGxPZAe1ESIDprnFJIshJmt_ZWM8_/view?usp=drive_link",
//     slidesLink: "https://docs.google.com/presentation/d/1iMMu6iwAZQYGhq-r6cMGx05Qp3ELlfphXmLcVxRBH6I/edit?usp=sharing",
//     recordingLink: "https://mediaspace.illinois.edu/media/t/1_qly5h9qb",
//   },
//   {
//     course: "ECE 110",
//     time: "12/10 12:30-3:00PM",
//     location: "ECEB 1002",
//     worksheetLink: "https://drive.google.com/file/d/1YPiJXkUJHWZ3ES_rpNWpfaRbbfqJTOz2/view?usp=drive_link",
//     keyLink: "https://drive.google.com/file/d/1E3gmO7KG4qtiMCYEyeerOll93LG5qCUo/view?usp=drive_link",
//     slidesLink: "https://docs.google.com/presentation/d/1pQwrrlihl2TA6hj23iHFEoOXtii6RYdP3jiT8vPooX4/edit?usp=sharing",
//     recordingLink: "https://mediaspace.illinois.edu/media/t/1_d90ihf5u",
    
//   },
//   {
//     course: "ECE 313",
//     time: "12/10 12:30-3:00PM",
//     location: "ECEB 1013",
//     worksheetLink: "https://drive.google.com/file/d/12n0mXMrxoaXKV7DPtQjCffptWstx6OEc/view?usp=drive_link",
//     keyLink: "https://drive.google.com/file/d/1OPlYA3oy1bdtlXXt0kbUT2XJrr1jVqbh/view?usp=drive_link",
//     slidesLink: "https://docs.google.com/presentation/d/1QyfV6RLjtbeXq2waUGUnJ_wpEt-Em90Jq_Dm66o7B7g/edit?usp=sharing",
//     recordingLink: "https://mediaspace.illinois.edu/media/t/1_1mp2tdi1",
//   },
//   {
//     course: "ECE 340",
//     time: "12/10 12:30-3:00PM",
//     location: "ECEB 1015",
//     worksheetLink: "https://drive.google.com/file/d/1oGG--Yp1nswdJ1zZ5VtGVbvUKJhm8E-5/view?usp=drive_link",
//     keyLink: "https://drive.google.com/file/d/1Ek-RMSNItEX5AYL_0O6ephUo229Rt4QE/view?usp=drive_link",
//     slidesLink: "https://docs.google.com/presentation/d/1RjByDraTIEMu5o8SxO1ALjgB6ze0omuZFRLgfXQj2c8/edit?usp=sharing",
//     recordingLink: "https://mediaspace.illinois.edu/media/t/1_y188ysjq",
//   },
//   {
//     course: "ECE 329",
//     time: "12/10 3:00-5:30PM",
//     location: "ECEB 1015",
//     worksheetLink: "https://drive.google.com/file/d/1G8TNfdJiIRcoQL_v-SzW_QT2Pk4AdXZt/view?usp=drive_link",
//     keyLink: "https://drive.google.com/file/d/1luk6OfXq2o1JU-XDtWCCATPglUWQWCDU/view?usp=drivesdk",
//     slidesLink: "https://docs.google.com/presentation/d/10M8YcLLaTNhOpJAhnqRpe415OuawCfTK0CjWOQ2fyeY/edit?usp=sharing",
//     recordingLink: "https://mediaspace.illinois.edu/media/t/1_gprcymep",

//   },
//   {
//     course: "ECE 350",
//     time: "12/10 3:00-5:30PM",
//     location: "ECEB 3015",
//     worksheetLink: "https://drive.google.com/file/d/1NM_ne1OrxNkfB0J8YwpVy77nGBFS8yes/view?usp=drive_link",
//     keyLink: "https://drive.google.com/file/d/1RfsRP9vZRsOrKS9ftAgYUcaIhOqZN1kA/view?usp=drive_link",
//     slidesLink: "https://docs.google.com/presentation/d/1p1QU0hCfdf1U13_xuby_oBPQgea8AIMYFjcUkDq1y6Q/edit?usp=sharing",
//   },
];
