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
  .description('Uploads file (can add multiple)')
  .option('-a, --array', 'Upload more than 1 file')
  .action(function (file, options, next) {
    if (!file) {
      throw new Error('Please enter path to file')
    }
    if (options.array) {
      const array = []
      array.push(file, program.args)
      const files = array.toString().split(',')
      upload(files, next)
    } else {
      upload([file], next)
    }
    console.log('Uploading...')
  })

program.parse(process.argv)
