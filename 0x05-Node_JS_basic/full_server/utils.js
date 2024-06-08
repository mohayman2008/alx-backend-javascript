import { promises as fsPromises } from 'fs';

async function readDatabase(path) {
  let data;
  try {
    data = await fsPromises.readFile(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.trim().split('\n');
  const fieldsNames = lines[0].split(',');

  const students = [];
  const fieldsStats = {};

  lines.slice(1).forEach((element) => {
    const student = {};

    const values = element.split(',');
    for (let i = 0; i < fieldsNames.length; i += 1) {
      student[fieldsNames[i]] = values[i];
    }
    students.push(student);

    const stat = fieldsStats[student.field];
    if (stat === undefined) {
      fieldsStats[student.field] = [];
    }

    fieldsStats[student.field].push(student.firstname);
  });

  return fieldsStats;
}

export default readDatabase;
