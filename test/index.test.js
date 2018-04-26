require('..')
const file = require('../config/file')
let upload = require('../config/upload')
let update = require('../config/update')
let deleteFun = require('../config/delete')

describe('env', () => {
  const data = {
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET
  }
  it('get env file', () => {
    expect(file(data)).toMatchSnapshot()
  })
})

describe('upload', () => {
  it('return error if wrong path', () => {
    const path = ['./wrong-path']
    expect(upload(path)).toMatchSnapshot()
  })

  it('upload file successfully', () => {
    upload = jest.fn().mockImplementation(() => {
      console.log('uploaded')
      console.log(`publicID: bla
          width: 200
          height: 200
          url: https://bla.com`)
    })
    expect(upload('.files/path')).toMatchSnapshot()
  })
})

describe('update', () => {
  it('return error if wrong old public_id', () => {
    const oldPublicId = 'fake'
    expect(update(oldPublicId)).toMatchSnapshot()
  })

  it('successfully changes public_id', () => {
    update = jest.fn().mockImplementation((oldPublicId, newPublicName) => {
      console.log(`Public_id successfully changed from ${oldPublicId} to ${newPublicName}`)
    })
    expect(update('oldname', 'newNam')).toMatchSnapshot()
  })
})

describe('delete', () => {
  it('return error if wrong publicId', () => {
    const PublicId = ['fake']
    expect(deleteFun(PublicId)).toMatchSnapshot()
  })

  it('successfully delete file', () => {
    deleteFun = jest.fn().mockImplementation((publicId) => {
      console.log(`Successfully deleted ${publicId}`)
    })
    expect(deleteFun(['oldname'])).toMatchSnapshot()
  })
})
