// Create web server
// Create a web server that listens for requests on port 3000
// When a request is made to the path /comments, it should read the comments.json file and respond with the contents of the file
// If the file does not exist, it should respond with a 404 error
// If the request is not made to /comments, it should respond with a 404 error

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    fs.readFile('comments.json', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('File not found');
      } else {
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});