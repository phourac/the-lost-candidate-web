import axios from "axios";
import { ROUTE_API, ROUTE_PATH } from "../utils/route-util";

const PROBLEM_API = {
  getListProblem: async (search: string, page: number,limit?:number) => {
    const api = "/api/problem";
    const res = await axios.get<IProblem.IProblemList>(
      // ROUTE_PATH.baseUrl + "/" + ROUTE_API.getReference
      ROUTE_PATH.baseUrl + api,
      { params: { search, page,limit } }
    );
    return res.data;
  },

  createProblem: async (data: IProblem.ICreateProblem) => {
  const api = ROUTE_API.getProblem;
  const res = await axios.post<IProblem.IProblemList>(
    `${ROUTE_PATH.baseUrl}/${api}`, 
    data
  );
  return res.data;
  },
  

updateProblem: async (id:string,data: IProblem.ICreateProblem) => {
  const api = ROUTE_API.detailProblem;
  const res = await axios.put<IProblem.IProblemList>(
    `${ROUTE_PATH.baseUrl}/${api.replace(':id',id)}`, 
    data
  );
  return res.data;
  },

  detailProblem: async (id:string) => {
  const api = ROUTE_API.detailProblem;
  const res = await axios.get<IProblem.IDetail>(
    `${ROUTE_PATH.baseUrl}/${api.replace(':id',id)}`
  );
  return res.data;
  },

  deleteProblem: async (id:string) => {
  const api = ROUTE_API.detailProblem;
  const res = await axios.delete<IProblem.IProblemList>(
    `${ROUTE_PATH.baseUrl}/${api.replace(':id',id)}`,
  );
  return res.data;
},
};

export default PROBLEM_API;
