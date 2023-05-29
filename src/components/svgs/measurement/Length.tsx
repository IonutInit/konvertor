import { SvgProps } from "../MeasurementIcons";

const Length = ({ size, mainColour, secondaryColor }: SvgProps) => (
  <svg
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50">
    <circle
      cx={6.827}
      cy={22.765}
      r={3.587}
      style={{
        fill: mainColour,
      }}
      transform="translate(.488 12.393) scale(1.25436)"
    />
    <circle
      cx={6.827}
      cy={22.765}
      r={3.587}
      style={{
        fill: mainColour,
      }}
      transform="translate(32.385 -19.504) scale(1.25436)"
    />
    <path
      d="M7.553 22.765h33.052"
      style={{
        fill: "none",
        stroke: mainColour,
        strokeWidth: "1.92px",
      }}
      transform="rotate(-45 21.604 37.526) scale(1.3648)"
    />
  </svg>
);
export default Length;
