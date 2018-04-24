const index = require('..')
const file = require('../config/file')
const upload = require('../config/cloudinary')

describe('upload', () => {
  beforeEach(() => {
    data = {
      CLOUD_NAME: process.env.CLOUD_NAME,
      API_KEY: process.env.API_KEY,
      API_SECRET: process.env.API_SECRET
    }
    parameter = '/path/file.png'
  })

  it('get env file', () => {
    expect(file(data)).toMatchSnapshot()
  })

  it('error if no api is given', () => {
    expect(upload()).toMatchSnapshot()
  })

  it('succesfully upload file', () => {
    expect(upload(parameter)).toMatchSnapshot()
  })
})
