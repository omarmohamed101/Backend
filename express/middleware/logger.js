const moment = require('moment')

// called every time you make a request
const logger = (req, res, next) => {
    console.log('Hello from the logger')
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} :${moment()}`)
    next()
}

module.exports = logger
