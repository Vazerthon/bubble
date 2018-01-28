import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'react-feather';

import Icon from './icon';

function MenuHandle({ onClick }) {
  return (
    <Icon onClick={onClick}>
      <Menu />
    </Icon>
  );
}

MenuHandle.propTypes = {
  onClick: PropTypes.func,
};

MenuHandle.defaultProps = {
  onClick: () => {},
};

export default MenuHandle;
