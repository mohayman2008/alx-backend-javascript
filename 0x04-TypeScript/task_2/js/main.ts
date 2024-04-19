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

type Subjects = 'Math' | 'History';

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

function executeWork(employee: any): string {
  let line: string;
  if (isDirector(employee)) line = employee.workDirectorTasks();
  else line = employee.workTeacherTasks();

  console.log(line);
  return line;
}

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') return 'Teaching Math';
  else if (todayClass === 'History') return 'Teaching History';
}
