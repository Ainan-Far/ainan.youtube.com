export const API_KEY = "AIzaSyBarMbzZ00nbKjJQRULZesBP5E1KoGVDuI";

export const value_conv = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000000000) {
    return Math.floor(value / 1000000000) + "B";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
