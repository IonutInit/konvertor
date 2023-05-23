type ImageSource = number | { uri: string };

declare module "convert-units";

declare module "*.png" {
  const value: ImageSource
  export default value;
}
