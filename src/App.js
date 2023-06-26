import Carousel from './components/Carousel';
import { SliderProvider } from './hooks/sliderContext';
import './App.css';
import sliderImgs from './utils/importImgs';

const App = () => {
  const teststyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  return(
    <SliderProvider>
      <div style={teststyle}>
        <Carousel imgs={sliderImgs} position={0} />
        <Carousel imgs={sliderImgs} position={1} />
        <Carousel imgs={sliderImgs} position={2} />
        <Carousel imgs={sliderImgs} position={3} />
        <Carousel imgs={sliderImgs} position={4} />
      </div>
    </SliderProvider>
  )
};

export default App;
