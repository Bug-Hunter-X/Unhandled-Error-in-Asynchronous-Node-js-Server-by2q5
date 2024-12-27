```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  try {
    const data = someAsyncOperation();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
});

function someAsyncOperation() {
  // Simulate a potential error
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Success!';
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```