/**
 * Module dependencies
*/
require('dotenv').config()

const program = require('commander')
const {prompt} = require('inquirer')
const file = require('./config/file')

/**
 * setting questions for env file
*/

const questionEnv = [
  {
    type: 'input',
    name: 'CLOUD_NAME',
    message: 'Please enter your cloud name',
    validate: function (value) {
      if (!value) {
        return 'Please enter your cloud name'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'API_KEY',
    message: 'Please enter your API key',
    validate: function (value) {
      if (!value) {
        return 'Please enter your API key'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'API_SECRET',
    message: 'Please enter your API secret',
    validate: function (value) {
      if (!value) {
        return 'Please enter your API secret'
      }
      return true
    }
  }]

/**
   * setting command to set env file
  */

program
  .command('env')
  .alias('e')
  .description('Set your env file')
  .action(() => {
    prompt(questionEnv).then(answers => {
      file(answers)
    })
  })

  /**
   * setting command to upload file
  */

program
  .command('upload <file>')
  .alias('u')
  .description('Uploads file')
  .action(function (file, next) {
    if (!file) {
      throw new Error('Please enter path to file')
    }
    const cloudinary = require('cloudinary')
    const inquirer = require('inquirer')
    var ui = new inquirer.ui.BottomBar()

    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET
    })

    ui.log.write('Uploading...')
    cloudinary.uploader.upload(file, function (result, next) {
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
  })

program.parse(process.argv)
