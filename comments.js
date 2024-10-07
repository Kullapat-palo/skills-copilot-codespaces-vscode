// Create web server
// Create a web server that listens to the port 3000 and returns a response with the content of the comments.js file. Use the fs module to read the content of the file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./comments.js', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 Not Found');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});