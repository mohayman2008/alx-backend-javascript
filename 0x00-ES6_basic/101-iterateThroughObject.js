#!/usr/bin/env node
export default function iterateThroughObject(reportWithIterator) {
  let names = reportWithIterator.next().value;
  for (const name of reportWithIterator) {
    names += ` | ${name}`;
  }
  return names;
}
