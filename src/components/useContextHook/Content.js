// Content.js

import React from 'react';
import { useTheme } from './ThemeContext';

const Content = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#666', padding: '1rem' }}>
      <h2>Content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default Content;

