import { Svg, Path, Circle } from "react-native-svg";

import getTheme from "../../context/theme";

type PropType = {
  isAddition: boolean;
};

const ArithmeticOperatorButton = ({ isAddition }: PropType) => {
  const theme = getTheme();
  const size = 40;

  return (
    <Svg
      style={{
        height: size,
        width: size * 1.57,
      }}
      viewBox="0 0 73 46">
      <Circle
        cx={32.12}
        cy={29.538}
        r={20.462}
        fill={isAddition ? theme.mainColour : "none"}
        stroke={isAddition ? theme.gray1 : theme.mainColour}
        strokeWidth="0.5px"
        transform="translate(-3.24 -6.573)"
      />
      <Circle
        cx={32.12}
        cy={29.538}
        r={20.462}
        fill={isAddition ? theme.mainColour : "none"}
        stroke={isAddition ? theme.gray1 : theme.mainColour}
        strokeWidth="0.5px"
        transform="translate(11.221 -6.573)"
      />
      <Path
        d="M51.682 44.302c-7.729-2.924-13.231-10.397-13.231-19.146 0-8.748 5.502-16.221 13.231-19.145 7.729 2.924 13.231 10.397 13.231 19.145 0 8.749-5.502 16.222-13.231 19.146Z"
        fill={theme.mainColour}
        stroke={theme.gray1}
        strokeWidth="0.5px"
        transform="translate(-15.571 -2.19)"
      />
      {isAddition && (
        <Path
          d="M79.322 22.194h-5.413v5.368h-1.924v-5.368h-5.387v-1.686h5.387v-5.33h1.924v5.33h5.413v1.686Z"
          fill={theme.gray1}
          fillRule="nonzero"
          stroke={theme.gray1}
          strokeWidth={1}
          strokeMiterlimit={2}
          transform="translate(-36.85 1.596)"
        />
      )}
      <Path
        d="M66.917 21.307h6.554v1.885h-6.554z"
        fill={theme.gray1}
        fillRule="nonzero"
        stroke={theme.gray1}
        strokeWidth={1}
        strokeMiterlimit={2}
        transform="translate(-34.083 .716)"
      />
      <Path
        d="M15.571 2.191h72.222v45.931H15.571z"
        fill="none"
        transform="translate(-15.571 -2.19)"
      />
    </Svg>
  );
};

export default ArithmeticOperatorButton;
