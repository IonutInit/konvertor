function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  // Remove the hash symbol if present
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }

  // Ensure the input is a valid hexadecimal color code
  const hexRegex = /^[0-9A-Fa-f]{6}$/;
  if (!hexRegex.test(hex)) {
    return null;
  }

  // Convert the hexadecimal color code to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 2), 16);
  const b = parseInt(hex.substring(4, 2), 16);

  console.log(r, g, b);
  return { r, g, b };
}

function rgbaToHex(
  red: number,
  green: number,
  blue: number,
  alpha: number
): string {
  // Ensure that the color components are within the valid range
  red = Math.max(0, Math.min(255, red));
  green = Math.max(0, Math.min(255, green));
  blue = Math.max(0, Math.min(255, blue));
  alpha = Math.max(0, Math.min(1, alpha));

  // Convert the color components to hexadecimal strings
  const redHex = red.toString(16).padStart(2, "0");
  const greenHex = green.toString(16).padStart(2, "0");
  const blueHex = blue.toString(16).padStart(2, "0");
  const alphaHex = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0");

  // Concatenate the hexadecimal strings and return the result
  return `#${redHex}${greenHex}${blueHex}${alphaHex}`;
}

function workColour(hexColor: string) {
  hexToRgb(hexColor);
}

export default workColour;
