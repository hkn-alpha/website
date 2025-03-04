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
}

export const reviewSessions: Record<1 | 2 | 3, ReviewSession[]>= {
    
  // Midterm 1 review sessions
  
  1: [
    {
      course: "ECE 110",
      time: "2/22, 3:00-5:30PM",
      location: "ECEB 1002",

      slidesLink: "https://docs.google.com/presentation/d/1AydYT567E4EVwxIV-N0hygYrWK-eLlWg/edit?usp=sharing&ouid=114909937515227017827&rtpof=true&sd=true",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_0r07hl75",
      scribblesLink: "https://drive.google.com/file/d/1BrJEUJUDX6XCH7oz60ClK_1qnd3WeHkd/view?usp=sharing"
      
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
      time: "2/16, 12:30-3:00PM",
      // worksheetLink: "https://drive.google.com/file/d/1bB_NfQQvCMEPZxNIE9KnfAAhjhRjNV0J/view?usp=drive_link",
      slidesLink: "https://docs.google.com/presentation/d/1ntQbuGsQ_XgzD037_ANdnmT83o5SFXTLro_Yho12zng/edit?usp=sharing",
      scribblesLink: "https://drive.google.com/drive/folders/1D6LsJFDzgv0g08M2F3IJo5VqSgJX3Q_m?usp=drive_link",
      // location: "ECEB 1013",
      recordingLink:"https://mediaspace.illinois.edu/media/t/1_odbmvpo2"
    },
    {
      course: "ECE 220",
      //time: "TBD",
      location: "ECEB 1002",
      time: "2/23, 12:30-3:00PM",
      // location: "ECEB 1002",
      worksheetLink: "https://drive.google.com/file/d/1FaJIclJpOrT65OdPvomXFQx8cXgmgoCP/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_0vwbtwjd",
      slidesLink: "https://docs.google.com/presentation/d/1CDqhLYSjKhukTXjye4Ktdc2EprXnNVOK4SlMkXN4bYY/edit?usp=sharing",
      keyLink: "https://drive.google.com/file/d/1IB7AW7tvBxGMhYIeUURIXCVok1eS8ex-/view?usp=sharing"
    },
    {
      course: "ECE 310",
      //time: "TBD",
      location: "ECEB 1002",
      time: "2/23, 3:00-5:30PM",
      // location: "ECEB 1013",
      slidesLink:"https://docs.google.com/presentation/d/1R08OZnIAiqTT_o0YlK4lCyCFPtuqeMiAoe8lNvIi6-g/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_k8jwax9d"
    },
    {
      course: "ECE 313",
      //time: "TBD",
      location: "ECEB 1002",
      time: "3/1, 12:30-3:00PM",
      // location: "ECEB 1002",
      slidesLink: "https://docs.google.com/presentation/d/19l5Q0Mjm69xzzUl7FrrWWUm31HYSmzojdz-zmIBDEFc/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_9ncupom3"
    },
    {
      course: "ECE 329",
      //time: "TBD",
      location: "ECEB 2017",
      time: "2/19, 5:00-7:00PM",
      // location: "ECEB 1013",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_8jg8q18m",
      // slidesLink: "https://docs.google.com/presentation/d/1cfZuQMG5YbsN0gTOjXI0eaAMsLecXsowMUUbrpWnshY/edit?usp=sharing"
    },
    {
      course: "ECE 330",
      time: "2/23, 12:30-2:30PM",
      location: "ECEB 1015",
      slidesLink: "https://docs.google.com/presentation/d/1Ou5T4czG2p9rtF7ImFrKNwR_Hw9r1scYGgJeJ0PUhus/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_xfxf1cgm"
    },
    {
      course: "ECE 340",
      //time: "TBD",
      location: "ECEB 1015",
      time: "3/2, 12:30-2:30PM",
      // location: "ECEB 1002",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_fgsc2kgj",
       slidesLink: "https://docs.google.com/presentation/d/1C0HQQyX06zU-OHyXn4jSx28pRKEzV3pKMmOWJcYgx_8/edit?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/1RxtcBlQjLwXuVIMYR6S0X7im1-0V1Bit/view?usp=drive_link"
    },
    {
      course: "ECE 342",
      time: "2/15, 12:30-2:30PM",
      location: "ECEB 1015",
      // time: "9/21, 12:30-2:30PM",
      // location: "ECEB 1013",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_xdw3kcbg",
      slidesLink: "https://docs.google.com/presentation/d/17v8e5_1x7SJDarAbFpqQXUKnI3aZLW_QJs9tjsGrAkk/edit?usp=sharing"
    },
    {
      course: "CS 374A",
      //time: "TBD",
      location: "TBD",
      time: "2/22,  12:30-3:00",
      // location: "ECEB 1002",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_qu1d7lfy",
      // slidesLink: "https://drive.google.com/file/d/162vuI5yDVvAEMmUgOwGhthXhEdILJ_Lw/view?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/1Do5wLq4I6OiVzKQHTsEuyKDxBWdwfnwe/view?usp=sharing",
    },
    {
      course: "ECE 374B",
      //time: "TBD",
      location: "ECEB 1002",
      time: "2/9, 3:00-5:30PM",
      // location: "ECEB 1002",
      slidesLink: "https://drive.google.com/file/d/17L-drxEQNKRLHoSRvSBL7QIub20A1ADJ/view",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_ztkmfu8q"
    },
    
    {
      course: "ECE 408",
      //time: "TBD",
      location: "ECEB 1002",
      time: "3/1, 3:00-5:30PM",
      // location: "ECEB 1002",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_8plxq3kn",
      slidesLink: "https://drive.google.com/file/d/1Odf4N4U0ZFzdI10nU8UDhnZfbXecSAph/view?usp=sharing408"
    },
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
      location: "ECEB 1002",
      time: "2/22, 12:30-3:00PM",
      // location: "ECEB 1002",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_9yoy58c6",
       slidesLink: "https://docs.google.com/presentation/d/1umRdm6g6jMtTdmjKkQ4TOy9RG-BespwyCiBSjszgNoM/edit?usp=sharing"
    },
    {
      course: "ECE 486",
      //time: "TBD",
      location: "ECEB 1015",
      time: "3/2, 3:00-5:00PM",
      // location: "ECEB 1002",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_yrh3la3k",
      // slidesLink: "https://docs.google.com/presentation/d/1umRdm6g6jMtTdmjKkQ4TOy9RG-BespwyCiBSjszgNoM/edit#slide=id.p"
    },
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
      // scribblesLink: "https://docs.google.com/presentation/d/1wMU2g0aaN7JgIm3UebliNLA4TO0E3WVtf3gonNrb5sY/edit?usp=sharing"
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
      time: "3/24, " + timeslots["B"],
      location: "TBD",
      // time: "10/20, 3:00-5:00PM",
      // location: "ECEB 1013",
      // slidesLink: "https://docs.google.com/presentation/d/1Kl7bv7apNSZORKBW-CvJvcm7OtS6rcmns9LCqejsB-E/edit?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/1N9TAJTBIJgCZhnqqkwTxqoaL13RuhWb3/view?usp=sharing",
      // recordingLink: 'https://mediaspace.illinois.edu/media/t/1_j2qzxi88'
    },
    {
      course: "ECE 220",
      time: "4/6, " + timeslots["A"],
      location: "ECEB 1002",
      // time: "10/27, 3:00-5:00PM",
      // location: "ECEB 1002",
      // slidesLink: "https://docs.google.com/presentation/d/1xc2H24O0wBflOJ7pRLNBUIWaEs48H8Mz8RC8TP1FG-E/edit#slide=id.g250929c7780_0_6",
      // worksheetLink: "https://drive.google.com/file/d/1KKp1PTs5MFEe1ZBkO6auLPwjACQP94Wx/view?usp=drive_link",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_owib1a6k",
      // keyLink: "https://drive.google.com/file/d/1VRmQ5qJYfrJ3bj82TURex5XLxBs0f62s/view?usp=drive_link",
      
    },
    {
      course: "ECE 310",
      time: "4/5, " + timeslots["A"],
      location: "ECEB 1002",
      // time: "11/03, 3:00-5:00PM",
      // location: "ECEB 1013",
      // slidesLink: "https://docs.google.com/presentation/d/1EpYO2OxbcxIlWUp-gCOdczbsKOMB5IvfTmCKmQU6lEk/edit?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_8nwcg2j7",
    },
    {
      course: "ECE 313",
      time: "4/7, " + timeslots["B"],
      location: "ECEB 1002",
      // time: "11/03, 3:00-5:00PM",
      // location: "ECEB 1002",
      // slidesLink: "https://docs.google.com/presentation/d/1jYLP52HUwiqrYyPU4Izb9404QtzaYrZAPm4VnO_DEXo/edit?usp=sharing",
      // worksheetLink: "https://drive.google.com/file/d/1mBGVoN3EIE-K5ckPHjrQtdxplw1Fj0q5/view?usp=sharing",
    },
    {
      course: "ECE 329",
      time: "3/9, " + timeslots["A"],
      location: "ECEB 1015",
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
      // slidesLink: "https://docs.google.com/presentation/d/1sOM12r_XpP6x_M0UuJQEP6sOMoD6yZV8wtiT798MPIg/edit?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/16nidHUgBV9Fjac1yg75pTPiCek6iGe8_/view?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_6xdgx0l3",
    },
    {
      course: "ECE 340",
      time: "4/12, " + timeslots["A"],
      location: "ECEB 1015",
      // time: "11/10, 12:30-2:30PM",
      // location: "ECEB 1013",
      // slidesLink: "https://drive.google.com/file/d/1L3e8pseljhjeY5sWscdw8u3d99-jdSw-/view?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/11nH6Dj_LMVue9-J0vcmd21FYd6oQcR8_/view?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_hz6ja7rn",
    },
    {
      course: "ECE 342",
      time: "3/24, " + timeslots["B"],
      location: "TBD",
    //   time: "10/20, 12:30PM-2:30PM",
    //   location: "ECEB 1013",
    //   slidesLink: "https://docs.google.com/presentation/d/1rfuhbrXduTzak4xZpl92HTGRV75o8-B0fCDeHi_rTdU/edit#slide=id.g251bd022106_1_0",
    //   worksheetLink: "https://drive.google.com/file/d/1qYOapQOgArdGJFvP-LaeXroENQl8K6Cr/view?usp=sharing",
    //   recordingLink: 'https://mediaspace.illinois.edu/media/t/1_cn3iz7pe'
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
      time: "3/9, " + timeslots["B"],
      location: "ECEB 1002",
      // time: "11/03, 12:30-2:30PM",
      // location: "ECEB 1002",
      // slidesLink: "https://drive.google.com/file/d/1Shhi7je8uIHdXhSiWOmvvlnq04430S9X/view?usp=sharing",     
      // scribblesLink: "https://drive.google.com/file/d/1h5CEVdjpaCNrD9B-wGt7sBmfUMS4JEZt/view?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_gy8ts18v", 
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
      // time: "10/13, 12:30-2:30PM",
      // location: "ECEB 1002",
      // slidesLink: "https://docs.google.com/presentation/d/1RxGG7Xf054iLV-8icGPAlUTB2qeHHKJSVdlnov44-80/edit?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/1_bkao2dzv",
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
      // recordingLink: "https://mediaspace.illinois.edu/media/1_bkao2dzv",
    },
    
  ],

// Midterm 3 review sessions

  3: [
    {
      course: "ECE 110",
      time: "TBD",
      location: "TBD",
      // time: "11/17, 3:00-5:00PM",
      // location: "ECEB 102",
      // slidesLink: "https://drive.google.com/file/d/11RSQbPZuic1zGUUXJqmUsPrYTlD2yctC/view?usp=sharing",
      // recordingLink:'https://mediaspace.illinois.edu/media/t/1_vbqbpbn4',
      // scribblesLink: "https://drive.google.com/file/d/10iS0mc_REVBJsVjaUyuZgw9oC4zS1dOx/view?usp=sharing"

    },
    {
      course: "ECE 120",
      time: "TBD",
      location: "TBD",
      // time: "11/17, 12:30-2:30PM",
      // location: "ECEB 1002",
      // slidesLink: "https://drive.google.com/file/d/1rdAxtXYECrMvSjg2tFp8MeFjwqz3TEMB/view?usp=sharing",
      // recordingLink:'https://mediaspace.illinois.edu/media/t/1_6v0vk499',
      // worksheetLink: "https://drive.google.com/file/d/14BRfL6vqx8xYCb8LhseqFqLdu4gAknNV/view?usp=drive_link",
      // keyLink: "https://drive.google.com/file/d/1zd-pW1A2F6JVx2rfQK_uzj_TP4o1BXBX/view?usp=drive_link"
    },
    {
      course: "ECE 210",
      time: "TBD",
      location: "TBD",
      // time: "11/17, 3:00-5:00PM",
      // location: "ECEB 1013",
      // slidesLink: "https://drive.google.com/file/d/1zWwK3Kksp-J1XtWDtFAv6nTe_yKSgMP7/view?usp=sharing",
      // recordingLink: 'https://mediaspace.illinois.edu/media/t/1_y4bjhuxh',
      // scribblesLink: "https://drive.google.com/file/d/1q_RMMNwJ3EBhc0b1YXpzkvBSkgJ7mnx6/view?usp=sharing",
    },
    {
      course: "ECE 329",
      time: "TBD",
      location: "TBD",
      // time: "Cancelled",
      // location: "Cancelled",
    },
    {
      course: "ECE 342",
      time: "TBD",
      location: "TBD",
      // time: "11/17, 12:30-2:30PM",
      // location: "ECEB 1013",
      // slidesLink: "https://drive.google.com/file/d/124bT4lyYZeAqiTwWp_jJPadDFfAuIj_U/view?usp=sharing",
      // recordingLink:'https://mediaspace.illinois.edu/media/t/1_frfssah5'
    },
    {
      course: "ECE 374B",
      time: "TBD",
      location: "TBD",
      // time: "12/01, 12:30-2:30PM",
      // location: "ECEB 2015",
      // slidesLink: "https://drive.google.com/file/d/1bhIRKnLBD4ZPfOBTRWmb76GsO2N0q0rz/view?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/1D7IKMFqFiCZmyWV34G1UxsfJEDJyoL7y/view?usp=sharing",
      // recordingLink: "https://illinois.zoom.us/rec/play/S2OQDukkNTBpsAu1q4dRo83699qoD6qXViLV5z-Ss9jF92tQry_Us0utAk_NfF4lUwqkOoiYp6ywbwbQ.C11YOjGW16Plgrkc?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fillinois.zoom.us%2Frec%2Fshare%2FPMgoORxPdbLfn8-_kd6vhb8Y0Ls6oUgtWgXnMNGWoc8EbMparW_bRFGyaocqgga0.0isgU01snlleT6bi",
    }
  ],
 };

// When the UI should rollover stop showing the given review session
// All Midterms show up on the website, this sets priority of what shows up on the page
// Remember that months are zero indexed but days are not.
export const until: Record<1 | 2 | 3, Date> = {
  1: new Date(2025, 2 , 6),
  2: new Date(2025, 3, 5), // ends 11/10
  3: new Date(2025, 4, 1), // Date(1) makes sure this will never be default bc it occured in the past
};

// Final review sessions

 export const crammingCarnival: ReviewSession[] = [
  {
    course: "ECE 110",
    time: "TBD",
    location: "TBD",
    // time: "12/12 10:00 AM-12:00PM",
    // location: "ECEB 1002",
    // slidesLink: "https://docs.google.com/presentation/d/1DeNuuxpI_ydyBstSJknRO0vcD_Y3yUTrZUUAzzDJ0xE/edit?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1rCBMen0mMXcAxE17RNQecPT3XD_x_Mqx/view?usp=sharing",
    // keyLink: "https://drive.google.com/file/d/1e8kk0mzACNBohMcitIv4bntIn49W_tCq/view?usp=sharing",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_hkocw8id"
  },
  {
    course: "ECE 120",
    time: "TBD",
    location: "TBD",
    // time: "12/12 12:30 PM-2:30PM",
    // location: "ECEB 3017",
    // slidesLink: "https://docs.google.com/presentation/d/13-1eGTmgN9eHO2W9MDvysYOz4VGXV2RuyRObYGZbaN4/edit?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1ApKzFsfS__0M6oXdeGcbBbWoTcYpULqS/view?usp=sharing",
    //  keyLink: "https://drive.google.com/file/d/1_qRi2UlI5d00v8IJM2wzv64x2GHWPXyR/view?usp=sharing",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_lbwrxpvx"
  },
  {
    course: "ECE 210",
    time: "TBD",
    location: "TBD",
    // time: "12/12 10:00 AM-12:00PM",
    // location: "ECEB 1013",
    // slidesLink: "https://docs.google.com/presentation/d/1jKM5_gCe0g5WDaJVoHkUN0-HrkURrzQktvZbsJbaMJ4/edit?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1Ionw23Ath-knmMd0RlGB7csKc1_a1XXI/view?usp=sharing",
    //  keyLink: "https://drive.google.com/file/d/1MQI8vAae7czcRhLDN7_qNo6PI8FZGOY5/view?usp=drive_link",
    //  recordingLink: "https://mediaspace.illinois.edu/media/t/1_tnk5lk8s"
  },
  {
    course: "ECE 220",
    time: "TBD",
    location: "TBD",
    // time: "12/12 12:30 PM-2:30PM",
    // location: "ECEB 1015",
    // slidesLink: "https://docs.google.com/presentation/d/1ztI3-Y1dU5F0GBjFsfRuG_01-b0cAEJ3n_qfiv776U4/edit?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1wMHGSXF7z90vy81ViLfmaGtEbZwkv4HS/view?usp=drive_link",
    //  keyLink: "https://drive.google.com/file/d/1dZxrIVQcHnAID37VLoRQDbkNd7ttKueW/view?usp=drive_link",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_7xfxpd4y"
  },
  {
    course: "ECE 310",
    time: "TBD",
      location: "TBD",
    // time: "12/12 5:30 PM-7:30PM",
    // location: "ECEB 3017",
    // slidesLink: "https://docs.google.com/presentation/d/1CfLsIPCGmAKQMFQQ2gRIiBDtRUwYWF1tcpHHkbtrAoA/edit?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1mCrhOJGXuQdO7YRTUkHvGJhoD-HS33Fr/view?usp=drive_link",
    // keyLink: "https://drive.google.com/file/d/1V44c_35RREkrs4zfS60XAvoeJ0YcjpTV/view?usp=drive_link",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_5it9131p"
  },
  {
    course: "ECE 313",
    time: "TBD",
      location: "TBD",
    // time: "12/12 12:30 PM-2:30PM",
    // location: "ECEB 1013",
    // slidesLink: "https://drive.google.com/file/d/16lpzkpIpUV6x7n-A-2br6smYKQgih9ui/view?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1rSah_32CwFdIzYqOWwPJ8lUItXUkSF0y/view?usp=drive_link",
    // keyLink: "https://drive.google.com/file/d/1OUgh_TjFgahhHXUP6q_rP-e_yi7HHAWk/view?usp=drive_link",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_ixq4mqse"

  },
  {
    course: "ECE 329",
    time: "TBD",
      location: "TBD",
    // time: "12/12 5:30 PM-7:30PM",
    // location: "ECEB 1015",
    // slidesLink: "https://docs.google.com/presentation/d/1Gybm2m75-tYJ1wMDYbxVAw4pMjjQxvkjA9UTpaCQZlA/edit?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1UURDs4Pnw7ngD2Tz8INEZHJdQJjatQ2b/view?usp=drive_link",
    //  keyLink: "https://drive.google.com/file/d/1a5jx26JACwfTyOc9Z1MtPEA3GQaZy-3a/view?usp=drive_link",
    //  recordingLink: "https://mediaspace.illinois.edu/media/t/1_9jlzhkww"
  },
  {
    course: "ECE 330",
    time: "TBD",
      location: "TBD",
    // time: "12/12 3:00 PM-5:00PM",
    // location: "ECEB 3017",
    // slidesLink: "https://docs.google.com/presentation/d/1zTk7ZubVpZm2k5eMILaZGOhNHmPSDn6YP5XwqlavalE/edit?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1w5U-IFOIcR1YF4Bw5ed--TBHbcklJR0U/view?usp=drive_link",
    //  keyLink: "https://drive.google.com/file/d/1FSwxntkSRA1ItmaveqB1Mx9M9ZJScXNa/view?usp=drive_link", 
    //  recordingLink: "https://mediaspace.illinois.edu/media/t/1_zkg0lmba"
  },
  {
    course: "ECE 340",
    time: "TBD",
      location: "TBD",
    // time: "12/12 12:30 PM-2:30PM",
    // location: "ECEB 2015",
    // slidesLink: "https://docs.google.com/presentation/d/1tHeoyf1ft4PQ9vZGkXi_WWziCAQgNeKlGOD-ibG2XJ4/edit?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1rIH525Xakr1k7IbjlBj76D0eJ8Fdf8pS/view?usp=drive_link",
    // keyLink: "https://drive.google.com/file/d/1vTX3C6JHfh1NDaruQ4NC4uLtEMW_M0nN/view?usp=drive_link",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_sad6ndph"
  },
  {
    course: "ECE 342",
    time: "TBD",
      location: "TBD",
    // time: "12/12 10:00 AM-12:00PM",
    // location: "ECEB 1015",
    // // slidesLink: "https://docs.google.com/presentation/d/1fqTbzjjVLYz9Xkxwheozrm1kwOUrTw6oqHoqnsgCzdw/edit?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1i9BocR4a3tZqBJ9ocDbQN9ClLF9SBSLK/view?usp=drive_link",
    //  keyLink: "https://drive.google.com/file/d/12AZ8KUPZMg41fJteVmEdM50PEeKn-3c2/view?usp=drive_link"
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
    time: "TBD",
      location: "TBD",
    // time: "12/12 12:30 PM-2:30PM",
    // location: "ECEB 1002",
    // slidesLink: "https://drive.google.com/file/d/1TaL-vqXHCG6IpHNN9OoWXoVQgni4ZUwa/view?usp=sharing",
    // worksheetLink: "https://drive.google.com/file/d/1qIinNE6Q0rymSBXUanQyrIiPqwKrPJwP/view?usp=drive_link",
    // keyLink:"https://drive.google.com/file/d/14zwwT3PSziCpx5rNDhQfhXX4Dp4RP-vg/view?usp=drive_link",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_zec18y08"
  },
  {
    course: "ECE 408",
    time: "TBD",
      location: "TBD",
    // time: "12/8 3:00 PM-5:00PM",
    // location: "ECEB 1002",
    // recordingLink: "https://illinois.zoom.us/rec/play/U3FRcuGJ56GdDPg8kqmS9ZRJWqLQF6XT40pN0f7dbE8jzm9qswyVZZzKpURl4jKN3DiCa2YeX2gkR9B1.2TR1ye2klAlMNVu8?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fillinois.zoom.us%2Frec%2Fshare%2FtnwpmqmAAYd94e3Ii-t84XPOzyhvENZk8vTpTB_kouI0F5299hMTi4VFxGKP1eVe.hkkVTX9jnvpgbYza",
    // slidesLink: "https://drive.google.com/file/d/1jjEE2Es-zuGlNMqPKjx8U39fXY04r8bQ/view?usp=sharing",
  },
  {
    course: "ECE 411",
    time: "TBD",
      location: "TBD",
    // time: "12/12 3:00 PM-5:00PM",
    // location: "ECEB 1015",
    // slidesLink: "https://drive.google.com/file/d/1af5EeUgWgZBBrRzFiY9JkCoi_6lzjqKs/view?usp=sharing",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_jtgq8fyd"
  },
  {
    course: "ECE 438",
    time: "TBD",
      location: "TBD",
    // time: "12/12 10:00 AM-12:00PM",
    // location: "ECEB 2015",
    // slidesLink: "https://drive.google.com/file/d/1vHP4RXQOmSrKMb-2n_jlpjCBqemXYqSE/view?usp=sharing",
    // recordingLink: "https://illinois.zoom.us/rec/play/0YPh752nLtKieMmbkTEVdCyW9zkD8KtF9Ca2t24UzY7q_VBCnpY6aJ4ch6v0NcEJcaw5qHzS5XSM1wiA.u3IO2AmjGFkFjsEp?canPlayFromShare=true&from=share_recording_detail&startTime=1734019499000&componentName=rec-play&originRequestUrl=https%3A%2F%2Fillinois.zoom.us%2Frec%2Fshare%2FyzGwIbe_lUIejcwGGjNAQeGQNUTIL5RlMPtCW0kfoU7ilLUT7YrMTgI7Ukxk9YEO.XSNDMfT7HYlkImHN%3FstartTime%3D1734019499000"
  },
 ];
