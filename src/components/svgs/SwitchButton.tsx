import { Svg, Path } from "react-native-svg";

import theme from "../../theme";

const SwitchButton = () => (
  <Svg
    style={{
      width: 32,
      height: 32,
    }}
    viewBox="0 0 50 50">
    <Path
      d="M414.09 237.56V123.59c0-9.625-7.875-17.5-17.5-17.5H243.47V49.652c0-7-4.266-13.344-10.719-16.078-6.453-2.734-14-1.313-19.031 3.609L79.3 167.993c-3.391 3.282-5.25 7.766-5.25 12.578 0 4.813 1.859 9.297 5.25 12.578l134.42 130.92c3.281 3.282 7.766 4.922 12.25 4.922 2.297 0 4.594-.437 6.781-1.422 6.453-2.734 10.719-9.078 10.719-16.078v-56.438h153.12c9.625 0 17.5-7.875 17.5-17.5v.007ZM620.7 366.95 486.28 236.03c-5.031-4.922-12.578-6.344-19.031-3.609-6.453 2.734-10.719 9.078-10.719 16.078v56.438H303.41c-9.625 0-17.5 7.875-17.5 17.5v113.97c0 9.625 7.875 17.5 17.5 17.5h153.12v56.438c0 7 4.266 13.344 10.719 16.078 2.188.875 4.484 1.422 6.781 1.422 4.485 0 8.86-1.75 12.25-4.922l134.42-130.92c3.391-3.282 5.25-7.766 5.25-12.578 0-4.813-1.859-9.188-5.25-12.469v-.006Z"
      fill={theme.mainColour}
      transform="translate(-5.44 .646) scale(.08697)"
    />
  </Svg>
);
export default SwitchButton;
