export const formatDuration = (seconds) => {
  const zeroPrefix = (s) => {
    s = s + "";
    if (s.length < 2) {
      return "0" + s;
    }
    return s;
  };
  seconds = parseInt(Math.round(seconds));
  const minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;
  return zeroPrefix(minutes) + ":" + zeroPrefix(seconds);
};
