import { SvgProps } from "../MeasurementIcons";

const Mass = ({ size, mainColour, secondaryColor }: SvgProps) => (
  <svg
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50"
  >
    <path
      d="m602.52 509.09-91.145-292.5a16.556 16.556 0 0 0-14.23-11.562l-21.812-2.109 44.57-65.062a33.152 33.152 0 0 0-12.84-48.543c-178.5-86.906-309.55-1.407-315.03 2.273a33.17 33.17 0 0 0-14.094 21.281 33.144 33.144 0 0 0 5.203 24.988l44.57 65.062-21.812 2.109a16.563 16.563 0 0 0-14.23 11.562l-91.141 292.5a16.608 16.608 0 0 0 2.477 14.758 16.564 16.564 0 0 0 13.352 6.754h470.33a16.58 16.58 0 0 0 13.355-6.754 16.619 16.619 0 0 0 2.473-14.758l.004.001ZM259.55 132.05c35.965-13.445 101.01-27.156 182.72 1.82l-42.301 61.746-21.301-2.062a16.68 16.68 0 0 0-1.598-.078h-51.082c-.531 0-1.062.023-1.589.078l-21.301 2.062-43.548-63.566Z"
      style={{
        fill: mainColour,
        fillRule: "nonzero",
      }}
      transform="matrix(.09534 0 0 .09534 -8.513 -2.698)"
    />
  </svg>
)
export default Mass
