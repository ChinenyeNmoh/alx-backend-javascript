export default function cleanSet(set, startString) {
  const newarr = [...set];
  let str = '';
  if(startString === ''){
    return '';
  }
  newarr.forEach((word) => {
    if (word.startsWith(startString)) {
      str += `${word.slice(3)}-`;
    }
  });

  if (str.endsWith('-')) {
    str = str.slice(0, -1);
  }
  return str;
}
