const { route } = require('../../index')

module.exports = route({
  handler (req, rep) {
    rep.send('message from tan')
  }
})
