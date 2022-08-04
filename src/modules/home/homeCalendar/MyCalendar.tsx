import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Events from "../../common/mocks/Events.json";
import InterviewService from "../../common/Api/Interview.service";

const localizer = momentLocalizer(moment);

type InterviewProps = {
  interviewId?: number;
  date?: string;
  start?: string;
  candidateId?: number;
  candidateName?: string;
  title?: string;
  candidateLastName?: string;
  candidateEmail?: string;
  candidateStatus?: string;
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

  useEffect(() => {
    getInterview();
  }, []);

  console.log(interview);

  // tu zaczyna się mój pomysł nadpisania candidateName na title i date na start

  let eventsList = interview;

  const renameTitle = () => {
    eventsList = eventsList.map(function (obj) {
      obj["title"] = obj["candidateName"];
      delete obj["candidateName"];
      return obj;
    });
  };
  const renameStart = () => {
    eventsList = eventsList.map(function (obj) {
      obj["start"] = obj["date"];
      delete obj["date"];
      return obj;
    });
  };

  renameTitle();
  renameStart();
  console.log(interview);
  console.log(eventsList);

  // i tu to działa ale jeszcze wydaje mi się, że zaciągana data z beckendu jest w nieczytelnym dla kalendarza formacie i tu nie mam narazie pomysłu jak zmienić stare value na nowe ( daty ).

  return (
    interview && (
      <div className="myCustomHeight">
        <Calendar
          localizer={localizer}
          events={eventsList}
          startAccessor="start"
          // endAccessor="end"
          style={{ height: 600, width: 1000 }}
        />
      </div>
    )
  );
};

export default MyCalendar;
