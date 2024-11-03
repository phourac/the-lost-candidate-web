import axios from "axios";
import { ROUTE_API, ROUTE_PATH } from "../utils/route-util";

const SOCIALMEDIA_API = {
  getListSocialMedia: async (search: string, page: number) => {
    const api = "/api/social-media";
    const res = await axios.get<ISocialMedia.ISocialMediaList>(
      // ROUTE_PATH.baseUrl + "/" + ROUTE_API.getReference
      ROUTE_PATH.baseUrl + api,
      { params: { search, page } }
    );
    return res.data;
  },
};

export default SOCIALMEDIA_API;
