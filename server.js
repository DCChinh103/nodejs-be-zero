var http = require('http');


const hostname = '127.0.0.1';
const port = 3000;

server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Hello World!, Tôi là Đỗ Công chính tôi hay đi code dạo');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
