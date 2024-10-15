// Utility function to convert RGBA to Hex
export const rgbaToHex = ({ r, g, b }) => {
  const toHex = (value) => value.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
};