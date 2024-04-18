interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any,
  [key: number]: any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

interface Student {
  firstName: string,
  lastName: string,
  constructor: StudentConstructor,
  workOnHomework: () => string,
  displayName: () => string,
}

interface StudentConstructor {
  (firstName: string, lastName: string): void,
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string,
}

const printTeacher: printTeacherFunction = function (firstName, lastName) {
  return `${firstName[0]}. ${lastName}`;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;
  
  ["constructor"]: StudentConstructor = function(firstName: string, lastName: string) {
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
