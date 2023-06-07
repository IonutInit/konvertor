import * as React from 'react';

import { Svg, Path } from "react-native-svg";

import { SvgProps } from "../MeasurementIcons";

const SpeedCalc = ({ size, mainColour, secondaryColour }: SvgProps) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50">
    <Path
      d="M350.01 67.328c117.43 0 212.67 95.238 212.67 212.68 0 117.44-95.238 212.67-212.67 212.67-117.44 0-212.68-95.227-212.68-212.67 0-117.44 95.238-212.68 212.68-212.68Zm68.449 85.449-42.293 96.434c11.23 8.141 18.574 21.355 18.574 36.238 0 2.879-.277 5.687-.809 8.426 60.652 20.906 126.92 62.207 126.92-13.871 0-94.344-76.508-170.85-170.84-170.85-94.344 0-170.85 76.508-170.85 170.85 0 77.949 65.098 32.363 126.61 12.191a44.694 44.694 0 0 1-.504-6.746c0-24.645 20.094-44.73 44.746-44.73 1.192 0 2.375.047 3.559.14l42.84-97.719 22.047 9.637Zm88.645 144.75h-40.168V273.39h40.168v24.137Zm-37.441-114.55-28.422 28.406-17.039-17.039 28.414-28.422 17.043 17.051.004.004Zm-119.65 81.883c-11.41 0-20.598 9.199-20.598 20.598l.012.508c6.25-1.152 12.355-1.844 18.234-1.844 7.211 0 14.887 1.086 22.867 2.902l.066-1.566c0-11.395-9.148-20.598-20.582-20.598h.001Zm-156.98 8.531h40.168v24.137h-40.168v-24.137Zm54.496-107.47 28.422 28.422-17.051 17.039-28.422-28.406 17.051-17.051v-.004Zm114.55-37.441v40.168h-24.141V128.48h24.141Z"
      fill={mainColour}
      transform="matrix(.08043 0 0 .08043 2.28 8.652)"
    />
    <Path
      d="M169.17 93.332c0-35.438 28.727-64.164 64.164-64.164h233.34c35.438 0 64.164 28.727 64.164 64.164v373.34c0 35.438-28.727 64.164-64.164 64.164h-233.34c-35.438 0-64.164-28.727-64.164-64.164v-140c0-9.664 7.832-17.5 17.5-17.5 9.664 0 17.5 7.836 17.5 17.5v140c0 16.109 13.059 29.164 29.164 29.164h233.34c16.109 0 29.164-13.055 29.164-29.164V93.332c0-16.105-13.055-29.164-29.164-29.164h-233.34c-16.105 0-29.164 13.059-29.164 29.164v140c0 9.664-7.836 17.5-17.5 17.5-9.668 0-17.5-7.836-17.5-17.5v-140Z"
      fill={secondaryColour}
      transform="matrix(.03826 0 0 .03826 -4.512 1.454)"
    />
    <Path
      d="M227.5 105c0-9.664 7.836-17.5 17.5-17.5h210c9.664 0 17.5 7.836 17.5 17.5v93.332c0 9.668-7.836 17.5-17.5 17.5H245c-9.664 0-17.5-7.832-17.5-17.5V105Zm35 17.5v58.332h175V122.5h-175ZM367.5 280c0-9.664 7.836-17.5 17.5-17.5h46.668c9.664 0 17.5 7.836 17.5 17.5s-7.836 17.5-17.5 17.5H385c-9.664 0-17.5-7.836-17.5-17.5ZM367.5 350c0-9.664 7.836-17.5 17.5-17.5h46.668c9.664 0 17.5 7.836 17.5 17.5s-7.836 17.5-17.5 17.5H385c-9.664 0-17.5-7.836-17.5-17.5ZM367.5 420c0-9.664 7.836-17.5 17.5-17.5h46.668c9.664 0 17.5 7.836 17.5 17.5s-7.836 17.5-17.5 17.5H385c-9.664 0-17.5-7.836-17.5-17.5ZM250.83 280c0-9.664 7.836-17.5 17.5-17.5h46.668c9.664 0 17.5 7.836 17.5 17.5s-7.836 17.5-17.5 17.5H268.33c-9.664 0-17.5-7.836-17.5-17.5ZM250.83 350c0-9.664 7.836-17.5 17.5-17.5h46.668c9.664 0 17.5 7.836 17.5 17.5s-7.836 17.5-17.5 17.5H268.33c-9.664 0-17.5-7.836-17.5-17.5ZM250.83 420c0-9.664 7.836-17.5 17.5-17.5h46.668c9.664 0 17.5 7.836 17.5 17.5s-7.836 17.5-17.5 17.5H268.33c-9.664 0-17.5-7.836-17.5-17.5Z"
      fill={secondaryColour}
      transform="matrix(.03826 0 0 .03826 -4.512 1.454)"
    />
  </Svg>
);
export default SpeedCalc;
