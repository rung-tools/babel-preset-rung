
const bluebirdPlugin = require('bluebird')
    ? [require('babel-plugin-transform-async-to-bluebird').default]
    : []

const dateFnsPlugin = require('date-fns')
    ? [require('babel-plugin-date-fns').default]
    : []

module.exports = () => ({
    presets: require('react')
        ? [require('babel-preset-env'), require('babel-preset-react')]
        : [[require('babel-preset-env'), { targets: { node: 'current' } }]],
    plugins: [
        require('babel-plugin-implicit-function').default,
        require('babel-plugin-function-composition').default,
        require('@rung/babel-plugin-pipe-operator').default,
        require('babel-plugin-holes').default,
        ...bluebirdPlugin,
        ...dateFnsPlugin] })
