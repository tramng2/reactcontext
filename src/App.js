import React from 'react';
import Header from './Header';
import {ThemeProvider} from './ThemeContext';
export const buttonThemes = {
  blue: {
      color: 'white',
      backgroundColor: 'blue'
  },
  black: {
      color: 'white',
      backgroundColor: 'black'
  },
};
function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
