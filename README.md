# Multi-Carousel Component Project
## Overview
This Carousel Component not only showcases multiple items or images in an interactive and engaging manner but also supports the rendering of multiple carousel instances in a synchronized manner. This advanced feature, achieved through the power of React and modern JavaScript, allows multiple carousels to display and navigate through slides at the same time.

## Features
- **Contextual Slide Navigation:** The Carousel Component uses React's Context API to manage the state of the active slide across multiple carousel instances. This ensures a seamless scrolling experience, with each carousel in sync with the others.

- **Dynamic Image Import:** The Carousel Component uses Webpack's require.context function to dynamically import images. This allows the carousel to automatically include all images in the sliders folder, without the need to manually import each image.

- **Responsive Design with CSS Modules:** The Carousel Component is not just responsive, it's stylish. Using CSS Modules, each component has its own CSS file, ensuring styles are scoped to the component and reducing the risk of style conflicts.


> [Live Demo Link](https://fmanimashaun.github.io/multi-carousel-component/)

## Demo

![screenshot](./src/assets/img/demo.gif)

## Installation
To install and run this project locally, you'll need to have Node.js and npm installed. Follow these steps:

Clone the repository: `git clone https://github.com/fmanimashaun/multi-carousel-component.git
Navigate to the project folder: `cd multi-carousel-component`
Install the dependencies: `npm install`
Start the project: `npm start`

## Code Highlights

This project demonstrates advanced React techniques and best practices. Here are some highlights:

- **Context API for State Management:** The `SliderContext` and `SliderProvider` components demonstrate the use of React's Context API for state management. This allows child components to access and modify the active slide without prop drilling.

```javascript
// SliderContext.js file
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


```

- **Dynamic Image Import:** The `SliderContainer` component demonstrates how to dynamically import images using Webpack's require.context function. This allows the carousel to automatically include all images in the sliders folder.

```javascript 
// Import all images from the sliders folder
const importAll = (r) => r.keys().map(r);
const sliderImgs = importAll(
  require.context('../assets/img/slider-img', false, /\.(png|jpe?g|svg)$/),
);

```

- **Responsive Design with CSS Modules:** The project uses CSS Modules to ensure styles are scoped to the component, reducing the risk of style conflicts. This is demonstrated in the `Arrow`, `DotNav`, and `SliderContainer` components.

```javascript
import Styles from '../assets/css/carousel.module.css';
```

## Author

👤 **Engr. Animashaun Fisayo**

- [GitHub](https://github.com/fmanimashaun)
- [Twitter](https://twitter.com/fmanimashaun)
- [LinkedIn](https://www.linkedin.com/in/fmanimashaun/)
- [Website](https://fmanimashaun.com)
## Contributing
We welcome contributions from the community. If you'd like to contribute, please fork the repository and make your changes, then open a pull request to propose your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.