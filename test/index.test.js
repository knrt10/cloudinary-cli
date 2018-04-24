require('..')
const file = require('../config/file')

describe('upload', () => {
  const data = {
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET
  }
  it('get env file', () => {
    expect(file(data)).toMatchSnapshot()
  })
})
