const getInitials = (fullName: string) => {
  const names = fullName.split(' ')
  const initials = names.slice(0, 2).map((name) => name.charAt(0).toUpperCase())
  return initials.join('.')
}

export default getInitials
