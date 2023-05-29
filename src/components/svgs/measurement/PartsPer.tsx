import { SvgProps } from "../MeasurementIcons";

const PartsPer = ({ size, mainColour, secondaryColor }: SvgProps) => (
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
      d="M322 29.586c-116.79 12.918-209.5 105.62-222.41 222.41H322V29.586ZM600.41 252C587.492 135.21 494.79 42.5 378 29.59V252h222.41ZM378 530.41C494.79 517.492 587.5 424.79 600.41 308H378v222.41ZM99.586 308c12.918 116.79 105.62 209.5 222.41 222.41V308H99.586Z"
      style={{
        fill: mainColour,
        fillRule: "nonzero",
      }}
      transform="translate(-8.545 -1.836) scale(.09584)"
    />
  </svg>
)
export default PartsPer
