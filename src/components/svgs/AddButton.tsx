import { Svg, Path, Circle } from "react-native-svg";

import getTheme from "../../context/theme";

const AddButton = ({ type = "plus", disabled = false, size = 32 }) => {
  const theme = getTheme();

  const fill = disabled ? theme.gray3 : theme.mainColour;

  return (
    <Svg
      style={{
        width: size,
        height: size,
      }}
      viewBox="0 0 50 50">
      <Circle
        cx={26.496}
        cy={26.007}
        r={16.129}
        fill={fill}
        transform="translate(-11.963 -11.281) scale(1.39503)"
      />
      {type === "minus" && (
        <Path
          d="M24.055 15.466h15.661v2.306H24.055z"
          fill={theme.gray1}
          fillRule="nonzero"
          stroke={theme.gray1}
          strokeWidth={3.25}
          transform="matrix(1.60972 0 0 1.5146 -26.326 -.172)"
        />
      )}
      {type === "plus" && (
        <Path
          d="M24.055 17.772h6.633v7.285h2.424v-7.285h6.603v-2.306h-6.603V8.182h-2.424v7.284h-6.633v2.306Z"
          fill={theme.gray1}
          fillRule="nonzero"
          stroke={theme.gray1}
          strokeWidth={3.25}
          transform="matrix(1.60972 0 0 1.5146 -26.326 -.172)"
        />
      )}
    </Svg>
  );
};
export default AddButton;
