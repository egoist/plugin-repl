module.exports = options => ({
  html: {
    title: 'React to Vue online REPL',
    description: 'Repl for babel-plugin-transform-react-to-vue'
  },
  // Disable sourceMap in production mode
  sourceMap: options.mode === 'development',
  extendWebpack(config) {
    config.module.noParse.add(/babel-standalone/)
    config.module.rule('js')
      .include.add(/babel-plugin/)
  },
  presets: [
    require('poi-preset-offline')()
  ],
  postcss: [
    require('postcss-nested')()
  ]
})
