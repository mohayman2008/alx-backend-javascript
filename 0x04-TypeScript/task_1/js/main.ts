export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any,
  [key: number]: any,
}

export interface Directors extends Teacher {
  numberOfReports: number,
}

export interface Student {
  firstName: string,
  lastName: string,
  constructor: StudentConstructor,
  workOnHomework: () => string,
  displayName: () => string,
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): Student,
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string,
}

export const printTeacher: printTeacherFunction = function (firstName, lastName) {
  return `${firstName[0]}. ${lastName}`;
}

export class StudentClass implements Student {
  firstName: string;
  lastName: string;
  ["constructor"]: StudentConstructor;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
