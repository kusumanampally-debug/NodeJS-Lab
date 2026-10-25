const http = require('http');
const os = require('os');
const path = require('path');
const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('greeting', (data) => {
    console.log('Custom Event Triggered:', data);
});

console.log('OS Type:', os.type());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU Cores:', os.cpus().length);
console.log('Current Directory:', __dirname);
console.log(
    'Joined Path:',
    path.join(__dirname, 'public', 'index.html')
);

eventEmitter.emit('greeting', {
    message: 'Hello from custom event!'
});

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello, World! Node.js custom server is running.');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});