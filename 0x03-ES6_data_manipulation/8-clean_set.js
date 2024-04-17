export default function cleanSet(set, startString) {
  const result = [];
  const len = startString.length;
  if (!len) return '';

  set.forEach((element) => {
    if (element.startsWith(startString)) result.push(element.slice(len));
  });

  return result.join('-');
}
