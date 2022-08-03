import { TimeToLeave } from "@mui/icons-material";
import { useState } from "react";
import { dateFnsLocalizer } from "react-big-calendar";
import InterviewService from "../../common/Api/Interview.service";

type InterviewProps = {
  interviewId: number;
  date?: string;
  candidateId?: number;
  candidateName: string;
  candidateLastName: string;
  candidateEmail: string;
  candidateStatus: string;
  workerId?: number;
  workerEmail: string;
  type?: string;
  paging: {
    pageSize: number;
    pageNumber: number;
  };
  sortOrder?: {
    sort: [
      {
        key: string;
        value: string;
      }
    ];
  };
};

const interviewList = async () => {
  const [interview, setInterview] = useState<InterviewProps[]>([]);

  const postData = {
    paging: {
      pageSize: 50,
      pageNumber: 1,
    },
  };

  const getInterview = async () => {
    const data = await InterviewService.interviewHttpPost("GetList", postData);
    setInterview(data.data.interviewDTOs);
  };

  // const listOfInterview = (title, date) => {
  //   {title: title,
  //   date: date,}
  // }

  return console.log(interview);

  // return (
  //   interview.map(data => {
  //     {title: data.candidateName,
  //       date: data.date }
  //   })
  // )
};

export default interviewList;

// {
//   "title": "Phone interview with John Doe",
//   "start": "new Date(2022, 6, 16, 10, 30)",
//   "end": "new Date(2022, 6, 16, 11, 30)"
// },
