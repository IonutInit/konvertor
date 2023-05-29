import { SvgProps } from "../MeasurementIcons";

const Illuminance = ({ size, mainColour, secondaryColor }: SvgProps) => (
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
      d="M462 443.33H238c-8.168 0-15.168 7-14 15.168 0 8.168 7 14 14 14h224c8.168 0 14-5.832 14-14s-5.832-15.168-14-15.168ZM340.67 0c-96.836 4.668-177.34 85.168-182 183.17-2.332 52.5 16.332 101.5 49 136.5 25.668 28 42 63 47.832 100.33h189c7-37.332 24.5-72.332 49-101.5 29.168-33.832 47.832-78.168 47.832-126 0-109.67-91-197.17-200.66-192.5h-.004Zm151.66 204.17c-7 0-11.668-5.832-11.668-11.668 0-72.332-58.332-130.67-130.67-130.67-7 0-11.668-5.832-11.668-11.668 0-5.832 5.832-11.668 11.668-11.668 85.168 0 155.17 70 155.17 155.17.004 4.668-5.832 10.504-12.832 10.504ZM350 560c40.832 0 74.668-25.668 86.332-61.832h-172.66c11.664 36.164 45.5 61.832 86.332 61.832H350Z"
      style={{
        fill: mainColour,
        fillRule: "nonzero",
      }}
      transform="matrix(.08569 0 0 .08569 -4.982 1.015)"
    />
  </svg>
)
export default Illuminance
