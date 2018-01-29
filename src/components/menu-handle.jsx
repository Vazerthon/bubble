import React from 'react';
import PropTypes from 'prop-types';
import { MdMenu } from 'react-icons/lib/md';

import Icon from './icon';

function MenuHandle({ onClick }) {
  return (
    <Icon onClick={onClick}>
      <MdMenu size={30} />
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
