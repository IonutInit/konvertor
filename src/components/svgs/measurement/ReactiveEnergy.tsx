import { SvgProps } from "../MeasurementIcons";

const ReactiveEvergy = ({ size, mainColour, secondaryColor }: SvgProps) => (
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
      d="M268.37 389.73c-21.133-25.656-37.547-61.922-26.609-85.109 4.473-9.484 15.496-20.781 42.613-20.781 19.469 0 33.766-12.555 38.266-33.59 6.352-29.715-8.305-69.246-48.605-87.289-25.672-11.496-50.215-35.234-73.078-70.332-42.191 39.727-68.609 96.023-68.609 158.4 0 91.57 56.875 170.05 137.13 202.14 9.344-25.555 9.133-51.008-1.105-63.441l-.003.002ZM417.43 140.56c63.5 41.93 111.52 52.945 142.8 54.164C535.347 101.923 450.54 33.384 350 33.384c-2.504 0-4.98.105-7.465.184 2.836 40.02 27.965 75.992 74.891 106.99l.004.002ZM552.77 357.74c-1.398.551-2.941.543-4.437.035l-59.762.445a6.542 6.542 0 0 1-4.926-2.23 6.565 6.565 0 0 1-1.574-5.188l13.026-99.48-95.437 167.22 77.84-.57c1.855 0 3.632.789 4.875 2.172a6.511 6.511 0 0 1 1.652 5.066l-1.262 12.164c-.016.063-.008.133-.027.184l-9.047 87.402 93.914-167.34-14.835.12Z"
      style={{
        fill: mainColour,
        fillRule: "nonzero",
      }}
      transform="matrix(.09765 0 0 .09765 -9.176 -2.26)"
    />
    <path
      d="M350 468.68c43.023 0 84.438-12.566 120.09-36.215l.148-1.375h-71.102c-2.414 0-4.742-.684-6.738-1.977-2.711-1.636-4.734-4.402-5.531-7.691a12.505 12.505 0 0 1 1.516-9.59l96.645-169.33c2.562-3.945 6.535-6.09 10.816-6.09.226 0 1.085.043 1.304.071 3.387.367 6.406 2.004 8.539 4.609a12.53 12.53 0 0 1 2.774 9.32l-12.406 94.668h50.199c14.148-29.461 21.402-61.066 21.402-94.062 0-14.77-1.496-29.199-4.313-43.164-45.93-.664-97.395-19.539-153.14-56.359-50.602-33.426-77.707-72.809-80.754-117.14-44.852 4.219-85.785 22.094-118.58 49.43 21.777 33.871 44.809 56.543 68.539 67.172 46.656 20.895 63.523 67.129 56.07 102.02-5.801 27.125-25.375 43.969-51.102 43.969-16.25 0-26.59 4.461-30.738 13.258-8.066 17.098 6.406 48.746 24.867 71.172 13.273 16.117 14.289 46.129 3.266 76.281a216.34 216.34 0 0 0 68.23 11.023H350Z"
      style={{
        fill: mainColour,
        fillRule: "nonzero",
      }}
      transform="matrix(.09765 0 0 .09765 -9.176 -2.26)"
    />
  </svg>
)
export default ReactiveEvergy
