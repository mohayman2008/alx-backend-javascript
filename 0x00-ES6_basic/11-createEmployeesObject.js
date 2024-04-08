#!/usr/bin/env node

export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [...employees],
  };
}
