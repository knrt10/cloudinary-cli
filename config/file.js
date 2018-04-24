const fs = require('fs')

function writeFile (data) {
  const template =
  `CLOUD_NAME=${data.CLOUD_NAME}
API_KEY=${data.API_KEY}
API_SECRET=${data.API_SECRET}`

  fs.writeFile('.env', template, function (err) {
    if (err) {
      return console.log(err)
    }

    return 'The file was saved!'
  })
}

module.exports = writeFile
