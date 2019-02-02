const extractImage = (images) => {
  let result = {}
  Object.keys(images).map((key) => {
    const data = JSON.parse(images[key])
    if (data.length === 1) {
      result = {
        ...result,
        [key]: data[0].url
      }
    } else {
      const dataArray = data.map((image) => {
        return image.url
      })
      result = {
        ...result,
        [key]: dataArray
      }
    }
  })
  return result
}

export default extractImage
