export const getService = async id => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`)
  const data = await response.json()
  // console.log(data)

  return data
}

export const getServices = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services`)
  const data = await response.json()
  return data
}
