import axios from "axios";
import { ROUTE_API, ROUTE_PATH } from "../utils/route-util";

const INTERVIEW_API = {
  getListReference: async (search: string, page: number,limit?:number
) => {
    const api = "/api/interview";
    const res = await axios.get<IInterview.IInterviewList>(
      // ROUTE_PATH.baseUrl + "/" + ROUTE_API.getReference
      ROUTE_PATH.baseUrl + api,
      { params: { search, page ,limit} }
    );
    return res.data;
  },

createInterview: async (data: IInterview.ICreateInterview) => {
  const api = ROUTE_API.getInterview;
  const res = await axios.post<IInterview.IInterviewList>(
    `${ROUTE_PATH.baseUrl}/${api}`, 
    data
  );
  return res.data;
  },
  

updateInterview: async (id:string,data: IInterview.ICreateInterview) => {
  const api = ROUTE_API.detailInterview;
  const res = await axios.put<IInterview.IInterviewList>(
    `${ROUTE_PATH.baseUrl}/${api.replace(':id',id)}`, 
    data
  );
  return res.data;
  },

  detailInterview: async (id:string) => {
  const api = ROUTE_API.detailInterview;
  const res = await axios.get<IInterview.IDetail>(
    `${ROUTE_PATH.baseUrl}/${api.replace(':id',id)}`
  );
  return res.data;
  },

  deleteInterview: async (id:string) => {
  const api = ROUTE_API.detailInterview;
  const res = await axios.delete<IInterview.IInterviewList>(
    `${ROUTE_PATH.baseUrl}/${api.replace(':id',id)}`,
  );
  return res.data;
},



  
};

export default INTERVIEW_API;
