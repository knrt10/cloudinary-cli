const cloudinary = require('./configCloudinary')

function listAll () {
  const options = {max_results: 500}
  const promise = new Promise((resolve, reject) => {
    cloudinary.api.resources((response) => {
      if (!response.resources) reject(response)
      resolve(response)
    }, options)
  })

  promise.then(function (val) {
    val.resources.forEach(result => {
      const output = {
        publicID: result.public_id,
        format: result.format,
        createdAt: result.created_at,
        size: String((result.bytes) / 1024).slice(0, 5) + ' kb',
        url: result.url
      }
      console.log(output)
      console.log('\n')
    })
  })
}

function searchPublicId (publicID) {
  cloudinary.api.resource(publicID, (result) => {
    console.log(result)
  })
}

function searchType (type) {
  const options = {max_results: 500}
  const promise = new Promise((resolve, reject) => {
    cloudinary.api.resources((response) => {
      if (!response.resources) reject(response)
      resolve(response)
    }, options)
  })

  if (type === 'image') {
    promise.then(function (val) {
      const final = val.resources.filter(result => result.format !== 'gif')
      final.forEach((result) => {
        const output = {
          publicID: result.public_id,
          format: result.format,
          createdAt: result.created_at,
          size: String((result.bytes) / 1024).slice(0, 5) + ' kb',
          url: result.url
        }
        console.log(output)
        console.log('\n')
      })
    })
  } else if (type === 'gif') {
    promise.then(function (val) {
      const final = val.resources.filter(result => result.format === 'gif')
      final.forEach((result) => {
        const output = {
          publicID: result.public_id,
          format: result.format,
          createdAt: result.created_at,
          size: String((result.bytes) / 1024).slice(0, 5) + ' kb',
          url: result.url
        }
        console.log(output)
        console.log('\n')
      })
    })
  }
}

module.exports = {
  listAll: listAll,
  searchPublicId: searchPublicId,
  searchType: searchType
}
