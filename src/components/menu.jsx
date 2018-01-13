import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background: #444444;
  width: 100%;
  height: 6vh;
  padding: 8px;
`;

function Menu({
  minBubblesPerRow,
  maxBubblesPerRow,
  bubblesPerRow,
  onBubblesPerRowChange,
}) {
  return (
    <Container>
      <input
        type="range"
        value={bubblesPerRow}
        min={minBubblesPerRow}
        max={maxBubblesPerRow}
        step={minBubblesPerRow}
        onChange={e => onBubblesPerRowChange(parseInt(e.target.value, 0))}
      />
    </Container>
  );
}

Menu.propTypes = {
  minBubblesPerRow: PropTypes.number.isRequired,
  maxBubblesPerRow: PropTypes.number.isRequired,
  bubblesPerRow: PropTypes.number.isRequired,
  onBubblesPerRowChange: PropTypes.func.isRequired,
};

export default Menu;
