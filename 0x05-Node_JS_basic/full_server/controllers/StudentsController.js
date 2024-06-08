// import { DBPath } from '../server';
import readDatabase from '../utils';

async function loadDB(response, DBPath) {
  let students;

  try {
    students = await readDatabase(DBPath);
  } catch (err) {
    response.set('Content-Type', 'text/plain')
      .status(500)
      .send('Cannot load the database');
    return false;
  }

  return students;
}

class StudentsController {
  static async getAllStudents(request, response) {
    const fieldsStudents = await loadDB(response, request.DBPath);
    if (!fieldsStudents) return;

    let output = 'This is the list of our students';

    Object.keys(fieldsStudents).forEach((field) => {
      const list = fieldsStudents[field];

      output += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
    });

    response.set('Content-Type', 'text/plain')
      .status(200)
      .send(output);
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.set('Content-Type', 'text/plain')
        .status(500)
        .send('Major parameter must be CS or SWE');
      return;
    }

    const fieldsStudents = await loadDB(response, request.DBPath);
    if (!fieldsStudents) return;

    const list = fieldsStudents[major];
    const output = `List: ${list.join(', ')}`;

    response.set('Content-Type', 'text/plain')
      .status(200)
      .send(output);
  }
}

export default StudentsController;
