import React from 'react';
import {Svg, Line} from 'react-native-svg';
import {ICON_SIZE, STROKE_WIDTH, ICON_PADDING} from '../shared/constants';

const Cross = ({color}) => (
  <Svg height={ICON_SIZE} width={ICON_SIZE}>
    <Line
      x1={ICON_PADDING}
      y1={ICON_SIZE - ICON_PADDING}
      x2={ICON_SIZE - ICON_PADDING}
      y2={ICON_PADDING}
      stroke={color}
      strokeWidth={STROKE_WIDTH}
    />
    <Line
      x1={ICON_PADDING}
      y1={ICON_PADDING}
      x2={ICON_SIZE - ICON_PADDING}
      y2={ICON_SIZE - ICON_PADDING}
      stroke={color}
      strokeWidth={STROKE_WIDTH}
    />
  </Svg>
);

export default Cross;
