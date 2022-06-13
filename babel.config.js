module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['module-resolver', {
        root: ['./src/App'],
        alias: {
          '@app': './src',
          '@auth': './src/modules/Authentication',
        }
      }]
    ]
  }
}
