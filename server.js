const http = require('http')
const fs = require('fs');
const path = require('path');

const port = 3002;
const host = 'localhost';

const server = http.createServer((req, res) => {
    // Point to public/index.html instead of the root directory
    const filePath = path.join(__dirname, 'public', 'index.html');

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Server Error');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
    });
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
})