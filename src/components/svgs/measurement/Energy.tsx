import { SvgProps } from "../MeasurementIcons";

const Energy = ({ size, mainColour, secondaryColor }: SvgProps) => (
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
      d="m499.27 309.87 74.516-62.484-91.332-33.324a5.102 5.102 0 0 1-3.273-5.672l16.816-95.648-91.332 33.172a5.095 5.095 0 0 1-6.153-2.238l-48.594-84.078-48.594 84.078a5.091 5.091 0 0 1-6.152 2.238l-91.32-33.164 16.969 95.637a5.089 5.089 0 0 1-3.27 5.676l-91.344 33.328 74.363 62.484a5.097 5.097 0 0 1 1.133 6.453l-48.59 84.062h97.184a5.099 5.099 0 0 1 5.02 4.207l16.973 95.809 74.352-62.477a5.077 5.077 0 0 1 3.277-1.195c1.164 0 2.328.398 3.273 1.191l74.512 62.477 16.812-95.801a5.1 5.1 0 0 1 5.02-4.215h97.184l-48.586-84.066a5.09 5.09 0 0 1 1.137-6.449l-.001-.001ZM350 400.999c-61.828 0-112.12-50.301-112.12-112.12 0-61.828 50.301-112.12 112.12-112.12 61.828 0 112.12 50.301 112.12 112.12.004 61.824-50.297 112.12-112.12 112.12Z"
      style={{
        fill: mainColour,
        fillRule: "nonzero",
      }}
      transform="matrix(.10724 0 0 .10724 -12.535 -5.028)"
    />
    <path
      d="M350 186.94c-56.207 0-101.93 45.727-101.93 101.93 0 56.207 45.727 101.93 101.93 101.93 56.207 0 101.93-45.727 101.93-101.93 0-56.207-45.727-101.93-101.93-101.93Zm20.855 72.844a5.122 5.122 0 0 1 7.219 0 5.16 5.16 0 0 1 1.488 3.609 5.172 5.172 0 0 1-1.488 3.61 5.183 5.183 0 0 1-3.61 1.488 5.15 5.15 0 0 1-3.609-1.488 5.147 5.147 0 0 1-1.488-3.61 5.14 5.14 0 0 1 1.488-3.609Zm-43.75 68.375a5.146 5.146 0 0 1-3.609 1.488 5.13 5.13 0 0 1-3.61-1.488 5.157 5.157 0 0 1-1.488-3.609 5.15 5.15 0 0 1 1.488-3.61 5.142 5.142 0 0 1 3.61-1.488 5.13 5.13 0 0 1 3.609 1.488 5.175 5.175 0 0 1 1.488 3.61 5.126 5.126 0 0 1-1.488 3.609Zm61.469-30.926-50.965 61.16a5.091 5.091 0 0 1-3.918 1.832 5.097 5.097 0 0 1-3.91-8.359l44-52.801H323.5a5.093 5.093 0 0 1-4.406-2.54 5.087 5.087 0 0 1-.016-5.085l40.773-71.352a5.093 5.093 0 0 1 6.953-1.899 5.1 5.1 0 0 1 1.899 6.953l-36.414 63.727h52.379a5.1 5.1 0 0 1 4.617 2.934 5.13 5.13 0 0 1-.711 5.43Z"
      style={{
        fill: mainColour,
        fillRule: "nonzero",
      }}
      transform="matrix(.10724 0 0 .10724 -12.535 -5.028)"
    />
  </svg>
)
export default Energy
