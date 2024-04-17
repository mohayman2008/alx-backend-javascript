export default function updateUniqueItems(groceriesList) {
  if (groceriesList instanceof Map) {
    for (const item of groceriesList.entries()) {
      if (item[1] === 1) {
        groceriesList.set(item[0], 100);
      }
    }
    return groceriesList;
  }
  throw new Error('Cannot process');
}
