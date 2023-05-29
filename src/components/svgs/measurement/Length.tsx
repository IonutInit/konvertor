import {Svg, Path } from "react-native-svg"

import { SvgProps } from "../MeasurementIcons";

import * as React from "react"
const SvgComponent = ({ size, mainColour, secondaryColor }: SvgProps) => (
  <Svg
    style={{
      // fillRule: "evenodd",
      // clipRule: "evenodd",
      // strokeLinejoin: "round",
      // strokeMiterlimit: 2,
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50"
  >
    <Path
      d="M625.89 422.05 207.94 4.1c-5.414-5.414-14.188-5.414-19.602 0L74.098 118.34c-5.414 5.414-5.414 14.188 0 19.602l417.95 417.95c5.414 5.414 14.188 5.414 19.602 0l114.24-114.24c5.418-5.418 5.418-14.191.004-19.602h-.004ZM141.86 150.07l69.625-68.691 7.281 7.465-69.625 68.695-7.281-7.469Zm29.68 31.922 35.652-35.84 7.465 7.281-35.652 35.84-7.465-7.281Zm30.988 30.238 35.465-35.84 7.465 7.281-35.465 36.027-7.465-7.468Zm33.227 33.414 35.465-36.027 7.465 7.281-35.465 36.027-7.465-7.281Zm29.863 31.176 71.867-71.496 7.465 7.465-71.867 71.492-7.465-7.461Zm31.734 30.426 35.465-36.027 7.465 7.281-35.465 36.027-7.465-7.281Zm29.121 31.359 35.465-36.027 7.465 7.281-35.465 36.027-7.465-7.281Zm33.598 32.48 35.465-36.027 7.465 7.281-35.465 36.027-7.465-7.281Zm27.254 27.812 71.867-71.492 7.281 7.465-71.867 71.492-7.281-7.465Zm28.562 29.867 35.465-36.027 7.465 7.281-35.465 36.027-7.465-7.281Zm31.73 29.867 35.465-36.027 7.465 7.281-35.465 36.027-7.465-7.281Zm41.441 40.879-7.465-7.281 35.465-36.027 7.465 7.281-35.465 36.027Z"
      fill={mainColour}
      fillRule="nonzero"
      transform="rotate(135.003 24.146 22.627) scale(.07206 .07267)"
    />
  </Svg>
)
export default SvgComponent

