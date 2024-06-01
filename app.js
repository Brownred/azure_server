const http = require('http');

// Define the port
const port = 4000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
	res.write('road to fullstack');
  // Send a response to the client
  res.end('Hello, world!\n');
});

// Start the server and listen for incoming connections
server.listen(port,() => {
  console.log(`Server started on port ${port} Smilley face`);
});
