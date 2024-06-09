import { format } from 'date-fns'

const formatDate = (dateString: string) => {
  const formattedDate = new Date(dateString)
  return format(formattedDate, 'MMM dd, yyyy')
}

export default formatDate
