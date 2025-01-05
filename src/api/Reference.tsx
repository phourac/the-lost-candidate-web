import axios from 'axios'
import { ROUTE_API, ROUTE_PATH } from '../utils/route-util'

const REFERENCE_API = {
  getListReference: async (search: string, page: number) => {
    const api = '/api/reference'
    const res = await axios.get<IReference.IReferenceList>(
      // ROUTE_PATH.baseUrl + "/" + ROUTE_API.getReference
      ROUTE_PATH.baseUrl + api,
      { params: { search, page } }
    )
    return res.data
  }
}

export default REFERENCE_API
