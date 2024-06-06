const { argv } = require('process');
const { createServer } = require('http');
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

  let output = `Number of students: ${students.length}`;
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

    output += `\nNumber of students in ${field}: ${count}. List: ${list.join(', ')}`;
  });

  return output;
}

const studentsStats = countStudents(argv[2]).catch((err) => {
  console.error(err.message);
  process.exit(1);
});

async function requestListener(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!', 'utf8');
      break;

    case '/students':
      res.end(`This is the list of our students\n${await studentsStats}`, 'utf8');
      break;

    default:
      res.end();
  }
}

const app = createServer(requestListener);
app.listen(1245, () => {
  console.log(`Server is running on port: ${1245}`);
});

module.exports = app;
