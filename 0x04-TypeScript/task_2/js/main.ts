export interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
}

export interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}

export type Employee = TeacherInterface | DirectorInterface;

export type Subjects = 'Math' | 'History';

export class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';
  getCoffeeBreak = (): string => 'Getting a coffee break';
  workDirectorTasks = (): string => 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
  workFromHome = (): string => 'Cannot work from home';
  getCoffeeBreak = (): string => 'Cannot have a break';
  workTeacherTasks = (): string =>'Getting to work';
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}

export function isDirector(employee: Employee): boolean {
  return employee instanceof Director;
}

export function executeWork(employee: Employee): string {
  let line: string;
  if (isDirector(employee)) line = (employee as Director).workDirectorTasks();
  else line = (employee as Teacher).workTeacherTasks();

  console.log(line);
  return line;
}

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') return 'Teaching Math';
  else if (todayClass === 'History') return 'Teaching History';
}
