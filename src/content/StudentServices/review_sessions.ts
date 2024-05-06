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
      time: "2/17, 12:30-3:00PM",
      location: "ECEB 1002",
      slidesLink:
        "https://docs.google.com/presentation/d/1IfLTDXAXTyClxgFoPgG-EllETeaFWKKF/edit?usp=sharing&ouid=104786379280630850812&rtpof=true&sd=true",
      scribblesLink:
        "https://drive.google.com/file/d/1szQQvXQFEOUI32z6VxAn_KGgMSxclwjQ/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_bv2u6drd",
    },
    {
      course: "ECE 120",
      time: "2/11, 1:00-3:00PM",
      location: "ECEB 1002",
    },
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
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_zxao4gfy",
    },
    {
      course: "ECE 220",
      time: "2/10, 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1bT0OEXtO2O1YNWuZl-T_vqt0Ml8n78w8zX0DjI3G64M",
      worksheetLink:
        "https://drive.google.com/file/d/1n9P8LMIEFZXKYSaQCWnhG0det1iql6zN/view?usp=drive_link",
      keyLink:
        "https://drive.google.com/file/d/1MuYQ5aQBiSIl7awc5zkpwF89c1uZUdI6/view?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_3hii29n3",
    },
    {
      course: "ECE 310",
      time: "2/25, 12:30-3:00PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1ncav1BicR5VmJU2PyVeYhYkn6QZSKTHBdrikEqyWk_U/edit?usp=sharing",
      worksheetLink:
        "https://drive.google.com/file/d/1XcMCJx5hiI-y6V9XCha2BWWgAv_uhxpz/view?usp=sharing",
      keyLink:
        "https://drive.google.com/file/d/1sJmNCVddjOlf7O4f9HFMHY0YBiNbzXEO/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_gvdn6vdy",
    },
    {
      course: "ECE 313",
      time: "2/24, 12:30-3:00PM",
      location: "ECEB 1015",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_u1wnpqjc",
      slidesLink:
        "https://docs.google.com/presentation/d/1JBbI-NtobciLy8ClZU8orgxUYxGYNwe1VF_hbzcXXb8/edit?usp=sharing",
      worksheetLink:
        "https://drive.google.com/file/d/1QyGtcQTM7Af7ar-jFl6IeuRhD5eYanwJ/view?usp=sharing",
      keyLink:
        "https://drive.google.com/file/d/1EWiPR-csEOFQ2_phVIrzapdM2SCkx771/view?usp=sharing",
    },
    {
      course: "ECE 329",
      time: "2/17, 3:00-5:30PM",
      location: "ECEB 1013",
      slidesLink:
        "https://docs.google.com/presentation/d/1383nllT-HXhTrJVgKoTaEgW9KMQuRQZyfPC8eRYTR88/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_fce4pbdi",
    },
    {
      course: "ECE 330",
      time: "2/18, 12:30-3:00PM",
      location: "ECEB 1013",
      slidesLink:
        "https://docs.google.com/presentation/d/1jY0y60I7RX22yc2BUF-11JNqZiu4jhlL4Xu3rzagLuQ/edit?usp=sharing",
    },
    {
      course: "ECE 340",
      time: "2/25, 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1czZLDwCpj35HxSlKPHGlTLuINqHZ1VdQKET2jbhQ-pE/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_wjycs1n6",
    },
    {
      course: "ECE 342",
      time: "2/11, 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1luZMo6VillVmYgoIj4LHa38TeRx_EHNcbU0sOkzCyhU",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_6370cupj",
    },
    {
      course: "ECE 350",
      time: "2/17, 12:30-3:00PM",
      location: "ECEB 2015",
      slidesLink:
        "https://docs.google.com/presentation/d/1RSf3oz3aaozIApIQLowirUpX2nicIgqloZ0b-sfiLOA/edit?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_0mq2wza9",
    },
    {
      course: "CS 374A",
      time: "2/18, 12:30-3:00PM",
      location: "ECEB 1002",
      slidesLink:
        "https://drive.google.com/file/d/1ZFEj7r-tDQo-5RP2-QyuptxSmv2sSYrK/view?usp=sharing",
    },
    {
      course: "ECE 374B",
      time: "2/11, 3:00-5:30PM",
      location: "ECEB 1013",
      slidesLink:
        "https://drive.google.com/file/d/1ZFEj7r-tDQo-5RP2-QyuptxSmv2sSYrK/view?usp=sharing",
      // worksheetLink:
      //   "https://drive.google.com/file/d/1-rDiFGUKRu2xR4nK9bDSLzDKqITh17qO/view?usp=sharing",
      // keyLink:
      //   "https://drive.google.com/file/d/19_mMuWbkKN-m7gugjq7rayM811pr5v2T/view?usp=sharing",
      // keyReleaseTime: "2023-09-17T15:00:00-05:00",
      scribblesLink:
        "https://drive.google.com/file/d/1-3uQ6L2GA7CPNSo13GC6nIpOLKtizEwD/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_kmtd1w6e",
    },
    {
      course: "ECE 391",
      time: "2/17, 3:00-5:30PM",
      location: "ECEB 1002",
    },
    {
      course: "ECE 411",
      time: "3/3, 12:30-3:00PM",
      location: "ECEB 1002",
      slidesLink:
        "https://docs.google.com/presentation/d/1umRdm6g6jMtTdmjKkQ4TOy9RG-BespwyCiBSjszgNoM/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_e8in3a93",
    },
  ],

  // Midterm 2 review sessions

  2: [
    {
      course: "ECE 110",
      time: "3/24, 12:30-3:00PM",
      location: "ECEB 1002",
      slidesLink:
        "https://docs.google.com/presentation/d/1OWKQ_sS6RLGxqWoqXPmza96pVSSbDUccQ8zso4pvPSU/edit?usp=sharing",
      scribblesLink:
        "https://drive.google.com/file/d/11Gw972zpYju-4vF6VIi9nejRYHXTbrWQ/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_6x4diavi",
    },
    {
      course: "ECE 120 (UAs)",
      time: "3/18, 7:00-10:00PM",
      location: "ECEB 1002",
//       slidesLink:
//         "https://docs.google.com/presentation/d/1W0Ta4_LwfKXOBjj2kYrGVJ3gLCzaIWhydKWHHd_6nSQ/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_jdnxkt8n",
      worksheetLink:
        "https://drive.google.com/file/d/1tCjIziHAKFdBZALyICnE2sq3RvWKEJgU/view?usp=sharing",
      keyLink:
        "https://drive.google.com/file/d/1ItWM1H7koBHf9ejyopE5zPVl1uZsmaxo/view?usp=sharing",
    },
    {
      course: "ECE 210",
      time: "3/18, 6:00-8:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1WXhSyWozhJmAxKNuyoAlqjH5mu6kRjTFgNCPTFx1l2I/edit?usp=sharing",
//       recordingLink: "https://mediaspace.illinois.edu/media/t/1_0e2jahqc",
    },
    {
      course: "ECE 220",
      time: "3/24, 3:00-5:30PM",
      location: "ECEB 1013",
      slidesLink:
        "https://docs.google.com/presentation/d/1V6qqxGOgnFcgI83QXwsbHh_nx_72zf6liahRgr2-jSM/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_2nherjwe",
      worksheetLink:
        "https://drive.google.com/file/d/1uYPoqthQ8to6F4MNifMA606HnsH2lkxU/view?usp=sharing",
      keyLink:
        "https://drive.google.com/file/d/1NKmUaxwRYsfZ8imVdg_51B0Zy1RP6lf4/view?usp=sharing",
      keyReleaseTime: "2024-03-24T17:30:00-05:00",
    },
    {
      course: "ECE 310",
      time: "4/7, 12:30-3:00PM",
      location: "ECEB 1015",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_bz4r2e4k",
      slidesLink:
        "https://docs.google.com/presentation/d/1HbR9sTHtezBkg0azU-Q1MWmEQHga1Ui1sxniE_pm4Mg/edit?usp=sharing",
    },
    {
      course: "ECE 313",
      time: "4/6, 12:30-3:00PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1nw052Ty7WH8-kGdZTvHYT-LCIyV4OTo4eHR0djIT1YM/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_2vmyhndm",
    },
    {
      course: "ECE 329",
      time: "3/23, 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1QHAjzuZ5Fywo5LT0x87cgkGFB3RI24g_Gs-YkqAXInE/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_ctt4lv86",
    },
    {
      course: "ECE 330",
      time: "4/7, 3:00-5:30PM",
      location: "ECEB 1013",
      slidesLink:
        "https://docs.google.com/presentation/d/1bSnLkdFRL1WBnzCzmyAsix2wlfDOzWmOwh5JHzfIyx0/edit?usp=sharing",
      scribblesLink:
        "https://drive.google.com/file/d/1TsvMj3YuX63V4256oDsFMoXTEuVcc9vI/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_m5tjwfrx",
    },
    {
      course: "ECE 340",
      time: "4/7, 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink:
        "https://docs.google.com/presentation/d/1RHME70gYH1FnC8Y2nYUx4x9rKAmlgL8fXKoIxP7G2JU/edit?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_i4wz8g16",
    },
    {
      course: "ECE 342",
      time: "3/18, 6:00-8:30PM",
      location: "ECEB 1013",
      slidesLink:
        "https://docs.google.com/presentation/d/1ZgxDYUFewamjfa-PdvK9vt7mB41DlJe0TtoJFoxWRF4/edit?usp=sharing",
      worksheetLink:
        "https://drive.google.com/file/d/1-auc6bO46KBl2jYDruYjt7UkFVNGFb3k/view?usp=sharing",
      keyLink:
        "https://drive.google.com/file/d/1wXioRkkK8Bw8u51wy-O8ljfb1sZyMwaO/view?usp=sharing",
      keyReleaseTime: "2024-03-18T20:00:00-05:00",
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
      time: "4/7, 3:00-5:30PM",
      location: "ECEB 1002",
      // slidesLink:
      //   "https://drive.google.com/file/d/1BVppK_jApksBTZjT8IJ_tyohV0VNBav1/view?usp=drive_link",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_sgt8mpzt",
    },
    {
      course: "ECE 374B",
      time: "3/24, 3:00-5:30PM",
      location: "ECEB 1002",
      worksheetLink: "https://drive.google.com/file/d/1gzvy4hKZx5bcF7r4mrC4ckXAbsHX50Wm/view?usp=sharing",
      keyLink: "https://drive.google.com/file/d/1XGW8rHaVVX4s1AjK1zMyhtDtPx1RkS1F/view?usp=sharing",
      // slidesLink:
      //   "https://drive.google.com/file/d/19cirgmF24QO9xwP8UwXdqHf-pRrVcZF9/view?usp=sharing",
      // scribblesLink:
      //   "https://drive.google.com/file/d/1ZZsszBtJo3fvqj0VmFnVqIQLp3QFzNZy/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_a79o43s3",
    },
    {
      course: "ECE 391",
      time: "4/6, 3:00-5:30PM",
      location: "ECEB 1013",
    },
    {
      course: "ECE 411",
      time: "4/7, 3:00-5:30PM",
      location: "ECEB 3017",
      slidesLink: "https://docs.google.com/presentation/d/1RxGG7Xf054iLV-8icGPAlUTB2qeHHKJSVdlnov44-80/edit?usp=sharing"
    },
  ],

// Midterm 3 review sessions

  3: [
    {
      course: "ECE 110",
      time: "4/21, 12:30-3:00PM",
      location: "ECEB 1002",
      slidesLink: "https://docs.google.com/presentation/d/1QvRQnYmKcQC1gmqnU8ohSGsW-1r0ihUvBR3PL9j4Jc0/edit?usp=sharing",
      recordingLink: "https://www.youtube.com/watch?v=-fhvLrEu7Oc",
      scribblesLink: "https://docs.google.com/presentation/d/1-bsxPCcENlldCsLubQ1MujtiV81abzFLBOgF94rZVNE/edit#slide=id.g267f7df4078_0_0",
    },
    {
      course: "ECE 120 (UAs)",
      time: "4/13, 1:00-4:00PM",
      location: "ECEB 1002",
      worksheetLink: "https://drive.google.com/file/d/1RpXgilbk1FrwYEla4lr0BjmSWVsg2ru8/view?usp=sharing",
      keyLink: "https://drive.google.com/file/d/1DxbKAm1mwIUZ5pTmJ7b1pz6YhyXXYz2M/view?usp=sharing",
    },
    {
      course: "ECE 210",
      time: "4/14, 3:00-5:30PM",
      location: "ECEB 1015",
      slidesLink: "https://docs.google.com/presentation/d/1tkkHZ1iaml3Ke6MFeJ6ECYeMaPg7F_qxV4_3RDyElWI/edit?usp=sharing", 
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_mhy1j12e",
    },
    {
      course: "ECE 329",
      time: "4/21, 3:00-5:30PM",
      location: "ECEB 3015",
      slidesLink: "https://docs.google.com/presentation/d/1AtV7mXUH_k9ufVmR4S5nNGq6OGTzUCMQ3f50F6AKv0s/edit?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_9i6aubp9",
    },
    {
      course: "ECE 342",
      time: "4/14, 3:00-5:30PM",
      location: "ECEB 1013",
      slidesLink: "https://docs.google.com/presentation/d/1Klkg574gDn7ipX_sFVVRMM1FMl6qT5wvt4K-TJ-8xyM/edit?usp=sharing",
      worksheetLink:
      "https://drive.google.com/file/d/11b2sUV6kaXwtyKw_671XNCXeyP2ZQr7h/view?usp=sharing",
      keyLink:
      "https://drive.google.com/file/d/1j9588Km3CgqWTrX6sKJE-vr2Zu5WpOa9/view?usp=sharing",
      scribblesLink:
        "https://drive.google.com/file/d/1mHsOz30C9bhJnVhcBkNjhdZWZRZg47UK/view?usp=sharing",
      recordingLink: "https://mediaspace.illinois.edu/media/t/1_3fqapsae"
    },
    {
      course: "ECE 350",
      time: "4/21, 3:00-5:30PM",
      location: "Cancelled",
      slidesLink: "https://docs.google.com/presentation/d/1NtDjL3Rcd1HD5Wu7qxKh20cl6dz7YoonETwadpEztqM/edit?usp=sharing"
    },
    {
      course: "ECE 374B",
      time: "4/21, 3:00-5:30PM",
      location: "CIF 2035",
      // slidesLink: "https://drive.google.com/file/d/1k10ZIkoo3lJk4qpopX3AoQFPiJAM48FE/view?usp=sharing",
      // scribblesLink: "https://drive.google.com/file/d/1sSDGObzFvQ136ib-DUcnXO19KXCdSMWH/view?usp=sharing",
      worksheetLink: "https://drive.google.com/file/d/1B0-Gnii5PvOewTqA-89D87LCrGULHblB/view?usp=sharing",
      keyLink: "https://drive.google.com/file/d/1Tc7anorVPHyqryQdvRFwJv3gEA6QIEMN/view?usp=sharing",
      // recordingLink: "https://mediaspace.illinois.edu/media/t/1_odrz04ix"
    }
  ],
};

// When the UI should rollover stop showing the given review session
// Remember that months are zero indexed but days are not.
export const until: Record<1 | 2 | 3, Date> = {
  1: new Date(2024, 2, 1),
  2: new Date(2024, 3, 11), // ends 4/11
  3: new Date(2024, 3, 26), // Date(1) makes sure this will never be default bc it occured in the past
};

// Final review sessions

export const crammingCarnival: ReviewSession[] = [
  {
    course: "ECE 110",
    time: "5/5 12:30-3:00PM",
    location: "ECEB 1002",
    worksheetLink: "https://drive.google.com/file/d/1vyxIWB40dKTKbQ8IrY9NC9GVQWhgmiKN/view?usp=sharing",
    keyLink: "https://drive.google.com/file/d/1E3gmO7KG4qtiMCYEyeerOll93LG5qCUo/view?usp=sharing",
    keyReleaseTime: "2024-05-05T15:00:00-05:00",
    slidesLink: "https://docs.google.com/presentation/d/1195XdMWAw-zQcDaKMiYT4-bIBKBj242_W4NXrQGX5oc/edit?usp=sharing",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_d90ihf5u",
  },
  {
    course: "ECE 120 (UAs)",
    time: "5/4 12:30-3:00PM",
    location: "ECEB 1002",
    worksheetLink: "https://drive.google.com/file/d/1fxpuBboxJ9lkSbCVlldmWIh4DGcDat19/view?usp=sharing",
    keyLink:  "https://drive.google.com/file/d/1EynkgwdklzWUELRWDiQ6cRQ-yuCZ3k0G/view?usp=sharing",
  },
  {
    course: "ECE 210",
    time: "5/5 3:00-5:30PM",
    location: "ECEB 1015",
    worksheetLink: "https://drive.google.com/file/d/1Reyf0MNfHZx0Fwu56MfwOJs4hmeYdiAA/view?usp=sharing",
    keyLink: "https://drive.google.com/file/d/1tJvNCfQ4HniZwQBPqXUKCRMJNY038jZW/view?usp=drive_link",
    keyReleaseTime: "2024-05-05T17:30:00-05:00",
    slidesLink: "https://docs.google.com/presentation/d/1CfkrvZaRmbIvkvXor6tDsYa89rXSqG7u3lCB7NwLzIE/edit?usp=sharing",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_cui9ujoj",
  },
  {
    course: "ECE 220",
    time: "5/4 3:00-5:30PM",
    location: "ECEB 2013",
    worksheetLink: "https://drive.google.com/file/d/1H_5uCX3avTifvlBBCbBBSZ88B01P4dOl/view?usp=sharing",
    keyLink: "https://drive.google.com/file/d/1DXfsl9t33_-SrhjLm-sl1RokncvOhm6x/view?usp=drive_link",
    slidesLink: "https://docs.google.com/presentation/d/12HG697kACXEFVtFxx99-T8gVxCguXIe-C98YC_fOkto/edit?usp=sharing",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_fdcs3o5t",
  },
  {
    course: "ECE 310",
    time: "5/2 3:00-5:30PM",
    location: "ECEB 1015",
    worksheetLink: "https://drive.google.com/file/d/1T51zOjcGymDn-seQjjVmkT7eBWIxu5Iv/view?usp=sharing",
    keyLink: "https://drive.google.com/file/d/1QhmA73-vLdBFd2W5lOhnE5kEmPTzC1-n/view?usp=sharing",
    keyReleaseTime: "2024-05-02T15:00:00-05:00",
    slidesLink: "https://docs.google.com/presentation/d/1iMMu6iwAZQYGhq-r6cMGx05Qp3ELlfphXmLcVxRBH6I/edit?usp=sharing",
    recordingLink: "https://mediaspace.illinois.edu/media/t/1_9utvtz02",
  },
  {
    course: "ECE 313",
    time: "5/5 3:00-5:30PM",
    location: "ECEB 1013",
    worksheetLink: "https://drive.google.com/file/d/100VMlQLnIhOp5jgspYP4OOd75zlhy4Ic/view?usp=sharing",
    keyLink: "https://drive.google.com/file/d/10C5Zu49BlNYAHoyJ_i7dVYOzKRo13nji/view?usp=sharing",
    keyReleaseTime: "2024-05-05T17:30:00-05:00",
    slidesLink: "https://docs.google.com/presentation/d/1QyfV6RLjtbeXq2waUGUnJ_wpEt-Em90Jq_Dm66o7B7g/edit?usp=sharing",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_1mp2tdi1",
  },
  {
    course: "ECE 329",
    time: "5/4 3:00-5:30PM",
    location: "ECEB 1013",
    worksheetLink: "https://drive.google.com/file/d/1ViEq9sjt-MGtsu5PVd8cUAdj3YFowUMT/view?usp=sharing",
    keyLink: "https://drive.google.com/file/d/1kXhCLQTFBdye9PR_6jPwxI50mnq5gGRw/view?usp=sharing",
    slidesLink: "https://docs.google.com/presentation/d/1HLXTdKzjYesI8kfQqmyRgpcTxO5mpsRIj0IwlBaIo1A/edit#slide=id.p",
    recordingLink: "https://mediaspace.illinois.edu/media/t/1_k6gv0sj6",

  },
  {
    course: "ECE 330",
    time: "5/4 12:30-3:00PM",
    location: "ECEB 1013",
    worksheetLink: "https://drive.google.com/file/d/1-c5n1eYXoh1zgtKt_juDpg77cnb5V4re/view?usp=sharing",
    keyLink: "https://drive.google.com/file/d/1tUWm_3Maav82SDEaEcTzClY8127Ty9QG/view?usp=sharing",
    slidesLink: "https://docs.google.com/presentation/d/1vMyI7PFTXFXaN7h8ZTqXa5aeTm8ndin6g4oVZ-Z3FM0/edit?usp=sharing",
    recordingLink: "https://mediaspace.illinois.edu/media/t/1_nc4pkh22"
  },
  {
    course: "ECE 340",
    time: "5/2 12:30-3:00PM",
    location: "ECEB 1015",
    worksheetLink: "https://drive.google.com/file/d/18h9MuOni-8TEX8cS9nw5pPqMAAnbcZGk/view?usp=sharing",
    keyLink: "https://drive.google.com/file/d/1k57IRKvujePXyB3gOXLQM9lTH_YgWphA/view?usp=sharing",
    slidesLink: "https://docs.google.com/presentation/d/1pmCGALsXBvKEJ_CPcXr2sVu2ax1FtyvwB8d3lAzfj_k/edit?usp=sharing",
    recordingLink: "https://mediaspace.illinois.edu/media/t/1_np47vmfw",
  },
  {
    course: "ECE 342",
    time: "5/2 12:30-3:00PM",
    location: "ECEB 1013",
    worksheetLink: "https://drive.google.com/file/d/12kpBqZWr2JaSjBV59rCH3FjvcIWgExd9/view?usp=sharing",
    keyLink: "https://drive.google.com/file/d/1qE1iV3kQ-HQr6BOUmFQU_F8nG0I9emEI/view?usp=sharing",
    keyReleaseTime: "2024-05-02T15:00:00-05:00",
  },
  {
    course: "ECE 350",
    time: "5/2 3:00-5:30PM",
    location: "ECEB 3015",
    worksheetLink: "https://drive.google.com/file/d/1CeGlt_qZd_SLGMbCwrbco8Ntf2suj5-5/view?usp=sharing",
    keyLink: "https://drive.google.com/file/d/1MICURQdTIvWJZnHI3YjTDLn1H1Q7TFZ-/view?usp=sharing",
    keyReleaseTime: "2024-05-02T15:00:00-05:00",
    slidesLink: "https://docs.google.com/presentation/d/1MECEbz1dDlIxj6KvqyJ6kjCWDwF84mu8R51zR_Jf8UI/edit?usp=sharing",
    recordingLink: "https://mediaspace.illinois.edu/media/t/1_7foc80dj"
  },
  {
    course: "CS 374A",
    time: "5/4 2:00-4:30PM",
    location: "Siebel 1404",
    // slidesLink: "https://drive.google.com/file/d/1cKqBNrH7k2fnFHp06Y11nUkp9K3lOE7O/view?usp=drive_link",
    // scribblesLink: "https://drive.google.com/file/d/1m4SSRyVtapDuvSFK7KXoYJiQlFZAoaE3/view?usp=drive_link",
    worksheetLink: "https://drive.google.com/file/d/1kLOFiO09hel_KftFz28hO7OPwHCfvaVB/view?usp=sharing",
    // keyLink: "https://drive.google.com/file/d/1tEgoYL3vyryEalS5us-mBotVc1_b0K5F/view?usp=sharing",
  },
  {
    course: "ECE 374B",
    time: "5/5 12:30-3:00PM",
    location: "ECEB 1013",
    worksheetLink: "https://drive.google.com/file/d/1kLOFiO09hel_KftFz28hO7OPwHCfvaVB/view?usp=sharing",
    keyLink: "https://drive.google.com/file/d/1sCiYhP2Y7BNYp5pGUI2oJwX36v_JL4KN/view?usp=sharing",
    // slidesLink: "https://drive.google.com/file/d/1cKqBNrH7k2fnFHp06Y11nUkp9K3lOE7O/view?usp=drive_link",
    // recordingLink: "https://mediaspace.illinois.edu/media/t/1_35kv49ft",
  },
  {
    course: "ECE 391",
    time: "5/4 3:00-5:30PM",
    location: "ECEB 1002",
  },
  {
    course: "ECE 411",
    time: "5/5 12:30-3:00PM",
    location: "ECEB 1015",
    slidesLink: "https://docs.google.com/presentation/d/1saTt_Vpiwl7udDS04x9DtKx1J4lEz-bx6getC6EiyxU/edit?usp=sharing",
  },
];
