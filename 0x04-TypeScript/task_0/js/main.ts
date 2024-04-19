export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  location: 'Lala Land',
}

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 255,
  location: 'Narnia',
}

export const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
  const tr: HTMLTableRowElement = table.insertRow();

  tr.insertCell().innerText= student.firstName;
  tr.insertCell().innerText = student.location;
});
