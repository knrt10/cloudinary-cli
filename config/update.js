const cloudinary = require('./configCloudinary')

function update (old, publicIdnew) {
  cloudinary.uploader.rename(old, publicIdnew, (result) => {
    if (result.error) {
      console.error("Please check your file's public_id that you want to rename")
    } else {
      console.log(`Public_id successfully changed from ${old} to ${publicIdnew}`)
    }
  })
}

module.exports = update
