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
      time: "9/21, 10:30-1:00PM",
      location: "ECEB 1002",
      slidesLink: "https://docs.google.com/presentation/d/1AydYT567E4EVwxIV-N0hygYrWK-eLlWg/edit?usp=sharing&ouid=110906352345988467154&rtpof=true&sd=true",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_ygntfzua",
      scribblesLink: "https://docs.google.com/presentation/d/1K-OnIQMPRgeSUnEv9yXzopPMb4tNexF6N_pxiEtKius/edit#slide=id.g2581b2c6310_0_104"
      
    },
    {
      course: "ECE 120",
      time: "9/22, 12:30-3:00PM",
      location: "ECEB 1013",
      worksheetLink: "https://drive.google.com/file/d/1MzlyALmrmF9-fwIr2RnWiPkjACsG0vPy/view?usp=drive_link",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_u9nfhpai",
      slidesLink: "https://docs.google.com/presentation/d/1thwRet9spXwhnKJMuICfc4p4Yp1Ulo-0p89rDok24G4/edit#slide=id.p",
      keyLink: "https://drive.google.com/file/d/1npsnA239HdGFQji9nd8rGlpwi2spUxzW/view?usp=sharing",
    },
    {
      course: "ECE 210",
      time: "9/22, 3:00-5:30PM",
      worksheetLink: "https://drive.google.com/file/d/1bB_NfQQvCMEPZxNIE9KnfAAhjhRjNV0J/view?usp=drive_link",
      slidesLink: "https://docs.google.com/presentation/d/1ntQbuGsQ_XgzD037_ANdnmT83o5SFXTLro_Yho12zng/edit?usp=sharing",
      location: "ECEB 1013",
      recordingLink:"https://mediaspace.illinois.edu/media/t/1_fgga5v5m"
    },
    {
      course: "ECE 220",
      time: "9/22, 12:30-3:00PM",
      location: "ECEB 1002",
      worksheetLink: "https://drive.google.com/file/d/1NIMFOhouPv7B3ckoA4hq2Afhegv2o3LA/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_fb3se2h7",
      slidesLink: "https://docs.google.com/presentation/d/16F2UjcNDhcQCgHD1CCeXjnm2ucEFXJfqL2NdcIbSvSI/edit#slide=id.g250929c7780_0_6",
      keyLink: "https://drive.google.com/file/d/1DewjJD7ZRNwP7g7DjHnhMHYMAKyLOGE2/view?usp=drive_link"
    },
    {
      course: "ECE 310",
      time: "9/29, 12:30-3:00PM",
      location: "ECEB 1013",
      slidesLink:"https://docs.google.com/presentation/d/1R08OZnIAiqTT_o0YlK4lCyCFPtuqeMiAoe8lNvIi6-g/edit?usp=sharing"
      
    },
    {
      course: "ECE 313",
      time: "9/28, 3:00-5:30PM",
      location: "ECEB 1002",
      slidesLink: "https://docs.google.com/presentation/d/19l5Q0Mjm69xzzUl7FrrWWUm31HYSmzojdz-zmIBDEFc/edit?usp=sharing"
      worksheetLink: "https://drive.google.com/file/d/1O_gHrsvgNOEpAOt8pYx6wqNc-Vgm0VgI/view?usp=sharing",
    },
    {
      course: "ECE 329",
      time: "9/21, 3:00-5:30PM",
      location: "ECEB 1013",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_8jg8q18m",
      slidesLink: "https://docs.google.com/presentation/d/1cfZuQMG5YbsN0gTOjXI0eaAMsLecXsowMUUbrpWnshY/edit?usp=sharing"
    },
    {
      course: "ECE 330",
      time: "9/29, 3:00-5:30PM",
      location: "ECEB 1013",
      slidesLink: "https://docs.google.com/presentation/d/1pykvZ-E8-MGzG0qgc0rWfxNHjWDJfwAqS0tVmBa7Z78/edit?usp=sharing"
    },
    {
      course: "ECE 340",
      time: "10/06, 12:30-3:00PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 342",
      time: "9/21, 12:30-3:00PM",
      location: "ECEB 1013",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_ah0a7joh",
      slidesLink: "https://drive.google.com/drive/u/2/folders/14tjGLYzTw4S8dadeEFog2P5dYidfI5F8"
    },
    {
      course: "CS 374A",
      time: "9/28, 12:30-3:00PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 374B",
      time: "9/21, 3:00-5:30PM",
      location: "ECEB 1002",
      slidesLink: "https://drive.google.com/file/d/14-E0fS7vKoI8pQpt_dFAnFow64H0MPgV/view?usp=sharing"
    },
    // {
    //   course: "ECE 391",
    //   time: "2/17, 3:00-5:30PM",
    //   location: "ECEB 1002",
    // },
    {
      course: "ECE 411",
      time: "9/22, 3:00-5:30PM",
      location: "ECEB 1002",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_sxn7f3z6",
      slidesLink: "https://docs.google.com/presentation/d/1umRdm6g6jMtTdmjKkQ4TOy9RG-BespwyCiBSjszgNoM/edit#slide=id.p"
    },
  ],

  // Midterm 2 review sessions

  2: [
    {
      course: "ECE 110",
      time: "10/20, 3:00-5:30PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 120",
      time: "10/20, 12:30-3:00PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 210",
      time: "10/20, 3:00-5:30PM",
      location: "ECEB 1013",
    },
    {
      course: "ECE 220",
      time: "10/27, 3:00-5:30PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 310",
      time: "11/10, 3:00-5:30PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 313",
      time: "11/03, 3:00-5:30PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 329",
      time: "10/27, 3:00-5:30PM",
      location: "ECEB 1013",
    },
    {
      course: "ECE 330",
      time: "11/03, 12:30-3:00PM",
      location: "ECEB 1013",
    },
    {
      course: "ECE 340",
      time: "11/10, 12:30-3:00PM",
      location: "ECEB 1013",
    },
    {
      course: "ECE 342",
      time: "10/20, 12:30PM-3:00PM",
      location: "ECEB 1013",
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
      time: "11/10, 12:30-3:00PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 374B",
      time: "11/03, 12:30-3:00PM",
      location: "ECEB 1002",
    },
    // {
    //   course: "ECE 391",
    //   time: "4/6, 3:00-5:30PM",
    //   location: "ECEB 1013",
    // },
    {
      course: "ECE 411",
      time: "10/13, 12:30-3:00PM",
      location: "ECEB 1002",
    },
  ],

// Midterm 3 review sessions

  3: [
    {
      course: "ECE 110",
      time: "11/17, 3:00-5:30PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 120",
      time: "11/17, 12:30-3:00PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 210",
      time: "11/17, 3:00-5:30PM",
      location: "ECEB 1013",
    },
    {
      course: "ECE 329",
      time: "12/01, 12:30-3:00PM",
      location: "ECEB 1015",
    },
    {
      course: "ECE 342",
      time: "11/17, 12:30-3:00PM",
      location: "ECEB 1013",
    },
    {
      course: "ECE 374B",
      time: "12/01, 12:30-3:00PM",
      location: "ECEB 1002",
    }
  ],
};

// When the UI should rollover stop showing the given review session
// Remember that months are zero indexed but days are not.
export const until: Record<1 | 2 | 3, Date> = {
  1: new Date(2024, 9, 6),
  2: new Date(2024, 10, 10), // ends 11/10
  3: new Date(2024, 11, 1), // Date(1) makes sure this will never be default bc it occured in the past
};

// Final review sessions

export const crammingCarnival: ReviewSession[] = [
  // {
  //   course: "ECE 110",
  //   time: "5/5 12:30-3:00PM",
  //   location: "ECEB 1002",
  //   worksheetLink: "https://drive.google.com/file/d/1vyxIWB40dKTKbQ8IrY9NC9GVQWhgmiKN/view?usp=sharing",
  //   keyLink: "https://drive.google.com/file/d/1E3gmO7KG4qtiMCYEyeerOll93LG5qCUo/view?usp=sharing",
  //   keyReleaseTime: "2024-05-05T15:00:00-05:00",
  //   slidesLink: "https://docs.google.com/presentation/d/1195XdMWAw-zQcDaKMiYT4-bIBKBj242_W4NXrQGX5oc/edit?usp=sharing",
  //   scribblesLink: "https://drive.google.com/file/d/1KwFbP_ta0-6STMinlwC6fFb5fnadhoQT/view?usp=sharing",
  //   // recordingLink: "https://mediaspace.illinois.edu/media/t/1_d90ihf5u",
  // },
  // {
  //   course: "ECE 120 (UAs)",
  //   time: "5/4 12:30-3:00PM",
  //   location: "ECEB 1002",
  //   worksheetLink: "https://drive.google.com/file/d/1fxpuBboxJ9lkSbCVlldmWIh4DGcDat19/view?usp=sharing",
  //   keyLink:  "https://drive.google.com/file/d/1EynkgwdklzWUELRWDiQ6cRQ-yuCZ3k0G/view?usp=sharing",
  // },
  // {
  //   course: "ECE 210",
  //   time: "5/5 3:00-5:30PM",
  //   location: "ECEB 1015",
  //   worksheetLink: "https://drive.google.com/file/d/1Reyf0MNfHZx0Fwu56MfwOJs4hmeYdiAA/view?usp=sharing",
    
  //   keyLink: "https://drive.google.com/file/d/1gffxxO-4vRgngQeJdaESgT8-YVB9qoVX/view?usp=drive_link",
  //   keyReleaseTime: "2024-05-05T17:30:00-05:00",
  //   slidesLink: "https://docs.google.com/presentation/d/1CfkrvZaRmbIvkvXor6tDsYa89rXSqG7u3lCB7NwLzIE/edit?usp=sharing",
  //   // recordingLink: "https://mediaspace.illinois.edu/media/t/1_cui9ujoj",
  // },
  // {
  //   course: "ECE 220",
  //   time: "5/4 3:00-5:30PM",
  //   location: "ECEB 2013",
  //   worksheetLink: "https://drive.google.com/file/d/1H_5uCX3avTifvlBBCbBBSZ88B01P4dOl/view?usp=sharing",
  //   keyLink: "https://drive.google.com/file/d/1DXfsl9t33_-SrhjLm-sl1RokncvOhm6x/view?usp=drive_link",
  //   slidesLink: "https://docs.google.com/presentation/d/12HG697kACXEFVtFxx99-T8gVxCguXIe-C98YC_fOkto/edit?usp=sharing",
  //   // recordingLink: "https://mediaspace.illinois.edu/media/t/1_fdcs3o5t",
  // },
  // {
  //   course: "ECE 310",
  //   time: "5/2 3:00-5:30PM",
  //   location: "ECEB 1015",
  //   worksheetLink: "https://drive.google.com/file/d/1T51zOjcGymDn-seQjjVmkT7eBWIxu5Iv/view?usp=sharing",
  //   keyLink: "https://drive.google.com/file/d/1QhmA73-vLdBFd2W5lOhnE5kEmPTzC1-n/view?usp=sharing",
  //   keyReleaseTime: "2024-05-02T15:00:00-05:00",
  //   slidesLink: "https://docs.google.com/presentation/d/1iMMu6iwAZQYGhq-r6cMGx05Qp3ELlfphXmLcVxRBH6I/edit?usp=sharing",
  //   recordingLink: "https://mediaspace.illinois.edu/media/t/1_9utvtz02",
  // },
  // {
  //   course: "ECE 313",
  //   time: "5/5 3:00-5:30PM",
  //   location: "ECEB 1013",
  //   worksheetLink: "https://drive.google.com/file/d/100VMlQLnIhOp5jgspYP4OOd75zlhy4Ic/view?usp=sharing",
  //   keyLink: "https://drive.google.com/file/d/10C5Zu49BlNYAHoyJ_i7dVYOzKRo13nji/view?usp=sharing",
  //   keyReleaseTime: "2024-05-05T17:30:00-05:00",
  //   slidesLink: "https://docs.google.com/presentation/d/1QyfV6RLjtbeXq2waUGUnJ_wpEt-Em90Jq_Dm66o7B7g/edit?usp=sharing",
  //   // recordingLink: "https://mediaspace.illinois.edu/media/t/1_1mp2tdi1",
  // },
  // {
  //   course: "ECE 329",
  //   time: "5/4 3:00-5:30PM",
  //   location: "ECEB 1013",
  //   worksheetLink: "https://drive.google.com/file/d/1ViEq9sjt-MGtsu5PVd8cUAdj3YFowUMT/view?usp=sharing",
  //   keyLink: "https://drive.google.com/file/d/1kXhCLQTFBdye9PR_6jPwxI50mnq5gGRw/view?usp=sharing",
  //   slidesLink: "https://docs.google.com/presentation/d/1HLXTdKzjYesI8kfQqmyRgpcTxO5mpsRIj0IwlBaIo1A/edit#slide=id.p",
  //   recordingLink: "https://mediaspace.illinois.edu/media/t/1_k6gv0sj6",

  // },
  // {
  //   course: "ECE 330",
  //   time: "5/4 12:30-3:00PM",
  //   location: "ECEB 1013",
  //   worksheetLink: "https://drive.google.com/file/d/1-c5n1eYXoh1zgtKt_juDpg77cnb5V4re/view?usp=sharing",
  //   keyLink: "https://drive.google.com/file/d/1tUWm_3Maav82SDEaEcTzClY8127Ty9QG/view?usp=sharing",
  //   slidesLink: "https://docs.google.com/presentation/d/1vMyI7PFTXFXaN7h8ZTqXa5aeTm8ndin6g4oVZ-Z3FM0/edit?usp=sharing",
  //   recordingLink: "https://mediaspace.illinois.edu/media/t/1_nc4pkh22"
  // },
  // {
  //   course: "ECE 340",
  //   time: "5/2 12:30-3:00PM",
  //   location: "ECEB 1015",
  //   worksheetLink: "https://drive.google.com/file/d/18h9MuOni-8TEX8cS9nw5pPqMAAnbcZGk/view?usp=sharing",
  //   keyLink: "https://drive.google.com/file/d/1k57IRKvujePXyB3gOXLQM9lTH_YgWphA/view?usp=sharing",
  //   slidesLink: "https://docs.google.com/presentation/d/1pmCGALsXBvKEJ_CPcXr2sVu2ax1FtyvwB8d3lAzfj_k/edit?usp=sharing",
  //   recordingLink: "https://mediaspace.illinois.edu/media/t/1_np47vmfw",
  // },
  // {
  //   course: "ECE 342",
  //   time: "5/2 12:30-3:00PM",
  //   location: "ECEB 1013",
  //   worksheetLink: "https://drive.google.com/file/d/12kpBqZWr2JaSjBV59rCH3FjvcIWgExd9/view?usp=sharing",
  //   keyLink: "https://drive.google.com/file/d/1qE1iV3kQ-HQr6BOUmFQU_F8nG0I9emEI/view?usp=sharing",
  //   keyReleaseTime: "2024-05-02T15:00:00-05:00",
  // },
  // {
  //   course: "ECE 350",
  //   time: "5/2 3:00-5:30PM",
  //   location: "ECEB 3015",
  //   worksheetLink: "https://drive.google.com/file/d/1CeGlt_qZd_SLGMbCwrbco8Ntf2suj5-5/view?usp=sharing",
  //   keyLink: "https://drive.google.com/file/d/1MICURQdTIvWJZnHI3YjTDLn1H1Q7TFZ-/view?usp=sharing",
  //   keyReleaseTime: "2024-05-02T15:00:00-05:00",
  //   slidesLink: "https://docs.google.com/presentation/d/1MECEbz1dDlIxj6KvqyJ6kjCWDwF84mu8R51zR_Jf8UI/edit?usp=sharing",
  //   recordingLink: "https://mediaspace.illinois.edu/media/t/1_7foc80dj"
  // },
  // {
  //   course: "CS 374A",
  //   time: "5/4 2:00-4:30PM",
  //   location: "Siebel 1404",
  //   // slidesLink: "https://drive.google.com/file/d/1cKqBNrH7k2fnFHp06Y11nUkp9K3lOE7O/view?usp=drive_link",
  //   // scribblesLink: "https://drive.google.com/file/d/1m4SSRyVtapDuvSFK7KXoYJiQlFZAoaE3/view?usp=drive_link",
  //   worksheetLink: "https://drive.google.com/file/d/1kLOFiO09hel_KftFz28hO7OPwHCfvaVB/view?usp=sharing",
  //   // keyLink: "https://drive.google.com/file/d/1tEgoYL3vyryEalS5us-mBotVc1_b0K5F/view?usp=sharing",
  // },
  // {
  //   course: "ECE 374B",
  //   time: "5/5 12:30-3:00PM",
  //   location: "ECEB 1013",
  //   worksheetLink: "https://drive.google.com/file/d/1kLOFiO09hel_KftFz28hO7OPwHCfvaVB/view?usp=sharing",
  //   keyLink: "https://drive.google.com/file/d/1sCiYhP2Y7BNYp5pGUI2oJwX36v_JL4KN/view?usp=sharing",
  //   // slidesLink: "https://drive.google.com/file/d/1cKqBNrH7k2fnFHp06Y11nUkp9K3lOE7O/view?usp=drive_link",
  //   // recordingLink: "https://mediaspace.illinois.edu/media/t/1_35kv49ft",
  // },
  // {
  //   course: "ECE 391",
  //   time: "5/4 3:00-5:30PM",
  //   location: "ECEB 1002",
  // },
  // {
  //   course: "ECE 411",
  //   time: "5/5 12:30-3:00PM",
  //   location: "ECEB 1015",
  //   slidesLink: "https://docs.google.com/presentation/d/1saTt_Vpiwl7udDS04x9DtKx1J4lEz-bx6getC6EiyxU/edit?usp=sharing",
  // },
];
