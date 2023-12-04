export default function hasValuesFromArray(set, array) {
  const res = array.every((item) => set.has(item));
  return res;
}
