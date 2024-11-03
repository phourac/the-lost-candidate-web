import axios from "axios";
import { ROUTE_API, ROUTE_PATH } from "../utils/route-util";

const INTERVIEW_API = {
  getListReference: async (search: string, page: number) => {
    const api = "/api/interview";
    const res = await axios.get<IInterview.IInterviewList>(
      // ROUTE_PATH.baseUrl + "/" + ROUTE_API.getReference
      ROUTE_PATH.baseUrl + api,
      { params: { search, page } }
    );
    return res.data;
  },
};

export default INTERVIEW_API;
