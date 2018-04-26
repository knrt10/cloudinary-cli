const cloudinary = require('./configCloudinary')

function upload (data, next) {
  data.forEach(filePath => {
    cloudinary.uploader.upload(filePath, (result, next) => {
      if (result.error) {
        return console.log(result.error)
      } else {
        console.log('uploaded')
        console.log(`publicID: ${result.public_id}
width: ${result.width}
height: ${result.height}
url: ${result.url || result.secure_url}`)
      }
      return next
    })
  })
}

module.exports = upload
