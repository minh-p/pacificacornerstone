import { NextRequest } from 'next/server'
import sanityClient from '@/lib/sanityClient'
import { getDateIndex } from '@/lib/dateGetter'
const query = `*[_type == "schedule" && dateTime(endDate) >= dateTime($date) && dateTime($dateAfterMonth) > dateTime(startDate)] {
  title,
  "slug": slug.current,
  startDate,
  endDate,
  body,
  categories
}`

const handler = async (req: NextRequest) => {
  try {
    const currentMonth = req.nextUrl.searchParams.get('currentMonth')
    const currentYear = req.nextUrl.searchParams.get('currentYear')
    const date = new Date(currentYear, getDateIndex(currentMonth))
    const dateAfterMonth = new Date(currentYear, getDateIndex(currentMonth), 30)
    const data = await sanityClient.fetch({
      query,
      params: { date, dateAfterMonth },
    })
    return Response.json(data)
  } catch (error) {
    return Response.json({
      error: 'Something Went Wrong. Please Contact Site Developer',
    })
  }
}

export { handler as GET, handler as POST }
