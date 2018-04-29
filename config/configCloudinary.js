const cloudinary = require('cloudinary')
const path = require('path')
const env = require(path.resolve(__dirname, '../config.env'))

cloudinary.config({
  cloud_name: env.CLOUD_NAME,
  api_key: env.API_KEY,
  api_secret: env.API_SECRET
})

module.exports = cloudinary
