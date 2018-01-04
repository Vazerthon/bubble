import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Bubble from './bubble';

const BubbleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Bubbles({ bubbles, size, popBubble }) {
  return (
    <BubbleWrap>
      {bubbles.map(b => (
        <Bubble
          key={b.id}
          size={size}
          sizePx={b.sizePx}
          popped={b.popped}
          id={b.id}
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
      sizePx: PropTypes.number.isRequired,
    }),
  ).isRequired,
  size: PropTypes.number.isRequired,
  popBubble: PropTypes.func.isRequired,
};

export default Bubbles;
