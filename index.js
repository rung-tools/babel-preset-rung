
module.exports = (_, opts = { browser: false }) => ({
    presets: opts.browser
        ? [require('babel-preset-env'), require('babel-preset-react')]
        : [[require('babel-preset-env'), { targets: { node: 'current' } }]],
    plugins: [
        require('babel-plugin-implicit-function').default,
        require('babel-plugin-function-composition').default,
        require('@rung/babel-plugin-pipe-operator').default,
        require('babel-plugin-transform-async-to-bluebird').default,
        require('babel-plugin-holes').default,
        require('babel-plugin-date-fns').default] })
