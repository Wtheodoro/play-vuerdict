import { format } from 'date-fns'

const formatDateWithMonthName = (dateString) => {
  const formattedDate = new Date(dateString)
  return format(formattedDate, 'MMM dd, yyyy')
}

const formatDateNumeric = (date) => {
  return format(date, 'yyyy-MM-dd')
}

export { formatDateWithMonthName, formatDateNumeric }
