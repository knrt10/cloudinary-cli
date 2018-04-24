/**
 * Module dependencies
*/
require('dotenv').config()

const program = require('commander')
const {prompt} = require('inquirer')
const file = require('./config/file')
const upload = require('./config/cloudinary')

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
    upload(file, next)
  })

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

program.parse(process.argv)
