import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Bubble from './bubble';

const BubbleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Bubbles({ bubbles, bubbleSizePx, popBubble }) {
  return (
    <BubbleWrap>
      {bubbles.map(b => (
        <Bubble
          key={b.id}
          size={bubbleSizePx}
          popped={b.popped}
          id={b.id}
          rotation={b.rotation}
          image={b.image}
          onPop={popBubble}
        />
      ))}
    </BubbleWrap>
  );
}

Bubbles.propTypes = {
  bubbles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      popped: PropTypes.bool,
      rotation: PropTypes.number,
      image: PropTypes.string,
    }),
  ).isRequired,
  popBubble: PropTypes.func.isRequired,
  bubbleSizePx: PropTypes.number.isRequired,
};

export default Bubbles;
