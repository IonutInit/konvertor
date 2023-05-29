import {Svg, Path } from "react-native-svg"

import { SvgProps } from "../MeasurementIcons";

const ApparentPower = ({ size, mainColour, secondaryColour }: SvgProps) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50"
  >
    <Path
      d="M301.951 128.8h-91.953c-6.184 0-11.199 5.02-11.199 11.199v280c0 6.184 5.02 11.199 11.199 11.199h280c6.184 0 11.199-5.019 11.199-11.199v-280c0-6.184-5.019-11.199-11.199-11.199h-91.953v220.41h-96.094V128.8Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="matrix(.09682 0 0 .09682 -8.886 -2.11)"
    />
    <Path
      d="M571.2 47.602H324.35c-6.184 0-11.199 5.02-11.199 11.199v271.6c0 6.184 5.02 11.199 11.199 11.199h51.297c6.184 0 11.199-5.019 11.199-11.199v-225.73h-22.398v214.54h-28.895l-.004-249.2h224.45v420h-420v-420h117.6V47.613h-128.8c-6.184 0-11.199 5.02-11.199 11.199v442.4c0 6.184 5.02 11.199 11.199 11.199h442.4c6.184 0 11.199-5.02 11.199-11.199v-442.4c0-6.184-5.016-11.199-11.199-11.199l.001-.011Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="matrix(.09682 0 0 .09682 -8.886 -2.11)"
    />
  </Svg>
)
export default ApparentPower
