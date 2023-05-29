import { Svg, Path, Circle } from "react-native-svg";

type RemoveIconPropTypes = {
  size: number;
  background: string;
  symbolColour: string;
};

const RemoveIcon = ({
  size,
  background,
  symbolColour,
}: RemoveIconPropTypes) => (
  <Svg
    style={{
      width: size,
      height: size,
    }}
    viewBox="0 0 50 50">
    <Circle
      cx={19.112}
      cy={22.183}
      r={6.475}
      fill={background}
      transform="translate(-36.1 -45.918) scale(3.19693)"
    />
    <Path
      d="M27.961 14.879h1.319l1.26-1.98c.096-.144.192-.324.192-.324h.024s.096.18.18.324l1.283 1.98h1.308l-2.051-3.12 1.163-1.74c.12-.18.276-.216.516-.216h.348v-.995h-.756c-.564 0-.744.096-1.056.611l-.731 1.176a4.9 4.9 0 0 0-.204.384h-.024s-.108-.228-.192-.384l-.744-1.176c-.324-.503-.492-.611-1.056-.611h-.744v.995h.336c.252 0 .384.036.516.228l1.164 1.728-2.051 3.12Z"
      fill={symbolColour}
      fillRule="nonzero"
      transform="translate(-45.946 -2.33) scale(2.30766)"
    />
  </Svg>
);
export default RemoveIcon;
