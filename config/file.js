const fs = require('fs')

function writeFile (data) {
  const template =
  `CLOUD_NAME=${data.CLOUD_NAME}
API_KEY=${data.API_KEY}
API_SECRET=${data.API_SECRET}`

  fs.writeFile('bla', template, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('The file was saved!')
  })
}

module.exports = writeFile
