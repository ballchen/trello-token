var request = require('request')
var _ = require('lodash')

module.exports = function (key, name, config, callback) {
  if (typeof config === 'function') {
    callback = config
  }

  config = _.assign({
    response_type: 'token',
    scope: 'read,write',
    expiration: 'never'
  }, config)

  request({
    url: 'https://trello.com/1/connect',
    qs: {
      key: key,
      name: name,
      response_type: config.response_type,
      scope: config.scope,
      expiration: config.expiration
    }
  }, function (err, res, body) {
    if (err) return callback(err)
    if (res.statusCode !== 200) return callback(new Error('Status code: ' + res.statusCode))

    var match = body.match(/name=\"signature\" value=\".*?\/(.*?)\">/)
    if (match) callback(null, match[1])
    else callback(new Error('Token not found'))
  })
}
