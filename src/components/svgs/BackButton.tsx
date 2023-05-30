import { Svg, Path } from "react-native-svg";

import getTheme from "../../context/theme";

const BackButton = () => {
  const theme = getTheme();

  return (
    <Svg
      style={{
        width: 32,
        height: 32,
      }}
      viewBox="0 0 50 50">
      <Path
        d="m278.34 280 181.49 181.49c9.113 9.109 9.113 23.883 0 32.996-9.113 9.113-23.887 9.113-32.996 0l-197.99-197.99c-9.113-9.113-9.113-23.887 0-33l197.99-197.99c9.109-9.113 23.883-9.113 32.996 0 9.113 9.113 9.113 23.887 0 32.996L278.34 280Z"
        fill={theme.mainColour}
        transform="matrix(.10844 0 0 .10844 -12.34 -5.362)"
      />
    </Svg>
  );
};
export default BackButton;
