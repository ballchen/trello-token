#!/usr/bin/env node

var trelloToken = require('./')
var argv = require('minimist')(process.argv.slice(2))

if (!argv._ || argv._.length !== 2) {
  console.log('Usage: troken <PUBLIC_KEY> <BOARD_NAME>')
  process.exit(1)
}

if (argv.h || argv.help) {
  console.log('Usage: troken <PUBLIC_KEY> <BOARD_NAME>')
  process.exit()
}

var config = {}
if (argv.t || argv.response_type) {
  config.response_type = argv.t || argv.response_type
}
if (argv.s || argv.scope) {
  config.scope = argv.s || argv.scope
}
if (argv.e || argv.expiration) {
  config.expiration = argv.e || argv.expiration
}

trelloToken(argv._[0], argv._[1], config, function (err, token) {
  if (err) {
    console.error('ERROR:', err)
    process.exit(1)
  }

  console.log(token)
})
