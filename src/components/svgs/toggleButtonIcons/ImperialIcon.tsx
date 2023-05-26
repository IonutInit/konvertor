type SvgProps = {
    width: number,
    height: number,
  primaryColor: string,
  secondaryColor: string,
};

// const ImperialIcon = ({ width, height, primaryColor, secondaryColor }: SvgProps) => (
//   <svg
//     xmlSpace="preserve"
//     style={{
//       fillRule: "evenodd",
//       clipRule: "evenodd",
//       strokeLinejoin: "round",
//       strokeMiterlimit: 2,
//       width,
//       height,
//     }}
//     viewBox="0 0 50 30">
//     <path
//       d="M0 9.448h50v30.829H0z"
//       style={{
//         fill: primaryColor,
//       }}
//       transform="matrix(1 0 0 .9731 0 -9.194)"
//     />
//     <path
//       d="M109.95 175.92c2.016 53.965 46.793 97.496 101.23 97.496 54.437 0 99.219-43.535 101.23-97.496h-11.023c-21.605 0-39.297-17.691-39.297-39.297 0-21.605 17.691-39.297 39.297-39.297h10.047V87.279c0-21.605 17.691-39.297 39.297-39.297 21.633 0 39.297 17.691 39.297 39.297v10.047h10.074c21.605 0 39.297 17.691 39.297 39.297 0 21.605-17.691 39.297-39.297 39.297h-10.668c2.016 53.965 46.793 97.496 101.23 97.496 54.437 0 99.219-43.535 101.23-97.496h-29.902c-21.605 0-39.297-17.691-39.297-39.297 0-21.605 17.691-39.297 39.297-39.297h10.074V87.279c0-21.605 17.664-39.297 39.297-39.297 21.605 0 39.297 17.691 39.297 39.297v10.047h10.047c21.605 0 39.297 17.691 39.297 39.297 0 21.605-17.691 39.297-39.297 39.297h-15.113v266.41a5.987 5.987 0 0 1-5.984 5.984H61.7c-3.289 0-5.985-2.695-5.985-5.984V175.92H39.297C17.692 175.92 0 158.229 0 136.623c0-21.605 17.691-39.297 39.297-39.297h10.047V87.279c0-21.605 17.691-39.297 39.297-39.297 21.633 0 39.297 17.691 39.297 39.297v10.047h10.047c21.633 0 39.297 17.691 39.297 39.297 0 21.605-17.664 39.297-39.297 39.297H109.95ZM644.2 487.76l-.324 36.242c-.031 3.973-3.289 7.203-7.262 7.203l-574.55-.148a7.138 7.138 0 0 1-7.141-7.203l.325-36.242c.031-3.973 3.289-7.204 7.261-7.204l574.55.149a7.137 7.137 0 0 1 7.141 7.203Z"
//       style={{
//         fill: secondaryColor,
//       }}
//       transform="matrix(.04896 0 0 .04835 7.864 .997)"
//     />
//   </svg>
// );
// export default ImperialIcon;


import * as React from "react"
const ImperialIcon = ({ width, height, primaryColor, secondaryColor }: SvgProps) => (
  <svg
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
      width,
      height,
    }}
    viewBox="0 0 50 30"
  >
    <path
      d="M0 9.448h50v30.829H0z"
      style={{
        fill: primaryColor,
      }}
      transform="matrix(1 0 0 .9731 0 -9.194)"
    />
    <path
      d="M109.95 175.92c2.016 53.965 46.793 97.496 101.23 97.496 54.437 0 99.219-43.535 101.23-97.496h-11.023c-21.605 0-39.297-17.691-39.297-39.297 0-21.605 17.691-39.297 39.297-39.297h10.047V87.279c0-21.605 17.691-39.297 39.297-39.297 21.633 0 39.297 17.691 39.297 39.297v10.047h10.074c21.605 0 39.297 17.691 39.297 39.297 0 21.605-17.691 39.297-39.297 39.297h-10.668c2.016 53.965 46.793 97.496 101.23 97.496 54.437 0 99.219-43.535 101.23-97.496h-29.902c-21.605 0-39.297-17.691-39.297-39.297 0-21.605 17.691-39.297 39.297-39.297h10.074V87.279c0-21.605 17.664-39.297 39.297-39.297 21.605 0 39.297 17.691 39.297 39.297v10.047h10.047c21.605 0 39.297 17.691 39.297 39.297 0 21.605-17.691 39.297-39.297 39.297h-15.113v266.41a5.987 5.987 0 0 1-5.984 5.984H61.7c-3.289 0-5.985-2.695-5.985-5.984V175.92H39.297C17.692 175.92 0 158.229 0 136.623c0-21.605 17.691-39.297 39.297-39.297h10.047V87.279c0-21.605 17.691-39.297 39.297-39.297 21.633 0 39.297 17.691 39.297 39.297v10.047h10.047c21.633 0 39.297 17.691 39.297 39.297 0 21.605-17.664 39.297-39.297 39.297H109.95ZM644.2 487.76l-.324 36.242c-.031 3.973-3.289 7.203-7.262 7.203l-574.55-.148a7.138 7.138 0 0 1-7.141-7.203l.325-36.242c.031-3.973 3.289-7.204 7.261-7.204l574.55.149a7.137 7.137 0 0 1 7.141 7.203Z"
      style={{
        fill: secondaryColor,
      }}
      transform="matrix(.04896 0 0 .04835 7.864 .997)"
    />
  </svg>
)
export default ImperialIcon

