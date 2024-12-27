# Unhandled Error in Asynchronous Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions within asynchronous operations.  The provided `bug.js` showcases a server that may crash due to an unhandled error during an asynchronous task. The `bugSolution.js` demonstrates how to effectively handle such errors using `try...catch` blocks.

## Bug

The `bug.js` file contains a simple HTTP server.  The `someAsyncOperation` function simulates an asynchronous operation that might throw an error. If the error occurs, the server will crash without any graceful handling.