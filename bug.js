```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const data = someAsyncOperation(); 
  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(data);
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