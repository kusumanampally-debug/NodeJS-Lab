const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/set-cookie') {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Set-Cookie': 'username=student; Path=/'
        });
        res.end('Cookie set successfully!');
    } else if (req.url === '/session') {
        const cookies = req.headers.cookie || '';
        const visited = cookies.includes('visited=true');

        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Set-Cookie': 'visited=true; Path=/'
        });

        res.end(visited
            ? 'Welcome back! Cookie shows a previous visit.'
            : 'Welcome! This is your first visit.');
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h2>Cookie and Session Tracking Demo</h2>
            <p><a href="/set-cookie">Set Cookie</a></p>
            <p><a href="/session">Check Visit</a></p>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});