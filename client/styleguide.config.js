const path = require('path')

module.exports = {
  ignore: [
    '**/App.js',
    '**/*.test.js',
    '**/**/Login.js',
    '**/**/ArtistList.js',
    '**/**/SavedSongList.js',
    '**/**/Icons.js',
    '**/**/use**.js',
    '**/styles/GlobalStyle.js',
  ],
  defaultExample: false,
  exampleMode: 'expand',
  usageMode: 'expand',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/StyleWrapper'),
  },
}
