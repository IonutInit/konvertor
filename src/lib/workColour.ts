export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  hex = hex.slice(1);

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 2), 16);

  return { r, g, b };
}

export function applyOpacity(
  red: number,
  green: number,
  blue: number,
  opacity: number
): string {
  const redWithOpacity = Math.round(255 - opacity * (255 - red));
  const greenWithOpacity = Math.round(255 - opacity * (255 - green));
  const blueWithOpacity = Math.round(255 - opacity * (255 - blue));

  const redHex = redWithOpacity.toString(16).padStart(2, "0");
  const greenHex = greenWithOpacity.toString(16).padStart(2, "0");
  const blueHex = blueWithOpacity.toString(16).padStart(2, "0");

  return `#${redHex}${greenHex}${blueHex}`;
}

function workColour(hexColor: string, opacity: number) {
  const { r, g, b } = hexToRgb(hexColor);
  const result = applyOpacity(r, g, b, opacity);
  return result;
}

export default workColour;
