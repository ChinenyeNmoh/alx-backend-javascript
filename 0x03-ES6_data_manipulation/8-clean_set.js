export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const newarr = [...set];
  let str = '';
  newarr.forEach((word) => {
    if (typeof word === 'string' && word.startsWith(startString)) {
      str += `${word.slice(startString.length)}-`;
    }
  });

  if (str.endsWith('-')) {
    str = str.slice(0, -1);
  }
  return str;
}
