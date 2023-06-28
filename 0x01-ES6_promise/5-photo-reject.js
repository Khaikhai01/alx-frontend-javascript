export default function uploadPhoto(filename) {
  return new promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`))
  })
}
