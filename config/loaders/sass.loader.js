/**
 * Injects CSS into the DOM.
 * https://github.com/webpack-contrib/style-loader
 */
const styleLoader = {
  loader: 'style-loader',
  options: {  }
}


/**
 * Extracts CSS into separate files.
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 */
const miniCssExtractLoader = {
  loader: require('mini-css-extract-plugin').loader,
  options: {  }
}


/**
 * Interprets @import and url() like import/require() and will resolve them.
 * https://github.com/webpack-contrib/css-loader
 */
const cssLoader = {
  loader: 'css-loader',
  options: {  }
}


/**
 * Transforms styles with JS plugins.
 * https://github.com/webpack-contrib/postcss-loader
 */
const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [ require('autoprefixer') ]
    }
  }
}


/**
 * Loads a Sass/SCSS file and compiles it to CSS.
 * https://github.com/webpack-contrib/sass-loader
 */
const sassLoader = {
  loader: 'sass-loader',
  options: {  }
}


module.exports = isDev => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? styleLoader : miniCssExtractLoader,
      cssLoader,
      !isDev && postcssLoader,
      sassLoader
    ].filter(Boolean)
  }
}