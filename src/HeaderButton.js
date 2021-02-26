import React from 'react';
import { ThemeContext } from './ThemeContext'

function HeaderButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color
          }}>
          Press me
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default HeaderButton;