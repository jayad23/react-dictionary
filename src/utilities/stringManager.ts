export const stringManager = (s: string) => {
  const value = s.toLowerCase().replaceAll(" ", "").replaceAll("´", "").replaceAll(".", "");
  return value;
};
export const stringToRoute = (s: string) => {
  const value = s.toLowerCase().replaceAll(" ", "-").replaceAll(".", "");
  return value;
};