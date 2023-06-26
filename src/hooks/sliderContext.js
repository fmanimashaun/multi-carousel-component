import { createContext, useState, useEffect } from 'react';
import sliderImgs from '../utils/importImgs';

const SliderContext = createContext();

const SliderProvider = ({ children }) => {
  const [activeSlider, setActiveSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const target = activeSlider + 1;
      if (target > sliderImgs.length - 1) {
        setActiveSlider(0);
      } else {
        setActiveSlider(target);
      }
    }, 1000); // Change the interval duration (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [activeSlider]);

  return (
    <SliderContext.Provider value={{ activeSlider }}>
      {children}
    </SliderContext.Provider>
  );
};

export { SliderProvider, SliderContext };
