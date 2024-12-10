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
      course: "ECE 110",
      time: "9/21, 10:30-12:30PM",
      location: "ECEB 1002",
      slidesLink: "https://docs.google.com/presentation/d/1AydYT567E4EVwxIV-N0hygYrWK-eLlWg/edit?usp=sharing&ouid=110906352345988467154&rtpof=true&sd=true",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_ygntfzua",
      scribblesLink: "https://docs.google.com/presentation/d/1K-OnIQMPRgeSUnEv9yXzopPMb4tNexF6N_pxiEtKius/edit#slide=id.g2581b2c6310_0_104"
      
    },
    {
      course: "ECE 120",
      time: "9/22, 12:30-2:30PM",
      location: "ECEB 1013",
      worksheetLink: "https://drive.google.com/file/d/1MzlyALmrmF9-fwIr2RnWiPkjACsG0vPy/view?usp=drive_link",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_u9nfhpai",
      slidesLink: "https://docs.google.com/presentation/d/1thwRet9spXwhnKJMuICfc4p4Yp1Ulo-0p89rDok24G4/edit#slide=id.p",
      keyLink: "https://drive.google.com/file/d/1npsnA239HdGFQji9nd8rGlpwi2spUxzW/view?usp=sharing",
    },
    {
      course: "ECE 210",
      time: "9/22, 3:00-5:00PM",
      worksheetLink: "https://drive.google.com/file/d/1bB_NfQQvCMEPZxNIE9KnfAAhjhRjNV0J/view?usp=drive_link",
      slidesLink: "https://docs.google.com/presentation/d/1ntQbuGsQ_XgzD037_ANdnmT83o5SFXTLro_Yho12zng/edit?usp=sharing",
      location: "ECEB 1013",
      recordingLink:"https://mediaspace.illinois.edu/media/t/1_fgga5v5m"
    },
    {
      course: "ECE 220",
      time: "9/22, 12:30-2:30PM",
      location: "ECEB 1002",
      worksheetLink: "https://drive.google.com/file/d/1NIMFOhouPv7B3ckoA4hq2Afhegv2o3LA/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_fb3se2h7",
      slidesLink: "https://docs.google.com/presentation/d/16F2UjcNDhcQCgHD1CCeXjnm2ucEFXJfqL2NdcIbSvSI/edit#slide=id.g250929c7780_0_6",
      keyLink: "https://drive.google.com/file/d/1DewjJD7ZRNwP7g7DjHnhMHYMAKyLOGE2/view?usp=drive_link"
    },
    {
      course: "ECE 310",
      time: "9/29, 12:30-2:30PM",
      location: "ECEB 1013",
      slidesLink:"https://docs.google.com/presentation/d/1R08OZnIAiqTT_o0YlK4lCyCFPtuqeMiAoe8lNvIi6-g/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_oqoaz0u1"
    },
    {
      course: "ECE 313",
      time: "9/28, 3:00-5:00PM",
      location: "ECEB 1002",
      slidesLink: "https://docs.google.com/presentation/d/19l5Q0Mjm69xzzUl7FrrWWUm31HYSmzojdz-zmIBDEFc/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_8w9dg007"
    },
    {
      course: "ECE 329",
      time: "9/21, 3:00-5:00PM",
      location: "ECEB 1013",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_8jg8q18m",
      slidesLink: "https://docs.google.com/presentation/d/1cfZuQMG5YbsN0gTOjXI0eaAMsLecXsowMUUbrpWnshY/edit?usp=sharing"
    },
    {
      course: "ECE 330",
      time: "9/29, 3:00-5:00PM",
      location: "ECEB 1013",
      slidesLink: "https://docs.google.com/presentation/d/1pykvZ-E8-MGzG0qgc0rWfxNHjWDJfwAqS0tVmBa7Z78/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_cjvnzmx8"
    },
    {
      course: "ECE 340",
      time: "10/06, 12:30-2:30PM",
      location: "ECEB 1002",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_62ac72q2",
      slidesLink: "https://docs.google.com/presentation/d/1C0HQQyX06zU-OHyXn4jSx28pRKEzV3pKMmOWJcYgx_8/edit?usp=sharing",
      scribblesLink: "https://drive.google.com/file/d/1RxtcBlQjLwXuVIMYR6S0X7im1-0V1Bit/view?usp=drive_link"
    },
    {
      course: "ECE 342",
      time: "9/21, 12:30-2:30PM",
      location: "ECEB 1013",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_ah0a7joh",
      slidesLink: "https://drive.google.com/drive/u/2/folders/14tjGLYzTw4S8dadeEFog2P5dYidfI5F8"
    },
    {
      course: "CS 374A",
      time: "9/28, 12:30-2:30PM",
      location: "ECEB 1002",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_qu1d7lfy",
      slidesLink: "https://drive.google.com/file/d/162vuI5yDVvAEMmUgOwGhthXhEdILJ_Lw/view?usp=sharing",
      scribblesLink: "https://drive.google.com/file/d/1Do5wLq4I6OiVzKQHTsEuyKDxBWdwfnwe/view?usp=sharing",
    },
    {
      course: "ECE 374B",
      time: "9/21, 3:00-5:00PM",
      location: "ECEB 1002",
      slidesLink: "https://drive.google.com/file/d/14-E0fS7vKoI8pQpt_dFAnFow64H0MPgV/view?usp=sharing"
    },
    
    {
      course: "ECE 408",
      time: "10/13, 3:00-5:00PM",
      location: "ECEB 1002",
      recordingLink: "https://drive.google.com/file/d/1u-PtTW4-GVHhTzOK105RBXrWvUsy9Py1/view?usp=sharing",
      slidesLink: "https://drive.google.com/file/d/1MxDHuwNoxpKh1uKjRigo43SlPPdGwJm0/view?usp=sharing"
    },
    {
      course: "ECE/CS 438",
      time: "10/26, 12:30-2:30PM",
      location: "ECEB 1013",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_zr2finr9",
      scribblesLink: "https://academic.acm.illinois.edu/assets/cs438/fa24/mt1/pdf/ACM_438_MT1_Review_scribbles.pdf",
      slidesLink: "https://drive.google.com/file/d/1RqSnWJsyhM_CvzVChLeQ3l6vumhbuaii/view?usp=drive_link",
    },
    {
      course: "ECE 411",
      time: "9/22, 3:00-5:00PM",
      location: "ECEB 1002",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_sxn7f3z6",
      slidesLink: "https://docs.google.com/presentation/d/1umRdm6g6jMtTdmjKkQ4TOy9RG-BespwyCiBSjszgNoM/edit#slide=id.p"
    },
  ],

  // Midterm 2 review sessions

  2: [
    {
      course: "ECE 110",
      time: "10/20, 3:00-5:00PM",
      location: "ECEB 1002",
      slidesLink: "https://docs.google.com/presentation/d/1ANp3B_RQjOAzlhKPM589kiZbGWoK8k8I4WEluFpwCq0/edit?usp=sharing",
      scribblesLink: "https://docs.google.com/presentation/d/1wMU2g0aaN7JgIm3UebliNLA4TO0E3WVtf3gonNrb5sY/edit?usp=sharing"
    },
    {
      course: "ECE 120",
      time: "10/20, 12:30-2:30PM",
      location: "ECEB 1002",
      slidesLink: "https://docs.google.com/presentation/d/1pj2_GGltCo2jRIzTmndIn-psupwfPDSnvmaFpNJurVk/edit?usp=sharing",
      worksheetLink: "https://drive.google.com/file/d/1eF9-TfyRcv717JLg4CeDIaC1DkHCsYOe/view?usp=sharing",
      keyLink: "https://drive.google.com/file/d/13BSuHFJMptg7eiuPaET7iO7c8c3ljFqY/view?usp=sharing",
      recordingLink: 'https://mediaspace.illinois.edu/media/t/1_8qn9l07n'
    },
    {
      course: "ECE 210",
      time: "10/20, 3:00-5:00PM",
      location: "ECEB 1013",
      slidesLink: "https://docs.google.com/presentation/d/1Kl7bv7apNSZORKBW-CvJvcm7OtS6rcmns9LCqejsB-E/edit?usp=sharing",
      scribblesLink: "https://drive.google.com/file/d/1N9TAJTBIJgCZhnqqkwTxqoaL13RuhWb3/view?usp=sharing",
      recordingLink: 'https://mediaspace.illinois.edu/media/t/1_j2qzxi88'
    },
    {
      course: "ECE 220",
      time: "10/27, 3:00-5:00PM",
      location: "ECEB 1002",
      slidesLink: "https://docs.google.com/presentation/d/1xc2H24O0wBflOJ7pRLNBUIWaEs48H8Mz8RC8TP1FG-E/edit#slide=id.g250929c7780_0_6",
      worksheetLink: "https://drive.google.com/file/d/1KKp1PTs5MFEe1ZBkO6auLPwjACQP94Wx/view?usp=drive_link",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_owib1a6k",
      keyLink: "https://drive.google.com/file/d/1VRmQ5qJYfrJ3bj82TURex5XLxBs0f62s/view?usp=drive_link",
      
    },
    {
      course: "ECE 310",
      time: "11/03, 3:00-5:00PM",
      location: "ECEB 1013",
      slidesLink: "https://docs.google.com/presentation/d/1EpYO2OxbcxIlWUp-gCOdczbsKOMB5IvfTmCKmQU6lEk/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_8nwcg2j7",
    },
    {
      course: "ECE 313",
      time: "11/03, 3:00-5:00PM",
      location: "ECEB 1002",
      slidesLink: "https://docs.google.com/presentation/d/1jYLP52HUwiqrYyPU4Izb9404QtzaYrZAPm4VnO_DEXo/edit?usp=sharing",
      worksheetLink: "https://drive.google.com/file/d/1mBGVoN3EIE-K5ckPHjrQtdxplw1Fj0q5/view?usp=sharing",
    },
    {
      course: "ECE 329",
      time: "10/27, 3:00-5:00PM",
      location: "ECEB 1013",
      slidesLink: "https://docs.google.com/presentation/d/1k-W7ONZTiSYtAIOWgX_ucW0cgIBprou28fFMKzX8R6E/edit#slide=id.p",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_kry0oyjz",
    },
    {
      course: "ECE 330",
      time: "11/03, 12:30-2:30PM",
      location: "ECEB 1013",
      slidesLink: "https://docs.google.com/presentation/d/1sOM12r_XpP6x_M0UuJQEP6sOMoD6yZV8wtiT798MPIg/edit?usp=sharing",
      scribblesLink: "https://drive.google.com/file/d/16nidHUgBV9Fjac1yg75pTPiCek6iGe8_/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_6xdgx0l3",
    },
    {
      course: "ECE 340",
      time: "11/10, 12:30-2:30PM",
      location: "ECEB 1013",
      slidesLink: "https://drive.google.com/file/d/1L3e8pseljhjeY5sWscdw8u3d99-jdSw-/view?usp=sharing",
      scribblesLink: "https://drive.google.com/file/d/11nH6Dj_LMVue9-J0vcmd21FYd6oQcR8_/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_hz6ja7rn",
    },
    {
      course: "ECE 342",
      time: "10/20, 12:30PM-2:30PM",
      location: "ECEB 1013",
      slidesLink: "https://docs.google.com/presentation/d/1rfuhbrXduTzak4xZpl92HTGRV75o8-B0fCDeHi_rTdU/edit#slide=id.g251bd022106_1_0",
      worksheetLink: "https://drive.google.com/file/d/1qYOapQOgArdGJFvP-LaeXroENQl8K6Cr/view?usp=sharing",
      recordingLink: 'https://mediaspace.illinois.edu/media/t/1_cn3iz7pe'
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
      time: "11/10, 12:30-2:30PM",
      location: "ECEB 1002",
      slidesLink: "https://drive.google.com/file/d/1CO_oQbFAQm0uaQp5HjGQrGlelswYrJjv/view?usp=sharing",
      scribblesLink: "https://academic.acm.illinois.edu/assets/cs374a/fa24/mt2/pdf/ACM_CS_374A_MT2_Review_scribs.pdf",
      recordingLink: "https://illinois.zoom.us/rec/play/WwI4uNbV2ani_i0HmU8Cq1Zk--vUbC69bOEZJoR9gSlGGSzUyJZH-iKlDBDPEP4jo8jn60tlTyamQaNS.fULatEDspSRgc1is?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fillinois.zoom.us%2Frec%2Fshare%2FUZUP0dE9Z6wQVWfOtuJE_Xc9CJHQtVCtYapznfgiBUM2W1aKu7dv847jr06fhmE.rGu5fHCAVGk0Hbwh",
    },
    {
      course: "ECE 374B",
      time: "11/03, 12:30-2:30PM",
      location: "ECEB 1002",
      slidesLink: "https://drive.google.com/file/d/1Shhi7je8uIHdXhSiWOmvvlnq04430S9X/view?usp=sharing",     
      scribblesLink: "https://drive.google.com/file/d/1h5CEVdjpaCNrD9B-wGt7sBmfUMS4JEZt/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_gy8ts18v", 
    },
   {
      course: "ECE 408",
      time: "10/13, 3:00-5:00PM",
      location: "ECEB 1002",
      slidesLink: "https://drive.google.com/file/d/1MxDHuwNoxpKh1uKjRigo43SlPPdGwJm0/view?usp=drive_link",
    },
    {
      course: "ECE 411",
      time: "10/13, 12:30-2:30PM",
      location: "ECEB 1002",
      slidesLink: "https://docs.google.com/presentation/d/1RxGG7Xf054iLV-8icGPAlUTB2qeHHKJSVdlnov44-80/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/1_bkao2dzv",
    },
    {
      course: "ECE/CS 438",
      time: "10/26, 12:30-2:30PM",
      location: "ECEB 1013",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_zr2finr9",
      scribblesLink: "https://academic.acm.illinois.edu/assets/cs438/fa24/mt1/pdf/ACM_438_MT1_Review_scribbles.pdf",
      slidesLink: "https://drive.google.com/file/d/1RqSnWJsyhM_CvzVChLeQ3l6vumhbuaii/view?usp=drive_link",

    },
  ],

// Midterm 3 review sessions

  3: [
    {
      course: "ECE 110",
      time: "11/17, 3:00-5:00PM",
      location: "ECEB 1002",
      slidesLink: "https://drive.google.com/file/d/11RSQbPZuic1zGUUXJqmUsPrYTlD2yctC/view?usp=sharing",
      recordingLink:'https://mediaspace.illinois.edu/media/t/1_vbqbpbn4',
      scribblesLink: "https://drive.google.com/file/d/10iS0mc_REVBJsVjaUyuZgw9oC4zS1dOx/view?usp=sharing"

    },
    {
      course: "ECE 120",
      time: "11/17, 12:30-2:30PM",
      location: "ECEB 1002",
      slidesLink: "https://drive.google.com/file/d/1rdAxtXYECrMvSjg2tFp8MeFjwqz3TEMB/view?usp=sharing",
      recordingLink:'https://mediaspace.illinois.edu/media/t/1_6v0vk499',
      worksheetLink: "https://drive.google.com/file/d/14BRfL6vqx8xYCb8LhseqFqLdu4gAknNV/view?usp=drive_link",
      keyLink: "https://drive.google.com/file/d/1zd-pW1A2F6JVx2rfQK_uzj_TP4o1BXBX/view?usp=drive_link"
    },
    {
      course: "ECE 210",
      time: "11/17, 3:00-5:00PM",
      location: "ECEB 1013",
      slidesLink: "https://drive.google.com/file/d/1zWwK3Kksp-J1XtWDtFAv6nTe_yKSgMP7/view?usp=sharing",
      recordingLink: 'https://mediaspace.illinois.edu/media/t/1_y4bjhuxh',
      scribblesLink: "https://drive.google.com/file/d/1q_RMMNwJ3EBhc0b1YXpzkvBSkgJ7mnx6/view?usp=sharing",
    },
    {
      course: "ECE 329",
      time: "Cancelled",
      location: "Cancelled",
    },
    {
      course: "ECE 342",
      time: "11/17, 12:30-2:30PM",
      location: "ECEB 1013",
      slidesLink: "https://drive.google.com/file/d/124bT4lyYZeAqiTwWp_jJPadDFfAuIj_U/view?usp=sharing",
      recordingLink:'https://mediaspace.illinois.edu/media/t/1_frfssah5'
    },
    {
      course: "ECE 374B",
      time: "12/01, 12:30-2:30PM",
      location: "ECEB 2015",
      slidesLink: "https://drive.google.com/file/d/1bhIRKnLBD4ZPfOBTRWmb76GsO2N0q0rz/view?usp=sharing",
      scribblesLink: "https://drive.google.com/file/d/1D7IKMFqFiCZmyWV34G1UxsfJEDJyoL7y/view?usp=sharing",
      recordingLink: "https://illinois.zoom.us/rec/play/S2OQDukkNTBpsAu1q4dRo83699qoD6qXViLV5z-Ss9jF92tQry_Us0utAk_NfF4lUwqkOoiYp6ywbwbQ.C11YOjGW16Plgrkc?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fillinois.zoom.us%2Frec%2Fshare%2FPMgoORxPdbLfn8-_kd6vhb8Y0Ls6oUgtWgXnMNGWoc8EbMparW_bRFGyaocqgga0.0isgU01snlleT6bi",
    }
  ],
};

// When the UI should rollover stop showing the given review session
// Remember that months are zero indexed but days are not.
export const until: Record<1 | 2 | 3, Date> = {
  1: new Date(2024, 9, 6),
  2: new Date(2024, 10, 13), // ends 11/10
  3: new Date(2024, 11, 1), // Date(1) makes sure this will never be default bc it occured in the past
};

// Final review sessions

export const crammingCarnival: ReviewSession[] = [
  {
    course: "ECE 110",
    time: "12/12 10:00-12:00PM",
    location: "ECEB 1002",
    slidesLink: "https://docs.google.com/presentation/d/1DeNuuxpI_ydyBstSJknRO0vcD_Y3yUTrZUUAzzDJ0xE/edit?usp=sharing",
  },
  {
    course: "ECE 120",
    time: "12/12 12:30-2:30PM",
    location: "ECEB 3017",
    slidesLink: "https://docs.google.com/presentation/d/13-1eGTmgN9eHO2W9MDvysYOz4VGXV2RuyRObYGZbaN4/edit?usp=sharing",
  },
  {
    course: "ECE 210",
    time: "12/12 10:00-12:00PM",
    location: "ECEB 1013",
    slidesLink: "https://docs.google.com/presentation/d/1jKM5_gCe0g5WDaJVoHkUN0-HrkURrzQktvZbsJbaMJ4/edit?usp=sharing",
  },
  {
    course: "ECE 220",
    time: "12/12 12:30-2:30PM",
    location: "ECEB 1015",
    slidesLink: "https://docs.google.com/presentation/d/1ztI3-Y1dU5F0GBjFsfRuG_01-b0cAEJ3n_qfiv776U4/edit?usp=sharing",
  },
  {
    course: "ECE 310",
    time: "12/12 5:30-7:30PM",
    location: "ECEB 3017",
    slidesLink: "https://docs.google.com/presentation/d/1CfLsIPCGmAKQMFQQ2gRIiBDtRUwYWF1tcpHHkbtrAoA/edit?usp=sharing",
  },
  {
    course: "ECE 313",
    time: "12/12 12:30-2:30PM",
    location: "ECEB 1013",
    
  },
  {
    course: "ECE 329",
    time: "12/12 5:30-7:30PM",
    location: "ECEB 1015",
    slidesLink: "https://docs.google.com/presentation/d/1Gybm2m75-tYJ1wMDYbxVAw4pMjjQxvkjA9UTpaCQZlA/edit?usp=sharing",
  },
  {
    course: "ECE 330",
    time: "12/12 3:00-5:00PM",
    location: "ECEB 3017",
    slidesLink: "https://docs.google.com/presentation/d/1zTk7ZubVpZm2k5eMILaZGOhNHmPSDn6YP5XwqlavalE/edit?usp=sharing",
  },
  {
    course: "ECE 340",
    time: "12/12 12:30-2:30PM",
    location: "ECEB 2015",
    slidesLink: "https://docs.google.com/presentation/d/1tHeoyf1ft4PQ9vZGkXi_WWziCAQgNeKlGOD-ibG2XJ4/edit?usp=sharing",
  },
  {
    course: "ECE 342",
    time: "12/12 10:00-12:00PM",
    location: "ECEB 1015",
    slidesLink: "https://docs.google.com/presentation/d/1fqTbzjjVLYz9Xkxwheozrm1kwOUrTw6oqHoqnsgCzdw/edit?usp=sharing",
  },
  {
    course: "CS 374A",
    time: "12/7 11:00-4:00PM",
    location: "Animal Science Lab 150",
  },
  {
    course: "ECE 374B",
    time: "12/12 12:30-2:30PM",
    location: "ECEB 1002",
  },
  {
    course: "ECE 408",
    time: "12/8 3:00-5:00PM",
    location: "ECEB 1002",
    recordingLink: "https://illinois.zoom.us/rec/play/U3FRcuGJ56GdDPg8kqmS9ZRJWqLQF6XT40pN0f7dbE8jzm9qswyVZZzKpURl4jKN3DiCa2YeX2gkR9B1.2TR1ye2klAlMNVu8?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fillinois.zoom.us%2Frec%2Fshare%2FtnwpmqmAAYd94e3Ii-t84XPOzyhvENZk8vTpTB_kouI0F5299hMTi4VFxGKP1eVe.hkkVTX9jnvpgbYza",
    slidesLink: "https://drive.google.com/file/d/1jjEE2Es-zuGlNMqPKjx8U39fXY04r8bQ/view?usp=sharing",
  },
  {
    course: "ECE 411",
    time: "12/12 3:00-5:00PM",
    location: "ECEB 1015",
  },
  {
    course: "ECE 438",
    time: "12/12 10:00-12:00PM",
    location: "ECEB 2015",
  },
];
