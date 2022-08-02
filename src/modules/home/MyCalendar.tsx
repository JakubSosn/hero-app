import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import eventsList from './eventsList';

const localizer = momentLocalizer(moment);


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
const MyCalendar = ({}) => (

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
  <div className="myCustomHeight">
    <Calendar
      localizer={localizer}
      events={}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 600 }}
    />
  </div>
);

export default MyCalendar;
