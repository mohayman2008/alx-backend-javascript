const fsPromises = require('fs').promises;

async function countStudents(path) {
  let data;
  try {
    data = await fsPromises.readFile(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.trim().split('\n');
  const fieldsNames = lines[0].split(',');

  const students = [];

  lines.slice(1).forEach((element) => {
    const obj = {};

    const values = element.split(',');
    for (let i = 0; i < fieldsNames.length; i += 1) {
      obj[fieldsNames[i]] = values[i];
    }

    students.push(obj);
  });

  console.log(`Number of students: ${students.length}`);
  const fieldsStats = {};

  for (const student of students) {
    const stat = fieldsStats[student.field];
    if (stat === undefined) {
      fieldsStats[student.field] = {
        count: 0,
        list: [],
      };
    }

    fieldsStats[student.field].count += 1;
    fieldsStats[student.field].list.push(student.firstname);
  }

  Object.keys(fieldsStats).forEach((field) => {
    const { count, list } = fieldsStats[field];

    console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
  });
}

module.exports = countStudents;
