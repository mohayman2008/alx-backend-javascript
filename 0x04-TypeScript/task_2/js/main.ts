interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}

type Employee = TeacherInterface | DirectorInterface;

class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';
  getCoffeeBreak = (): string => 'Getting a coffee break';
  workDirectorTasks = (): string => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = (): string => 'Cannot work from home';
  getCoffeeBreak = (): string => 'Cannot have a break';
  workTeacherTasks = (): string =>'Getting to work';
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}

function isDirector(employee: Employee): boolean {
  return employee instanceof Director;
}

function executeWork(employee: any): void {
  if (isDirector(employee)) console.log(employee.workDirectorTasks());
  else console.log(employee.workTeacherTasks());
}
