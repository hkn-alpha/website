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

const timeslots = {
  A: "12:30 - 3:00PM",
  B: "3:00 - 5:30PM",
  C: "2:00 - 5:00PM"
}

export const reviewSessions: Record<1 | 2 | 3, ReviewSession[]>= {
    
  // Midterm 1 review sessions
  
  1: [
    {
      course: "ECE 110",
      time: "9/20, " + timeslots["A"],
      location: "ECEB 1002",
      slidesLink: "https://docs.google.com/presentation/d/1WTvsCjM3ZLmWROSjiXIKaMCjrihn2Jrp/edit?usp=sharing&ouid=114909937515227017827&rtpof=true&sd=true",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_r0svsi14",
      scribblesLink: "https://drive.google.com/file/d/1_EMLJKWV8qpk49hCtWoeFkaZ5O86DRfn/view?usp=sharing"
    },
    {
      course: "ECE 120",
      time: "Hosted By Class",
      location: "Hosted By Class",
      // time: "9/22, 12:30-2:30PM",
      // location: "ECEB 1013",
      // worksheetLink: "https://drive.google.com/file/d/1MzlyALmrmF9-fwIr2RnWiPkjACsG0vPy/view?usp=drive_link",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_u9nfhpai",
      // slidesLink: "https://docs.google.com/presentation/d/1thwRet9spXwhnKJMuICfc4p4Yp1Ulo-0p89rDok24G4/edit#slide=id.p",
      // keyLink: "https://drive.google.com/file/d/1npsnA239HdGFQji9nd8rGlpwi2spUxzW/view?usp=sharing",
    },
    {
      course: "ECE 210",
      // time: "TBD",
      location: "ECEB 1015",
      time: "9/20, " + timeslots["B"],
      worksheetLink: "https://drive.google.com/file/d/1O6ZFvXh96aDgWirLl0rnfmHARDG2OTHM/view?usp=sharing",
      slidesLink: "https://docs.google.com/presentation/d/1ZNkj9BHRA2T1fcJvEghvdrxWfxUJVAtG/edit?usp=sharing&ouid=114909937515227017827&rtpof=true&sd=true",
      keyLink: "https://drive.google.com/file/d/119A7bHiqQiaSEU2D4RLGAuqntrZ9wmqa/view?usp=sharing",
      scribblesLink: "https://drive.google.com/file/d/1nBktwRO2-inPuV3EoDtQ85Mq5Vcrbkc2/view?usp=sharing",
      // location: "ECEB 1013",
      recordingLink:"https://mediaspace.illinois.edu/media/t/1_gxvyr4c9"
    },
    {
      course: "ECE 220",
      //time: "TBD",
      location: "ECEB 1002",
      time: "9/21, " + timeslots["B"],
      // location: "ECEB 1002",
      worksheetLink: "https://drive.google.com/file/d/1JkROts44OUQ7JnNYFdzAP4EZ1xlM7VwU/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_s3qqm0nc",
      slidesLink: "https://docs.google.com/presentation/d/1-xBhlkA78eSVJ9DylGd29rhBBBEWHAVc/edit?usp=drive_link&ouid=114909937515227017827&rtpof=true&sd=true",
      keyLink: "https://drive.google.com/file/d/1Q-27VqNKuLOtL_KHgistLxKPNC2VSiw_/view?usp=sharing"
    },
    {
      course: "ECE 310",
      //time: "TBD",
      location: "ECEB 1015",
      time: "9/28, " + timeslots["B"],
      // location: "ECEB 1013",
      //slidesLink:"https://docs.google.com/presentation/d/1R08OZnIAiqTT_o0YlK4lCyCFPtuqeMiAoe8lNvIi6-g/edit?usp=sharing",
      //recordingLink: "https://mediaspace.illinois.edu/media/t/1_k8jwax9d"
    },
    {
      course: "ECE 313",
      //time: "TBD",
      location: "ECEB 1002",
      time: "10/4, " + timeslots["B"],
      // location: "ECEB 1002",
      //slidesLink: "https://docs.google.com/presentation/d/19l5Q0Mjm69xzzUl7FrrWWUm31HYSmzojdz-zmIBDEFc/edit?usp=sharing",
      //recordingLink: "https://mediaspace.illinois.edu/media/t/1_9ncupom3"
    },
    {
      course: "ECE 329",
      //time: "TBD",
      location: "Hosted by Staff",
      time: "Hosted by Staff",
      // location: "ECEB 1013",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_8jg8q18m",
      // slidesLink: "https://docs.google.com/presentation/d/1cfZuQMG5YbsN0gTOjXI0eaAMsLecXsowMUUbrpWnshY/edit?usp=sharing"
    },
    {
      course: "ECE 330",
      time: "9/27, " + timeslots["B"],
      location: "ECEB 1013",
      //slidesLink: "https://docs.google.com/presentation/d/1Ou5T4czG2p9rtF7ImFrKNwR_Hw9r1scYGgJeJ0PUhus/edit?usp=sharing",
      //recordingLink: "https://mediaspace.illinois.edu/media/t/1_xfxf1cgm"
    },
    {
      course: "ECE 340",
      //time: "TBD",
      location: "ECEB 1015",
      time: "10/5, " + timeslots["B"],
      // location: "ECEB 1002",
      //recordingLink: "https://mediaspace.illinois.edu/media/t/1_fgsc2kgj",
      //slidesLink: "https://docs.google.com/presentation/d/1C0HQQyX06zU-OHyXn4jSx28pRKEzV3pKMmOWJcYgx_8/edit?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/1RxtcBlQjLwXuVIMYR6S0X7im1-0V1Bit/view?usp=drive_link"
    },
    {
      course: "ECE 342",
      time: "9/20, " + timeslots["B"],
      location: "ECEB 1013",
      // time: "9/21, 12:30-2:30PM",
      // location: "ECEB 1013",
      scribblesLink: "https://drive.google.com/file/d/1HQ48wLdAhkKxsjBbKFSpyD3mFbhZ9L3A/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_bpomyaz8",
      slidesLink: "https://docs.google.com/presentation/d/1YyydPBu5BG1j07NQnoa8xAqfyMY6wGeq/edit?usp=sharing&ouid=114909937515227017827&rtpof=true&sd=true"
    },
    {
      course: "CS 374A (Hosted by ACM)",
      //time: "TBD",
      location: "DCL 1320",
      time: "9/27, 12:00 - 3:00PM",
      // location: "ECEB 1002",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_qu1d7lfy",
      // slidesLink: "https://drive.google.com/file/d/162vuI5yDVvAEMmUgOwGhthXhEdILJ_Lw/view?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/1Do5wLq4I6OiVzKQHTsEuyKDxBWdwfnwe/view?usp=sharing",
    },
    {
      course: "ECE 374B",
      //time: "TBD",
      location: "ECEB 1015",
      time: "9/21, " + timeslots["B"],
      slidesLink: "https://drive.google.com/file/d/1tXm1lNcqi4ELQpWtfsfWXzvIRPPRW3n3/view?usp=sharing",
      // location: "ECEB 1002",
      //slidesLink: "https://drive.google.com/file/d/17L-drxEQNKRLHoSRvSBL7QIub20A1ADJ/view",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_wf3i1rhm"
    },
    {
      course: "ECE 391",
      time: "9/27, 2:00 - 4:00PM",
      location: "ECEB 1002",
      slidesLink: "Hosted By Course Staff",
    },
    
    // {
    //   course: "ECE 408",
    //   //time: "TBD",
    //   location: "ECEB 1002",
    //   time: "3/1, 3:00-5:30PM",
    //   // location: "ECEB 1002",
    //   //recordingLink: "https://mediaspace.illinois.edu/media/t/1_8plxq3kn",
    //   //slidesLink: "https://drive.google.com/file/d/1Odf4N4U0ZFzdI10nU8UDhnZfbXecSAph/view?usp=sharing408"
    // },
    // {
    //   course: "ECE/CS 438",
    //   //time: "TBD",
    //   location: "ECEB 1015",
    //    time: "3/8, 12:30-2:30PM",
    //   // location: "ECEB 1013",
    //   // recordingLink: "https://mediaspace.illinois.edu/media/t/1_zr2finr9",
    //   // scribblesLink: "https://academic.acm.illinois.edu/assets/cs438/fa24/mt1/pdf/ACM_438_MT1_Review_scribbles.pdf",
    // },
    {
      course: "ECE 411",
      //time: "TBD",
      location: "ECEB 1013",
      time: "9/27, " + timeslots["A"],
      // location: "ECEB 1002",
      //recordingLink: "https://mediaspace.illinois.edu/media/t/1_9yoy58c6",
      //slidesLink: "https://docs.google.com/presentation/d/1umRdm6g6jMtTdmjKkQ4TOy9RG-BespwyCiBSjszgNoM/edit?usp=sharing"
    },
    {
      course: "ECE 486",
      //time: "TBD",
      location: "ECEB 1015",
      time: "10/4 , 3:00-5:00PM",
      // location: "ECEB 1002",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_yrh3la3k",
      // slidesLink: "https://docs.google.com/presentation/d/1umRdm6g6jMtTdmjKkQ4TOy9RG-BespwyCiBSjszgNoM/edit#slide=id.p"
    },
    // {
    //   course: "ECE 489",
    //   time: "3/8, " + timeslots["B"],
    //   location: "ECEB 1015",
    //   // time: "10/13, 12:30-2:30PM",
    //   // location: "ECEB 1002",
    //   // slidesLink: "https://docs.google.com/presentation/d/1RxGG7Xf054iLV-8icGPAlUTB2qeHHKJSVdlnov44-80/edit?usp=sharing",
    //   // recordingLink: "https://mediaspace.illinois.edu/media/t/1_iz7cqfvj",
    // },
  ],

  //Midterm 2 review sessions

  2: [
    {
      course: "ECE 110",
      time: "3/29, " + timeslots["A"],
      location: "ECEB 1002",
      // time: "10/20, 3:00-5:00PM",
      // location: "ECEB 1002",
      // slidesLink: "https://docs.google.com/presentation/d/1ANp3B_RQjOAzlhKPM589kiZbGWoK8k8I4WEluFpwCq0/edit?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/1kaBXfsxJntD-N6sVD8HOFJR0ECKJxUmZ/view?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_o73vl37e",
    },
    {
      course: "ECE 120",
      time: "Hosted by Course Staff",
      location: "Hosted by Course Staff",
      // time: "10/20, 12:30-2:30PM",
      // location: "ECEB 1002",
      // slidesLink: "https://docs.google.com/presentation/d/1pj2_GGltCo2jRIzTmndIn-psupwfPDSnvmaFpNJurVk/edit?usp=sharing",
      // worksheetLink: "https://drive.google.com/file/d/1eF9-TfyRcv717JLg4CeDIaC1DkHCsYOe/view?usp=sharing",
      // keyLink: "https://drive.google.com/file/d/13BSuHFJMptg7eiuPaET7iO7c8c3ljFqY/view?usp=sharing",
      // recordingLink: 'https://mediaspace.illinois.edu/media/t/1_8qn9l07n'
    },
    {
      course: "ECE 210",
      time: "3/24, 5:00-7:30 PM",
      location: "ECEB 1013",
      // time: "10/20, 3:00-5:00PM",
      // location: "ECEB 1013",
      // slidesLink: "https://docs.google.com/presentation/d/1EtBuQC3HtP7tXVFpdgbNQrAK_5gQl8ow/edit?usp=sharing&ouid=114909937515227017827&rtpof=true&sd=true",
      // scribblesLink: "https://drive.google.com/file/d/141rB6V7uGe4xj-dPNHt7iHBzFMR_Yn26/view?usp=sharing",
      // recordingLink: 'https://mediaspace.illinois.edu/media/t/1_pzu1094e',
    },
    {
      course: "ECE 220",
      time: "4/6, " + timeslots["A"],
      location: "ECEB 1002",
      // time: "10/27, 3:00-5:00PM",
      // location: "ECEB 1002",
      // slidesLink: "https://docs.google.com/presentation/d/1xc2H24O0wBflOJ7pRLNBUIWaEs48H8Mz8RC8TP1FG-E/edit?usp=sharing",
      // worksheetLink: "https://drive.google.com/file/d/19Ci9FdEZylUra50BCvze6yylVxnml08o/view?usp=drive_link",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_8a0i32qa",
      // keyLink: "https://drive.google.com/file/d/1DA7txNMtkDsrlfysFsKr3m95My6mqGnT/view?usp=drive_link",
      
    },
    {
      course: "ECE 310",
      time: "4/5, " + timeslots["A"],
      location: "ECEB 1002",
      // time: "11/03, 3:00-5:00PM",
      // location: "ECEB 1013",
      // slidesLink: "https://docs.google.com/presentation/d/1EpYO2OxbcxIlWUp-gCOdczbsKOMB5IvfTmCKmQU6lEk/edit?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_rnzwu4ra",
    },
    {
      course: "ECE 313",
      time: "Cancelled",
      location: "Cancelled, old recording provided",
      // time: "11/03, 3:00-5:00PM",
      // location: "ECEB 1002",
      // slidesLink: "https://docs.google.com/presentation/d/1jYLP52HUwiqrYyPU4Izb9404QtzaYrZAPm4VnO_DEXo/edit?usp=sharing",
      // worksheetLink: "https://drive.google.com/file/d/1mBGVoN3EIE-K5ckPHjrQtdxplw1Fj0q5/view?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_2vmyhndm", // this is an old video
    },
    {
      course: "ECE 329",
      time: "Hosted by Staff",
      location: "Hosted by Staff",
      // time: "10/27, 3:00-5:00PM",
      // location: "ECEB 1013",
      // slidesLink: "https://docs.google.com/presentation/d/1k-W7ONZTiSYtAIOWgX_ucW0cgIBprou28fFMKzX8R6E/edit#slide=id.p",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_kry0oyjz",
    },
    {
      course: "ECE 330",
      time: "4/6, " + timeslots["A"],
      location: "ECEB 1015",
      // time: "11/03, 12:30-2:30PM",
      // location: "ECEB 1013",
      // slidesLink: "https://docs.google.com/presentation/d/1uW0145AcWdDptKZFOc1tOSPSdagzi_hpSdNq9zSPdI0/edit?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/16nidHUgBV9Fjac1yg75pTPiCek6iGe8_/view?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_6xdgx0l3",
    },
    {
      course: "ECE 340",
      time: "4/13, " + timeslots["B"],
      location: "ECEB 1015",
      // time: "11/10, 12:30-2:30PM",
      // location: "ECEB 1013",
      // slidesLink: "https://docs.google.com/presentation/d/1-sDLULISjV3wtzBqL1x4DznbLsd7v2cS0BKE6W3C7e4/edit?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/11nH6Dj_LMVue9-J0vcmd21FYd6oQcR8_/view?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_dqfq3149",
    },
    {
      course: "ECE 342",
      time: "3/24, 5:00-7:30 PM",
      location: "ECEB 1015",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_j3no6sp8",
      // scribblesLink: "https://drive.google.com/file/d/1GqrO_lFo7YKQJuKQLliPEZPeZ9oxzAlE/view?usp=sharing",
      // slidesLink: "https://docs.google.com/presentation/d/1rfuhbrXduTzak4xZpl92HTGRV75o8-B0fCDeHi_rTdU/edit?usp=sharing",

     },
//     {
//       course: "ECE 350",
//       time: "10/14, 3:00-5:30PM",
//       location: "ECEB 3015",
//       slidesLink:
//         "https://docs.google.com/presentation/d/1l6_uKIay8u91N4YVJg_nCMIETB0GxrmWy0NC9qB9DGY/edit?usp=sharing",
//     },
    {
      course: "CS 374A",
      time: "4/12, " + timeslots["B"],
      location: "TBD",
    //   time: "11/10, 12:30-2:30PM",
    //   location: "ECEB 1002",
    //   slidesLink: "https://drive.google.com/file/d/1CO_oQbFAQm0uaQp5HjGQrGlelswYrJjv/view?usp=sharing",
    //   scribblesLink: "https://academic.acm.illinois.edu/assets/cs374a/fa24/mt2/pdf/ACM_CS_374A_MT2_Review_scribs.pdf",
    //   recordingLink: "https://illinois.zoom.us/rec/play/WwI4uNbV2ani_i0HmU8Cq1Zk--vUbC69bOEZJoR9gSlGGSzUyJZH-iKlDBDPEP4jo8jn60tlTyamQaNS.fULatEDspSRgc1is?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fillinois.zoom.us%2Frec%2Fshare%2FUZUP0dE9Z6wQVWfOtuJE_Xc9CJHQtVCtYapznfgiBUM2W1aKu7dv847jr06fhmE.rGu5fHCAVGk0Hbwh",
     },
    {
      course: "ECE 374B",
      time: "Cancelled",
      location: "Cancelled",
      // time: "11/03, 12:30-2:30PM",
      // location: "ECEB 1002",
      // slidesLink: "https://drive.google.com/file/d/1HLcP5ff9SwwOEbzDbIeyF2Ep0XiGk96l/view?usp=sharing",     
      // scribblesLink: "https://drive.google.com/file/d/1h5CEVdjpaCNrD9B-wGt7sBmfUMS4JEZt/view?usp=sharing",
    },
   {
      course: "ECE 408",
      time: "5/3, " + timeslots["B"],
      location: "TBD",
      // time: "10/13, 3:00-5:00PM",
      // location: "ECEB 1002",
      // slidesLink: "https://drive.google.com/file/d/1MxDHuwNoxpKh1uKjRigo43SlPPdGwJm0/view?usp=drive_link",
    },
    {
      course: "ECE 411",
      time: "3/29, " + timeslots["B"],
      location: "ECEB 1002",
      // slidesLink: "https://docs.google.com/presentation/d/1RxGG7Xf054iLV-8icGPAlUTB2qeHHKJSVdlnov44-80/edit?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_fxytfy22",
    },
    // {
    //   course: "ECE/CS 438",
    //   time: "TBD",
    //   location: "TBD",
    //   // time: "10/26, 12:30-2:30PM",
    //   // location: "ECEB 1013",
    //   // recordingLink: "https://mediaspace.illinois.edu/media/t/1_zr2finr9",
    //   // scribblesLink: "https://academic.acm.illinois.edu/assets/cs438/fa24/mt1/pdf/ACM_438_MT1_Review_scribbles.pdf",
    //   // slidesLink: "https://drive.google.com/file/d/1RqSnWJsyhM_CvzVChLeQ3l6vumhbuaii/view?usp=drive_link",

    // },
    {
      course: "ECE 486",
      time: "4/6, " + timeslots["B"],
      location: "ECEB 1015",
      // time: "10/13, 12:30-2:30PM",
      // location: "ECEB 1002",
      // slidesLink: "https://docs.google.com/presentation/d/1RxGG7Xf054iLV-8icGPAlUTB2qeHHKJSVdlnov44-80/edit?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_13v27142",
    },
    
    
  ],

// Midterm 3 review sessions

  3: [
    {
      course: "ECE 110",
      time: "4/26, " + timeslots["B"],
      location: "ECEB 1015",
      // time: "11/17, 3:00-5:00PM",
      // location: "ECEB 102",
      // slidesLink: "https://drive.google.com/file/d/19XBS0LriQFRYxhls_Kgny_vtxahlbSLs/view?usp=sharing",
      // recordingLink:'https://mediaspace.illinois.edu/media/t/1_8qlal3ub',
      // scribblesLink: "https://drive.google.com/file/d/1jVTbYx0zbNMvkyjpsVVSvFBHGdL-_Mok/view?usp=sharing"

    },
    {
      course: "ECE 120",
      time: "Hosted by Course Staff",
      location: "Hosted by Course Staff",
      // time: "11/17, 12:30-2:30PM",
      // location: "ECEB 1002",
      // slidesLink: "https://drive.google.com/file/d/1rdAxtXYECrMvSjg2tFp8MeFjwqz3TEMB/view?usp=sharing",
      // recordingLink:'https://mediaspace.illinois.edu/media/t/1_6v0vk499',
      // worksheetLink: "https://drive.google.com/file/d/14BRfL6vqx8xYCb8LhseqFqLdu4gAknNV/view?usp=drive_link",
      // keyLink: "https://drive.google.com/file/d/1zd-pW1A2F6JVx2rfQK_uzj_TP4o1BXBX/view?usp=drive_link"
    },
    {
      course: "ECE 210",
      time: "4/20, " + timeslots["A"],
      location: "ECEB 1015",
      // time: "11/17, 3:00-5:00PM",
      // location: "ECEB 1013",
      // slidesLink: "https://docs.google.com/presentation/d/1NGBMkw2TQjmQsf4uSErzNzXixC86PnnPvqev0sqbUxg/edit?usp=sharing",
      // recordingLink: 'https://mediaspace.illinois.edu/media/t/1_aehbtfe8',
      // scribblesLink: "https://drive.google.com/file/d/16qfo38tLxu04U28Bi2U5JI3bxetZRGMk/view?usp=sharing",
    },
    {
      course: "ECE 329",
      time: "Hosted by Staff",
      location: "Hosted by Staff",
      // time: "Cancelled",
      // location: "Cancelled",
    },
    {
      course: "ECE 342",
      time: "4/20, " + timeslots["B"] ,
      location: "ECEB 1015",
      // time: "11/17, 12:30-2:30PM",
      // location: "ECEB 1013",
      // slidesLink: "https://docs.google.com/presentation/d/1o-OvK3cRHLmN9cObiAZqc7tIq1rxOtG6NQFYv0NJ0Ns/edit?usp=sharing",
      // recordingLink:'https://mediaspace.illinois.edu/media/t/1_yza8t1e8',
      // scribblesLink: "https://drive.google.com/file/d/1SH3SsoVrOHvtMxBxPZrpOMXhm1HVehqA/view?usp=drive_link"

    },
    {
      course: "ECE 374B",
      time: "Cancelled",
      location: "Cancelled",
      // time: "12/01, 12:30-2:30PM",
      // location: "ECEB 2015",
      // slidesLink: "https://drive.google.com/file/d/1_dTPpDR2eOytHFa51vF1SjfGXnnsEJPJ/view?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/1D7IKMFqFiCZmyWV34G1UxsfJEDJyoL7y/view?usp=sharing",
      // recordingLink: "https://illinois.zoom.us/rec/play/S2OQDukkNTBpsAu1q4dRo83699qoD6qXViLV5z-Ss9jF92tQry_Us0utAk_NfF4lUwqkOoiYp6ywbwbQ.C11YOjGW16Plgrkc?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fillinois.zoom.us%2Frec%2Fshare%2FPMgoORxPdbLfn8-_kd6vhb8Y0Ls6oUgtWgXnMNGWoc8EbMparW_bRFGyaocqgga0.0isgU01snlleT6bi",
    }
  ],
 };

// When the UI should rollover stop showing the given review session
// All Midterms show up on the website, this sets priority of what shows up on the page
// Remember that months are zero indexed but days are not.
export const until: Record<1 | 2 | 3, Date> = {
  1: new Date(2025, 9 , 12),
  2: new Date(2025, 10, 10), // ends 11/10
  3: new Date(2025, 11, 13), // Date(1) makes sure this will never be default bc it occured in the past
};

// Final review sessions

 export const crammingCarnival: ReviewSession[] = [
  {
    course: "ECE 110",
    time: "5/8, " + timeslots["B"],
    location: "1002",
    // time: "12/12 10:00 AM-12:00PM",
    // location: "ECEB 1002",
    //slidesLink: "https://docs.google.com/presentation/d/1xOmfKUggvRTa3h7Vz5qLXt9vT9DkJbpGQLiWbrJxJrc/edit?usp=sharing",
    //worksheetLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece110/final/worksheet.pdf",
    //keyLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece110/final/solutions.pdf",
    //scribblesLink: "https://drive.google.com/file/d/1lQEncdub2hvT8CSZqYQU2x1haK3In_u1/view?usp=sharing",
    //recordingLink: "https://mediaspace.illinois.edu/media/t/1_vst27vxe"
  },
  {
    course: "ECE 120",
    time: "Hosted by Class",
    location: "Hosted by Class",
    // time: "12/12 12:30 PM-2:30PM",
    // location: "ECEB 3017",
    //slidesLink: "https://docs.google.com/presentation/d/1AxJGIqBZTVQ1IexOc2xYWNevPXBpaX590w6a_WXBw0E/edit?usp=sharing",
    //worksheetLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece120/final/worksheet.pdf",
    //keyLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece120/final/solutions.pdf",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_lbwrxpvx"
  },
  {
    course: "ECE 210",
    time: "5/11, " + timeslots["B"],
    location: "1015",
    // time: "12/12 10:00 AM-12:00PM",
    // location: "ECEB 1013",
    // slidesLink: "https://docs.google.com/presentation/d/1UfPZly7LEUDpxDS882YPFkMwT_VZui-2bZEY6jV2Q20/edit?usp=sharing",
    // scribblesLink: "https://drive.google.com/file/d/1Wat6QBL5SFRFEeKUIURrta8jhfuzmaES/view?usp=sharing",  
    // worksheetLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece210/final/worksheet.pdf",
    // keyLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece210/final/solutions.pdf ",
    // //recordingLink: "https://mediaspace.illinois.edu/media/t/1_as7y7ztf"
  },
  {
    course: "ECE 220",
    time: "5/10, " + timeslots["B"],
    location: "1002",
    // time: "12/12 12:30 PM-2:30PM",
    // location: "ECEB 1015",
    // slidesLink: "https://docs.google.com/presentation/d/1ztI3-Y1dU5F0GBjFsfRuG_01-b0cAEJ3n_qfiv776U4/edit?usp=sharing",
    // worksheetLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece220/final/worksheet.pdf",
    // keyLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece220/final/solutions.pdf",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_kmjr1q6l"
  },
  {
    course: "ECE 310",
    time: "5/8, " + timeslots["B"],
      location: "1015",
    // time: "12/12 5:30 PM-7:30PM",
    // location: "ECEB 3017",
    // slidesLink: "https://docs.google.com/presentation/d/1CfLsIPCGmAKQMFQQ2gRIiBDtRUwYWF1tcpHHkbtrAoA/edit?usp=sharing",
    // worksheetLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece310/final/worksheet.pdf",
    // keyLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece310/final/solutions.pdf",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_p8ufunrr"
  },
  {
    course: "ECE 313",
    time: "Old Recording - Slides Only",
    location: "Worksheet Only",
    // time: "12/12 12:30 PM-2:30PM",
    // location: "ECEB 1013",
    // slidesLink: "https://docs.google.com/presentation/d/1zrJaOJCdGzcRGK47m3SP2u345Fd29rDNClcKoByTDzw/edit?usp=sharing",
    // worksheetLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece313/final/worksheet.pdf",
    // keyLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece313/final/solutions.pdf",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_ixq4mqse"

  },
  {
    course: "ECE 329",
    time: "5/10, " + timeslots["C"],
    location: "Hosted by Course Staff",
    // time: "12/12 5:30 PM-7:30PM",
    // location: "ECEB 1015",
    // slidesLink: "https://docs.google.com/presentation/d/1Gybm2m75-tYJ1wMDYbxVAw4pMjjQxvkjA9UTpaCQZlA/edit?usp=sharing",
    // worksheetLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece329/final/worksheet.pdf",
    // keyLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece329/final/solutions.pdf",
    //  recordingLink: "https://mediaspace.illinois.edu/media/t/1_9jlzhkww"
  },
  {
    course: "ECE 330",
    time: "5/11, " + timeslots["A"],
    location: "1015",
    // time: "12/12 3:00 PM-5:00PM",
    // location: "ECEB 3017",
    // slidesLink: "https://docs.google.com/presentation/d/1zTk7ZubVpZm2k5eMILaZGOhNHmPSDn6YP5XwqlavalE/edit?usp=sharing",
    // worksheetLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece330/final/worksheet.pdf",
    // keyLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece330/final/solutions.pdf",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_a5qygzgs"
  },
  {
    course: "ECE 340",
    time: "5/8, " + timeslots["A"],
    location: "1015",
    // time: "12/12 12:30 PM-2:30PM",
    // location: "ECEB 2015",
    // slidesLink: "https://docs.google.com/presentation/d/11tphISHiF842PKN2r9dhhNfEST4cY-3bKwOJQ5WT-bY/edit?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1rIH525Xakr1k7IbjlBj76D0eJ8Fdf8pS/view?usp=drive_link",
    // keyLink: "https://drive.google.com/file/d/1vTX3C6JHfh1NDaruQ4NC4uLtEMW_M0nN/view?usp=drive_link",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_66tx6dsv"
  },
  {
    course: "ECE 342",
    time: "5/10, " + timeslots["A"],
    location: "1013",
    // time: "12/12 10:00 AM-12:00PM",
    // location: "ECEB 1015",
    // slidesLink: "https://docs.google.com/presentation/d/1DhlbuSYjU67Cp2OLar3Cbpslt6BBjqoilLxlkp-OgGc/edit?usp=sharing",
    // scribblesLink: "https://drive.google.com/file/d/1iREa72-I-30EQzHZkMLVDkXrMdwAdZeT/view?usp=drive_link",
    // worksheetLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece342/final/worksheet.pdf",
    // keyLink: "https://github.com/hkn-alpha/worksheets/blob/main/ece342/final/solutions.pdf",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_sngknj2c",
  },
  {
    course: "CS 374A",
    time: "TBD",
    location: "TBD",
    // time: "12/7 11:00 AM-4:00PM",
    // location: "Animal Science Lab 150",
    // slidesLink: "https://drive.google.com/file/d/1Tos8twDP5gnMk8U4yax8GueQj4LWp-PS/view?usp=sharing",
    // scribblesLink: "https://drive.google.com/file/d/18Uwr68m5CE508KSkiBxOxoCG_xXu67Jb/view?usp=sharing",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_00if4pfj"
  },
  {
    course: "ECE 374B",
    time: "Slides Only",
    location: "Slides Only",
    // time: "12/12 12:30 PM-2:30PM",
    // location: "ECEB 1002",
    // slidesLink: "https://drive.google.com/file/d/1TaL-vqXHCG6IpHNN9OoWXoVQgni4ZUwa/view?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1qIinNE6Q0rymSBXUanQyrIiPqwKrPJwP/view?usp=drive_link",
    // keyLink:"https://drive.google.com/file/d/14zwwT3PSziCpx5rNDhQfhXX4Dp4RP-vg/view?usp=drive_link",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_zec18y08"
  },
  // {
  //   course: "ECE 408",
  //   time: "TBD",
  //     location: "TBD",
  //   // time: "12/8 3:00 PM-5:00PM",
  //   // location: "ECEB 1002",
  //   // recordingLink: "https://illinois.zoom.us/rec/play/U3FRcuGJ56GdDPg8kqmS9ZRJWqLQF6XT40pN0f7dbE8jzm9qswyVZZzKpURl4jKN3DiCa2YeX2gkR9B1.2TR1ye2klAlMNVu8?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fillinois.zoom.us%2Frec%2Fshare%2FtnwpmqmAAYd94e3Ii-t84XPOzyhvENZk8vTpTB_kouI0F5299hMTi4VFxGKP1eVe.hkkVTX9jnvpgbYza",
  //   // slidesLink: "https://drive.google.com/file/d/1jjEE2Es-zuGlNMqPKjx8U39fXY04r8bQ/view?usp=sharing",
  // },
  {
    course: "ECE 411",
    time: "5/11, " + timeslots["B"],
    location: "1002",
    // time: "12/12 3:00 PM-5:00PM",
    // location: "ECEB 1015",
    // slidesLink: "https://docs.google.com/presentation/d/1hufZ1TkNh5-pCpomnqoyTUlR5l6numqttVo6y0YjE8g/edit?usp=sharing",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_db54f4dn"
  },
  {
    course: "ECE 438",
    time: "Slides Only",
    location: "Slides Only",
    // time: "12/12 10:00 AM-12:00PM",
    // location: "ECEB 2015",
    // slidesLink: "https://drive.google.com/file/d/1vHP4RXQOmSrKMb-2n_jlpjCBqemXYqSE/view?usp=sharing",
    // recordingLink: "https://illinois.zoom.us/rec/play/0YPh752nLtKieMmbkTEVdCyW9zkD8KtF9Ca2t24UzY7q_VBCnpY6aJ4ch6v0NcEJcaw5qHzS5XSM1wiA.u3IO2AmjGFkFjsEp?canPlayFromShare=true&from=share_recording_detail&startTime=1734019499000&componentName=rec-play&originRequestUrl=https%3A%2F%2Fillinois.zoom.us%2Frec%2Fshare%2FyzGwIbe_lUIejcwGGjNAQeGQNUTIL5RlMPtCW0kfoU7ilLUT7YrMTgI7Ukxk9YEO.XSNDMfT7HYlkImHN%3FstartTime%3D1734019499000"
  },
 ];
