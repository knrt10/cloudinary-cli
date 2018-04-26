const cloudinary = require('./configCloudinary')

function deleteFile (data, next) {
  data.forEach(fileTodelete => {
    cloudinary.uploader.destroy(fileTodelete ,(result) => {
      if(result.result === 'not found') {
        console.error("Please check your file's public_id that you want to delete")
      } else {
        console.log(`Successfully removed ${fileTodelete}`)
      }
    })
  })
}

module.exports = deleteFile
