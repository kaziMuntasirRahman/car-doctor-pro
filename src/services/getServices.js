export const getService = async id => {
  const response = await fetch(`http://localhost:3000/api/services/${id}`)
  const data = await response.json()
  // console.log(data)

  return data
}

export const getServices = async () => {
  const response = await fetch('http://localhost:3000/api/services')
  const data = await response.json()
  return data
}
