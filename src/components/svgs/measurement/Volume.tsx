import * as React from 'react';

import { Svg, Path } from "react-native-svg";

import { SvgProps } from "../MeasurementIcons";

const Volume = ({ size, mainColour, secondaryColour }: SvgProps) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50">
    <Path
      d="M158.72 546.6c-7.918 6.914-19.816 6.613-27.379-.687-26.762-25.824-48.902-56.367-65.043-89.859a312.564 312.564 0 0 1-27.98-92.324c-4.707-33.602-3.961-67.965 2.219-101.32a312.802 312.802 0 0 1 28.289-83.84c16.75-33.18 39.418-63.301 66.609-88.617 24.48-22.789 52.574-41.645 82.957-55.625a312.616 312.616 0 0 1 81.305-24.66c15.102-2.403 30.348-3.653 45.641-3.891 2.027-.02 4.051-.031 6.086-.02 15.969.153 31.898 1.399 47.676 3.911a312.654 312.654 0 0 1 79.562 23.875c31.047 14.043 59.746 33.191 84.688 56.41 25.34 23.582 46.762 51.348 63.109 81.867a313.01 313.01 0 0 1 31.434 88.66c6.398 33.312 7.347 67.664 2.844 101.29a312.659 312.659 0 0 1-27.418 92.574c-16.22 34.16-38.649 65.305-65.863 91.57-7.571 7.3-19.461 7.601-27.375.687-2.188-1.906-4.461-3.898-6.7-5.848a19.224 19.224 0 0 1-6.582-14.094 19.257 19.257 0 0 1 5.969-14.367v-.023c22.785-21.719 41.688-47.457 55.523-75.738a264.163 264.163 0 0 0 24.125-77.84 268.204 268.204 0 0 0-1.336-85.844 264.7 264.7 0 0 0-23.5-71.074c-13.297-26.75-31.145-51.207-52.52-72.078-21.387-20.883-46.285-38.145-73.371-50.812a264.838 264.838 0 0 0-68.535-21.258c-12.773-2.109-25.676-3.25-38.609-3.531-2.293-.043-4.574-.055-6.867-.043-12.969.117-25.914 1.097-38.738 3.058a264.001 264.001 0 0 0-68.902 20.43c-26.289 11.887-50.582 28.098-71.691 47.762-21.852 20.332-40.266 44.336-54.199 70.742a264.27 264.27 0 0 0-25.504 71.906 267.739 267.739 0 0 0-2.723 87.426 264.48 264.48 0 0 0 23.176 78.258c13.504 28.441 32.102 54.43 54.633 76.418v.012a22.453 22.453 0 0 1 6.762 16.684 22.413 22.413 0 0 1-7.68 16.27 2108.812 2108.812 0 0 0-4.089 3.586l-.003-.003ZM349.4 106.83c117.58 0 213.05 95.457 213.05 213.05 0 117.593-95.469 213.05-213.05 213.05-117.59 0-213.05-95.457-213.05-213.05 0-117.593 95.461-213.05 213.05-213.05Zm-98.305 97.785c13.766 0 24.941 11.176 24.941 24.941 0 13.762-11.176 24.941-24.941 24.941-13.762 0-24.941-11.18-24.941-24.941 0-13.766 11.18-24.941 24.941-24.941Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="translate(-1.695 3.709) scale(.0764)"
    />
    <Path
      d="M15.03 18.798h7.078V25H15.03z"
      fill={mainColour}
      fillRule="nonzero"
    />
  </Svg>
);
export default Volume;
