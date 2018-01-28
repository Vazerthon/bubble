import { transparentize } from 'polished';

const theme = {
  colour: {
    primary: '#444444',
    secondary: '#222222',
    secondary02: transparentize(0.5, '#222222'),
    danger: '#662222',
    accent: '#666666',
    highlight: '#bbbbbb',
  },
  layout: {
    padding: '14px',
  },
  font: {
    small: '14px',
    regular: '20px',
  },
};

export default theme;
