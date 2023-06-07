import * as React from 'react';

import { Svg, Path } from "react-native-svg";

import { SvgProps } from "../MeasurementIcons";

const Digital = ({ size, mainColour, secondaryColour }: SvgProps) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50">
    <Path
      d="M403.2 333.2H296.8V226.8H190.4V120.4H84v212.8h106.4v106.4H84V546h425.6V226.8H403.2v106.4Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="matrix(.09023 0 0 .09023 -6.579 -.263)"
    />
    <Path
      d="M296.8 120.4h106.4v106.4H296.8zM509.6 120.4H616v106.4H509.6zM403.2 14h106.4v106.4H403.2z"
      fill={mainColour}
      fillRule="nonzero"
      transform="matrix(.09023 0 0 .09023 -6.579 -.263)"
    />
  </Svg>
);
export default Digital;
