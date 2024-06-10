import { format } from 'date-fns'

const formatDateWithMonthName = (date: Date) => {
  const formattedDate = new Date(date)
  return format(formattedDate, 'MMM dd, yyyy')
}

const formatDateNumeric = (date: Date) => {
  return format(date, 'yyyy-MM-dd')
}

export { formatDateWithMonthName, formatDateNumeric }
