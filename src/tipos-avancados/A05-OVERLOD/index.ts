type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...agrs: number[]): number;
};
/*
const adder: Adder = (x: number, y?: number, agrs: number[]) => {
  if (agrs.length > 0) return agrs.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};
 */
