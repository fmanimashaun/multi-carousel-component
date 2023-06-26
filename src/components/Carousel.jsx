import Styles from '../assets/css/carousel.module.css';
import SliderContainer from './SliderContainer';

const Carousel = ({ imgs, position }) => {
  return (
    <div className={Styles.carousel}>
      <SliderContainer imgs={imgs} position={position} />
    </div>
  );
};

export default Carousel;
