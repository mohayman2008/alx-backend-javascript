export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') return '';

  const result = [];
  const len = startString.length;
  if (!len) return '';

  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) result.push(element.slice(len));
  });

  return result.join('-');
}
