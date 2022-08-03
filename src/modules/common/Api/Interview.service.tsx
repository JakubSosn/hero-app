import axios from "axios";

type InterviewPost = {
  formData?: string;
  toData?: string;
  candidateId?: number;
  workerId?: number;
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

const client = axios.create({
  baseURL: "https://swh-t-praktyki2022-app.azurewebsites.net/Interview/",
  withCredentials: true,
});

const candidateHttpGet = (endpoint: string) => {
  return client.get(`${endpoint}`);
};

const interviewHttpPost = (endpoint: string, postData: InterviewPost) => {
  return client.post(`${endpoint}`, postData);
};

const candidateHttpPut = (endpoint: string, postData: InterviewPost) => {
  return client.put(`${endpoint}`, postData);
};

const candidatetHttpDelete = (endpoint: string) => {
  return client.delete(`${endpoint}`);
};

export default {
  candidateHttpGet,
  interviewHttpPost,
  candidateHttpPut,
  candidatetHttpDelete,
};
