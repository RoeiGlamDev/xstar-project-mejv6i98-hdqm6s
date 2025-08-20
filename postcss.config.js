import autoprefixer from 'autoprefixer'; // Import autoprefixer for vendor prefixes
import cssnano from 'cssnano'; // Import cssnano for minification

export default {
  plugins: [
    autoprefixer(), // Add vendor prefixes
    cssnano({ preset: 'default' }) // Minify the CSS
  ]
};