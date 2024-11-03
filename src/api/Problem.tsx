import axios from "axios";
import { ROUTE_API, ROUTE_PATH } from "../utils/route-util";

const PROBLEM_API = {
  getListProblem: async (search: string, page: number) => {
    const api = "/api/problem";
    const res = await axios.get<IProblem.IProblemList>(
      // ROUTE_PATH.baseUrl + "/" + ROUTE_API.getReference
      ROUTE_PATH.baseUrl + api,
      { params: { search, page } }
    );
    return res.data;
  },
};

export default PROBLEM_API;
