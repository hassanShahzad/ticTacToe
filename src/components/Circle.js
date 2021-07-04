import React from 'react';
import {Svg, Circle as C} from 'react-native-svg';
import {ICON_SIZE, STROKE_WIDTH, ICON_PADDING} from '../shared/constants';

const Circle = ({color}) => (
  <Svg height={ICON_SIZE} width={ICON_SIZE}>
    <C
      cx={ICON_SIZE / 2}
      cy={ICON_SIZE / 2}
      r={(ICON_SIZE - 2 * ICON_PADDING) / 2}
      stroke={color}
      strokeWidth={STROKE_WIDTH}
      fill="transparent"
    />
  </Svg>
);

export default Circle;
