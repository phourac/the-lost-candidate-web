import { NextApiResponse } from 'next'

import { FetchServer } from '@/utils/fetch-util'
import { ROUTE_API } from '@/utils/route-util'

export const GET = async (req: Request, res: NextApiResponse) => {
  const body = await req.json()

  try {
    const data = await FetchServer(`${ROUTE_API.getSocialMedia}`, body)
    return Response.json(data)
  } catch (error: any) {
    console.error('Error fetching data:', error)
    return Response.json(error.message, { status: 400 })
  }
}
