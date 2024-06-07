const express = require('express');
const fsPromises = require('fs').promises;

const PORT = 1245;
const app = express();

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

  let output = `Number of students: ${students.length}`;
  Object.keys(fieldsStats).forEach((field) => {
    const list = fieldsStats[field];

    output += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
  });

  return output;
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const content = 'This is the list of our students\n';
  try {
    const out = await countStudents(process.argv[2]);
    res.send(`${content}${out}`);
  } catch (err) {
    console.error(err.message);
    res.send(`${content}${err.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

module.exports = app;
