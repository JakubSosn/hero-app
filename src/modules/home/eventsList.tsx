import { useState } from "react";
import InterviewService from "../common/Api/Interview.service";

type CandidatePost = {
  status?: string[];
  stage?: string[];
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

const eventsList = () => {
  const [interview, setInterview] = useState<CandidatePost[]>([]);

  const postData = {
    paging: {
      pageSize: 100,
      pageNumber: 1,
    },
  };

  const getInterview = async () => {
    const data = await InterviewService.interviewHttpPost("GetList", postData);
    setInterview(data.data);
  };
};

export default eventsList();
