import React, { createContext, useState } from 'react';
import { ColorContextType } from 'models/ColorModel';

const ColorContext = createContext<ColorContextType>({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {}
  }
})

const ColorProvider: React.FC = ({ children }) => {
  const [color, setColor] = useState<String>('black');
  const [subcolor, setSubcolor] = useState<String>('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor }
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  )
}

// const ColorConsumer = ColorContext.Consumer과 같은 의미
const { Consumer: ColorConsumer } = ColorContext

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer }

export default ColorContext;
