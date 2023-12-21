export const calculateEstimatedReadingTime = (text: string) => {
  const wpm = 255;
  const words = text?.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};
