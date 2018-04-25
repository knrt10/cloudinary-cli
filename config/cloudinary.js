const cloudinary = require('cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

function upload (data, next) {
  data.forEach(filePath => {
    cloudinary.uploader.upload(filePath, function (result, next) {
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
