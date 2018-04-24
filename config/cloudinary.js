const cloudinary = require('cloudinary')
const inquirer = require('inquirer')
var ui = new inquirer.ui.BottomBar()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

function upload (path) {
  ui.log.write('Uploading...')
  cloudinary.uploader.upload(path, function (result, next) {
    if (result.error) {
      return console.log(result.error)
    } else {
      ui.log.write('Uploaded')
      console.log(`publicID: ${result.public_id}
width: ${result.width}
height: ${result.height}
url: ${result.url || result.secure_url}`)
    }
    return next()
  })
}

module.exports = upload
