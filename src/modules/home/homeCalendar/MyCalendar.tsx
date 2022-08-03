import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Events from '../../common/mocks/Events.json';

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
const MyCalendar = () => (
  // const [interview, setInterview] = useState<CandidatePost[]>([]);

  // const postData = {
  //   paging: {
  //     pageSize: 100,
  //     pageNumber: 1,
  //   },
  // };

  // const getInterview = async () => {
  //   const data = await InterviewService.interviewHttpPost("GetList", postData);
  //   setInterview(data.data);
  // };
  <div className='myCustomHeight'>
    <Calendar
      localizer={localizer}
      events={Events}
      startAccessor='start'
      endAccessor='end'
      style={{ height: 600, width: 1000 }}
    />
  </div>
);

export default MyCalendar;
