/*
    Responsibility: 
    server startup and configuration 
    without involving specific application logic.
*/

// Importing the app object (the Express application exported from app.js).
import app from './src/app.js';

// Starting the server using app.listen() and printing a message to the console upon successful startup.
const port = 9000;
// app.listen() returns an http.Server object, which is an instance of Node’s http.Server class.
// listen to a port and a callback function is called when the server starts listening.
app.listen(port, () => console.log(`App listening on port ${port}!`)); 