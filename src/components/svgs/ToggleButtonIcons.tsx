import * as React from 'react';

import MetricIcon from "./toggleButtonIcons/MetricIcon";
import ImperialIcon from "./toggleButtonIcons/ImperialIcon";

import getTheme from "../../context/theme";

export type SvgProps = {
  width: number;
  height: number;
  primaryColor: string;
  secondaryColor: string;
};

type Props = {
  type: "metric" | "imperial";
};

const ToggleButtonIcons = ({ type }: Props) => {
  const props = {
    width: 30,
    height: 30,
    primaryColor: getTheme().mainColour,
    secondaryColor: getTheme().gray1,
  };

  return (
    <>
      {type === "metric" && <MetricIcon {...props} />}
      {type === "imperial" && <ImperialIcon {...props} />}
    </>
  );
};

export default ToggleButtonIcons;
