const ClientOS = 'web'
const ClientBundle = 'com.bongtk.bloc'
const CLIENT = 'CLIENT'
export async function FetchServer(
  api: string,
  body: any,
  option?: RequestInit
) {
  const response = await fetch(`${process.env.ROOT_API}/${api}`, {
    body,
    ...option,
    headers: {
      ...option?.headers
    }
  })
  // Check for errors
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const responseData = await response.json()

  // Check for error in response data
  if (responseData && responseData.error) {
    throw new Error(responseData.message)
  }

  return responseData
}
