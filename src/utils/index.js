export function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function clamp(num, min, max) {
  return Math.min(max, Math.max(min, num));
}

export function clean(num, min, max) {
  return (clamp(num, min, max) - min) / (max - min);
}

export function convert(num, min, max, newMin, newMax) {
  const x = (newMax - newMin) / (max - min);
  const y = newMin - min * x;

  return num * x + y;
}

export function round(num, amount) {
  return Math.round(num * amount) / amount;
}
