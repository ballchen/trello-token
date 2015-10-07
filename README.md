# trello-token

Get Trello token

```
npm install trello-token
```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm](https://img.shields.io/npm/v/trello-token.svg)](https://www.npmjs.com/package/trello-token)
[![david](https://david-dm.org/PaulinePro/trello-token.svg)](https://david-dm.org/PaulinePro/trello-token)

## Usage

```
troken "PUBLIC_TOKEN" "BOARD_NAME"
```

```javascript
var troken = require('trello-token')

troken('PUBLIC_TOKEN', 'BOARD_NAME', function (err, token) {
  if (err) {
    // oops
  }

  console.log('There is the token: ', token)
})
```

### Feel free to open issues and PRs