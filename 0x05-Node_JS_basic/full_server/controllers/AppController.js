class AppController {
  static getHomepage(request, response) {
    response.set('Content-Type', 'text/plain')
      .status(200)
      .send('Hello Holberton School!');
  }
}

export default AppController;
