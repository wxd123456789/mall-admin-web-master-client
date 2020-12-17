'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://121.4.55.183:8080"'
  //BASE_API: '"http://120.27.63.9:8080"'
})
