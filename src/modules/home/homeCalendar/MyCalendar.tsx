import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Events from "../../common/mocks/Events.json";
import InterviewService from "../../common/Api/Interview.service";
import interviewList from "./interviewList";

const localizer = momentLocalizer(moment);

type InterviewProps = {
  interviewId: number;
  data?: string;
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
const MyCalendar = () => {
  // const [interview, setInterview] = useState<InterviewProps[]>([]);

  // const postData = {
  //   paging: {
  //     pageSize: 50,
  //     pageNumber: 1,
  //   },
  // };

  // const getInterview = async () => {
  //   const data = await InterviewService.interviewHttpPost("GetList", postData);
  //   setInterview(data.data.interviewDTOs);
  // };

  // interviewList();

  return (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        events={Events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, width: 1000 }}
      />
    </div>
  );
};

export default MyCalendar;
