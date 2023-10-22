export const convertToSimpleDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString()

export const convertToWordDate = (dateString: string) =>
  new Date(dateString).toLocaleString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
