import { useEffect, useRef, useContext, useState } from 'react';
import { SliderContext } from '../hooks/sliderContext';
import Styles from '../assets/css/carousel.module.css';

const SliderContainer = ({ imgs, position }) => {
  // Get the active slider from the context
  const { activeSlider } = useContext(SliderContext);
  const [activeSliderPosition, setActiveSliderPosition] = useState(position);

  // Set the active slider position
  useEffect(() => {
    const newPosition = activeSlider + position;

    if (newPosition >  imgs.length - 1) {
      setActiveSliderPosition(newPosition - imgs.length);
    } else if (newPosition < 0) {
      setActiveSliderPosition(newPosition + imgs.length);
    } else {
      setActiveSliderPosition(newPosition);
    }
  }, [activeSlider, imgs.length, position]);


  // Create a ref to the carousel__contents element
  const carouselRef = useRef();

  // Set the left property of carousel__contents
  useEffect(() => {
    const handleResize = () => {
      const slides = carouselRef.current.children;
      const slideWidth = slides[0].getBoundingClientRect().width;

      // Set the left property of carousel__contents
      carouselRef.current.style.transform = `translateX(${
        -activeSliderPosition * slideWidth
      }px)`;

      // Set the left property of each slide
      Array.from(slides).forEach((slide, index) => {
        slide.style.left = `${slideWidth * index}px`;
      });

      // Set the height of carousel__contents
      const ro = new ResizeObserver((entries) => {
        for (let entry of entries) {
          carouselRef.current.style.height = `${entry.target.offsetHeight}px`;
        }
      });

      // Observe the first slide
      ro.observe(slides[0]);

      // Cleanup function to avoid memory leaks
      return () => ro.disconnect();
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [activeSliderPosition]);

  return (
    <div className={Styles.carousel__wrapper}>
      <ul ref={carouselRef} className={Styles.carousel__contents}>
        {imgs.map((img, index) => (
          <li
            key={index}
            className={
              activeSlider === index
                ? `${Styles.carousel__item} ${Styles.active}`
                : `${Styles.carousel__item}`
            }>
            <img src={img} alt={`slider ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderContainer;
