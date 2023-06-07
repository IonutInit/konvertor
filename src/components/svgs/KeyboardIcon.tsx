import * as React from 'react';
import { Svg, Path } from "react-native-svg";

import getTheme from "../../context/theme";

type Props = {
  size?: number;
  mainColour?: string;
};

const KeyboardIcon = ({
  size = 32,
  mainColour = getTheme().mainColour,
}: Props) => {
  const theme = getTheme();

  return (
    <Svg
      style={{
        width: size,
        height: size,
      }}
      viewBox="0 0 50 50">
      <Path
        d="M732.385 194.607H67.613c-21.607 0-39.187 17.579-39.187 39.188v332.413c0 21.607 17.579 39.186 39.187 39.186h664.771c21.608 0 39.188-17.578 39.188-39.186V233.794c.001-21.608-17.579-39.187-39.187-39.187Zm-212.358 63.455c0-8.284 6.716-15 15-15h62.303c8.284 0 15 6.716 15 15v62.303c0 8.284-6.716 15-15 15h-62.303c-8.284 0-15-6.716-15-15v-62.303Zm-110.785 0c0-8.284 6.716-15 15-15h62.302c8.284 0 15 6.716 15 15v62.303c0 8.284-6.716 15-15 15h-62.302c-8.284 0-15-6.716-15-15v-62.303Zm0 110.786c0-8.284 6.716-15 15-15h62.302c8.284 0 15 6.716 15 15v62.302c0 8.285-6.716 15-15 15h-62.302c-8.284 0-15-6.715-15-15v-62.302ZM298.456 258.062c0-8.284 6.716-15 15-15h62.303c8.285 0 15 6.716 15 15v62.303c0 8.284-6.715 15-15 15h-62.303c-8.284 0-15-6.716-15-15v-62.303Zm0 110.786c0-8.284 6.716-15 15-15h62.303c8.285 0 15 6.716 15 15v62.302c0 8.285-6.715 15-15 15h-62.303c-8.284 0-15-6.715-15-15v-62.302ZM187.67 258.062c0-8.284 6.716-15 15-15h62.302c8.284 0 15 6.716 15 15v62.303c0 8.284-6.716 15-15 15H202.67c-8.284 0-15-6.716-15-15v-62.303Zm-110.786 0c0-8.284 6.716-15 15-15h62.302c8.284 0 15 6.716 15 15v62.303c0 8.284-6.716 15-15 15H91.884c-8.284 0-15-6.716-15-15v-62.303Zm0 110.786c0-8.284 6.716-15 15-15h173.088c8.284 0 15 6.716 15 15v62.302c0 8.285-6.716 15-15 15H91.884c-8.284 0-15-6.715-15-15v-62.302Zm92.302 173.09c0 8.283-6.716 15-15 15H91.884c-8.284 0-15-6.717-15-15v-62.303c0-8.285 6.716-15 15-15h62.302c8.284 0 15 6.715 15 15v62.303Zm443.144 0c0 8.283-6.716 15-15 15H202.67c-8.284 0-15-6.717-15-15v-62.303c0-8.285 6.716-15 15-15h394.66c8.284 0 15 6.715 15 15v62.303Zm110.786 0c0 8.283-6.716 15-15 15h-62.303c-8.284 0-15-6.717-15-15v-62.303c0-8.285 6.716-15 15-15h62.303c8.284 0 15 6.715 15 15v62.303Zm0-110.788c0 8.285-6.716 15-15 15H535.027c-8.284 0-15-6.715-15-15v-62.302c0-8.284 6.716-15 15-15h95.786v-95.786c0-8.284 6.716-15 15-15h62.303c8.284 0 15 6.716 15 15V431.15Z"
        fill={mainColour}
        transform="matrix(.06411 0 0 .06411 -.646 -.646)"
      />
    </Svg>
  );
};

export default KeyboardIcon;
