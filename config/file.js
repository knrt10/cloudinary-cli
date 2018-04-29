const fs = require('fs')
const path = require('path')

function writeFile (data) {
  const template = `module.exports = {
  CLOUD_NAME:"${data.CLOUD_NAME}",
  API_KEY: "${data.API_KEY}",
  API_SECRET: "${data.API_SECRET}"
}`

  fs.writeFile(path.resolve(__dirname, '../config.env'), Object(template), function (err) {
    if (err) {
      console.log(err)
    }
    console.log('The file was saved!')
  })
}

module.exports = writeFile
