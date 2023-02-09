export const stringManager = (s: string) => {
  const value = s.toLowerCase().replaceAll(" ", "").replaceAll("´", "");
  return value;
}