import { SvgProps } from "../MeasurementIcons";

const VolumeFlowRate = ({ size, mainColour, secondaryColor }: SvgProps) => (
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
      d="M25 1c13.246 0 24 10.754 24 24S38.246 49 25 49 1 38.246 1 25 11.754 1 25 1ZM11.343 32.795v3.272h27.306v-3.272H11.343Zm6.832-1.933c4.459 0 8.1-3.584 8.461-8.34.241-3.079 2.422-5.317 5.197-5.317a5.192 5.192 0 0 1 5.188 5.189h3.272c0-4.668-3.801-8.461-8.46-8.461-4.523 0-8.084 3.505-8.461 8.34-.232 3.032-2.462 5.317-5.196 5.317a5.192 5.192 0 0 1-5.189-5.188h-3.28c0 4.659 3.801 8.46 8.468 8.46Z"
      style={{
        fill: mainColour,
      }}
    />
  </svg>
)
export default VolumeFlowRate
