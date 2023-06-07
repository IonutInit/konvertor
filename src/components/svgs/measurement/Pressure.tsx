import * as React from 'react';

import { Svg, Path } from "react-native-svg";

import { SvgProps } from "../MeasurementIcons";

const Pressure = ({ size, mainColour, secondaryColour }: SvgProps) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50">
    <Path
      d="M350 85.312c-83.23 0-150.94 67.707-150.94 150.94s67.707 150.94 150.94 150.94 150.94-67.707 150.94-150.94S433.233 85.312 350 85.312Zm31.113 166.66a6.548 6.548 0 0 1-4.637 1.926 6.514 6.514 0 0 1-4.636-1.926l-26.477-26.477a6.563 6.563 0 0 1-1.926-4.637v-39.926a6.566 6.566 0 0 1 6.562-6.562 6.567 6.567 0 0 1 6.563 6.562v37.203l24.551 24.551a6.57 6.57 0 0 1 0 9.286Zm47.949 62.895c-.07.078-.098.191-.176.27a6.547 6.547 0 0 1-4.636 1.925c-1.68 0-3.36-.64-4.637-1.925l-14.824-14.824a6.568 6.568 0 0 1 0-9.286 6.57 6.57 0 0 1 9.285 0l9.922 9.922c14.316-16.32 22.707-36.547 24.133-58.145h-14.078a6.567 6.567 0 0 1-6.563-6.562 6.568 6.568 0 0 1 6.563-6.563h14.07c-1.481-22.199-10.297-42.375-24.113-58.152l-9.93 9.93a6.548 6.548 0 0 1-9.273 0 6.567 6.567 0 0 1 0-9.285l9.93-9.93c-15.777-13.816-35.953-22.637-58.152-24.113v14.07a6.568 6.568 0 0 1-6.563 6.563 6.567 6.567 0 0 1-6.562-6.563v-14.07c-22.199 1.481-42.375 10.297-58.152 24.113l9.929 9.93a6.567 6.567 0 0 1-4.636 11.211c-1.68 0-3.36-.641-4.637-1.926l-9.93-9.93c-13.816 15.777-22.637 35.953-24.113 58.152h14.07a6.568 6.568 0 0 1 6.563 6.563 6.567 6.567 0 0 1-6.563 6.562h-14.078c1.426 21.605 9.817 41.832 24.133 58.145l9.922-9.922a6.57 6.57 0 0 1 9.285 0 6.568 6.568 0 0 1 0 9.286l-14.824 14.824a6.547 6.547 0 0 1-4.636 1.925c-1.68 0-3.36-.64-4.637-1.925-.078-.079-.106-.184-.176-.27-20.949-21.07-32.496-48.965-32.496-78.617 0-61.512 50.051-111.56 111.56-111.56s111.56 50.051 111.56 111.56c0 29.645-11.551 57.547-32.496 78.617h-.044Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="matrix(.0922 0 0 .0922 -7.269 -.815)"
    />
    <Path
      d="M350 19.688c-119.41 0-216.56 97.152-216.56 216.56s97.152 216.56 216.56 216.56 216.56-97.152 216.56-216.56S469.408 19.688 350 19.688Zm0 380.62c-90.465 0-164.06-73.598-164.06-164.06S259.538 72.188 350 72.188s164.06 73.598 164.06 164.06-73.598 164.06-164.06 164.06ZM276.61 453.84v79.914a6.567 6.567 0 0 0 6.563 6.563h133.66a6.567 6.567 0 0 0 6.562-6.563V453.84c-23.066 7.805-47.73 12.102-73.395 12.102s-50.328-4.297-73.395-12.102h.005Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="matrix(.0922 0 0 .0922 -7.269 -.815)"
    />
  </Svg>
);
export default Pressure;
