#!/usr/bin/env node

export default function createIteratorObject(report) {
  const all = [];
  Object.values(report.allEmployees).forEach((list) => {
    all.push(...list);
  });

  return all.values();
}
