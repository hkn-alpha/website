type ReviewSession = {
  course: string;
  time: string;
  location: string;
  slidesLink?: string;
  worksheetLink?: string;
  recordingLink?: string;
};

export const reviewSessions: Record<number, ReviewSession[]> = {
  1: [
    {
      course: "ECE/CS374",
      time: "2:00-4:00PM",
      location: "ECEB 1002",
    },
  ],
};

export const crammingCarnival: ReviewSession[] = [];
