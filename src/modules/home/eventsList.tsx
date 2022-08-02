// import { useState } from "react";
// import InterviewService from "../common/Api/Interview.service";

// type CandidatePost = {
//   status?: string[];
//   stage?: string[];
//   paging: {
//     pageSize: number;
//     pageNumber: number;
//   };
//   sortOrder?: {
//     sort: [
//       {
//         key: string;
//         value: string;
//       }
//     ];
//   };
// };

// const eventsList = () => {
//   const [interview, setInterview] = useState<CandidatePost[]>([]);

//   const postData = {
//     paging: {
//       pageSize: 100,
//       pageNumber: 1,
//     },
//   };

//   const getInterview = async () => {
//     const data = await InterviewService.interviewHttpPost("GetList", postData);
//     setInterview(data.data);
//   };
// };

// export default eventsList();

const eventList = [
  {
    title: "Interview with John Doe",
    start: new Date(2022, 6, 15, 9, 30),
    end: new Date(2022, 6, 15, 10),
  },
  {
    title: "Phone interview with John Doe",
    start: new Date(2022, 6, 16, 10, 30),
    end: new Date(2022, 6, 16, 11, 30),
  },

  {
    title: "Tech interview with John Doe",
    start: new Date(2022, 6, 18, 14, 30),
    end: new Date(2022, 6, 18, 15, 30),
  },

  {
    title: "Offer",
    start: new Date(2022, 6, 18, 8, 30),
    end: new Date(2022, 6, 18, 9, 30),
  },
];

export default eventList;
