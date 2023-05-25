import theme from "../theme"

const WeightLoss = ({ width = "50px", height = "50px", mainColour = theme.mainColour, secondaryColor = theme.orange1 }) => (
  <svg
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
      width,
      height,
    }}
    viewBox="0 0 50 50"
  >
    <circle
      cx={6.827}
      cy={22.765}
      r={3.587}
      style={{
        fill: mainColour,
      }}
      transform="matrix(-1.25436 0 0 1.25436 47.864 -10.246)"
    />
    <circle
      cx={6.827}
      cy={22.765}
      r={3.587}
      style={{
        fill: mainColour,
      }}
      transform="matrix(-1.25436 0 0 1.25436 35.031 -10.246)"
    />
    <circle
      cx={6.827}
      cy={22.765}
      r={3.587}
      style={{
        fill: mainColour,
      }}
      transform="matrix(-1.25436 0 0 1.25436 35.031 14.402)"
    />
    <circle
      cx={6.827}
      cy={22.765}
      r={3.587}
      style={{
        fill: mainColour,
      }}
      transform="matrix(-1.25436 0 0 1.25436 47.864 4.738)"
    />
    <path
      d="M7.553 22.765h33.052"
      style={{
        fill: "none",
        stroke: mainColour,
        strokeWidth: "3.17px",
      }}
      transform="matrix(0 -.45335 -1.07716 0 63.821 36.718)"
    />
    <path
      d="M7.553 22.765h33.052"
      style={{
        fill: "none",
        stroke: mainColour,
        strokeWidth: "3.42px",
      }}
      transform="matrix(0 .74572 .7836 0 8.628 12.678)"
    />
    <path
      d="M4.734 5.027h14.574v14.574H4.734z"
      style={{
        fill: secondaryColor,
        stroke: secondaryColor,
        strokeWidth: "3.42px",
      }}
      transform="translate(.838 1.18) scale(.7651)"
    />
  </svg>
)
export default WeightLoss
