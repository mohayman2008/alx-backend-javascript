const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.trim().split('\n');
    fieldsNames = lines[0].split(',');

    const students = [];

    lines.slice(1).forEach((element) => {
      const obj = {};

      const values = element.split(',')
      for (let i = 0 ; i < fieldsNames.length ; i++) {
        obj[fieldsNames[i]] = values[i];
      }

      students.push(obj);
    });

    console.log(`Number of students: ${students.length}`);
    const fieldsStats = {};
    
    for (student of students){
      stat = fieldsStats[student.field];
      if (stat === undefined) {
        fieldsStats[student.field] = {
          count: 0,
          list: []
        };
      }

      fieldsStats[student.field].count++; 
      fieldsStats[student.field].list.push(student.firstname);
    }

    Object.keys(fieldsStats).forEach((field) => {
      const count = fieldsStats[field].count;
      const list = fieldsStats[field].list;

      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    });
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
