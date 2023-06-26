// Import all images from the sliders folder
const importAll = (r) => r.keys().map(r);

const sliderImgs = importAll(
  require.context('../assets/img/slider-img', false, /\.(png|jpe?g|svg)$/),
);

export default sliderImgs;