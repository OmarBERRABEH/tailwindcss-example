/**
 * 
 * @author Omar BERRABEH <omar.berrabeh@gmail.com>
 */

const isProd = process.env.NODE_ENV === 'production';
 // remove unused css
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/index.html',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-nested'),
    require('postcss-preset-env'),
    require('autoprefixer'),
    ... isProd ? [purgecss] : [],
  ]
}