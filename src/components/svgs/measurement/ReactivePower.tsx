import { Svg, Path } from "react-native-svg";

import { SvgProps } from "../MeasurementIcons";

const ReactivePower = ({ size, mainColour, secondaryColour }: SvgProps) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50">
    <Path
      d="M480.37 167.05a178.023 178.023 0 0 0-18.871-21.055c-23.969-64.289-64.961-106.79-111.5-106.79s-87.527 42.504-111.66 106.96a178.023 178.023 0 0 0-18.871 21.055c-66.25 23.746-110.27 65.41-110.27 112.79 0 47.38 44.016 89.039 110.43 112.95a178.023 178.023 0 0 0 18.871 21.055c23.969 64.289 64.961 106.79 111.5 106.79s87.527-42.504 111.66-106.96a178.023 178.023 0 0 0 18.871-21.055C546.78 369.044 590.8 327.38 590.8 280c0-47.38-44.016-89.039-110.43-112.95ZM350 448c-86.465 0-156.8-75.375-156.8-168S263.536 112 350 112c86.464 0 156.8 75.375 156.8 168S436.464 448 350 448Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="matrix(.09551 0 0 .09551 -8.43 -1.745)"
    />
    <Path
      d="M350 560C212.13 560 99.9 445.54 99.9 304.81a255.124 255.124 0 0 1 25.695-113.22 255.083 255.083 0 0 1 73.203-90.113 34.775 34.775 0 0 1 49.39 6.887 36.455 36.455 0 0 1-6.777 50.402 183.245 183.245 0 0 0-52.559 64.73 183.267 183.267 0 0 0-18.449 81.316c0 100.8 80.586 183.29 179.59 183.29s179.59-82.211 179.59-183.29a183.307 183.307 0 0 0-18.523-81.34 183.25 183.25 0 0 0-52.656-64.707 36.477 36.477 0 0 1-13.625-23.824 36.45 36.45 0 0 1 6.851-26.578 34.783 34.783 0 0 1 23.316-13.965 34.785 34.785 0 0 1 26.242 7.078 255.142 255.142 0 0 1 98.898 203.333c0 140.73-112.23 255.19-250.1 255.19L350 560Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="translate(7.507 9.604) scale(.04998)"
    />
    <Path
      d="M350 560C212.13 560 99.9 445.54 99.9 304.81a255.124 255.124 0 0 1 25.695-113.22 255.083 255.083 0 0 1 73.203-90.113 34.775 34.775 0 0 1 49.39 6.887 36.455 36.455 0 0 1-6.777 50.402 183.245 183.245 0 0 0-52.559 64.73 183.267 183.267 0 0 0-18.449 81.316c0 100.8 80.586 183.29 179.59 183.29s179.59-82.211 179.59-183.29a183.307 183.307 0 0 0-18.523-81.34 183.25 183.25 0 0 0-52.656-64.707 36.477 36.477 0 0 1-13.625-23.824 36.45 36.45 0 0 1 6.851-26.578 34.783 34.783 0 0 1 23.316-13.965 34.785 34.785 0 0 1 26.242 7.078 255.142 255.142 0 0 1 98.898 203.333c0 140.73-112.23 255.19-250.1 255.19L350 560Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="matrix(-.02999 0 0 -.02999 35.496 33.892)"
    />
  </Svg>
);
export default ReactivePower;
