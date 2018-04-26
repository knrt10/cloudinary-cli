/**
 * Module dependencies
*/
require('dotenv').config()

const program = require('commander')
const {prompt} = require('inquirer')
const file = require('./config/file')
const upload = require('./config/cloudinary')
const search = require('./config/search')
const update = require('./config/update')

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
  .description('Upload file')
  .option('-a, --array', 'Upload more than 1 file')
  .action((file, options, next) => {
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

/**
* Setting command to list files
*/

program
  .command('list')
  .alias('s')
  .description('Search files and list them')
  .option('-a, --all', 'get all file')
  .option('-s, --search <file>', 'Search file by publicID')
  .option('-t, --type <tag>', 'Search by type. <tag> can be <image> or <gif>')
  .action((options) => {
    if (options.all) {
      search.listAll()
    } else if (options.search) {
      search.searchPublicId(options.search)
    } else if (options.type) {
      search.searchType(options.type)
    }
  })

/**
* Setting command to rename public_id
*/

program
  .command('rename <public_id_old> <public_id_new>')
  .alias('r')
  .description('Remane your public_id')
  .action((public_id_old, public_id_new) => {
    update(public_id_old, public_id_new)
  })

program.parse(process.argv)
