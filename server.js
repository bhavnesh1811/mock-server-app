//1. npm init -y to initialise npm
//2. npm i json-server to install json-server
//3. Create server.js

//4.Copy the template to server.js
//5. node server.js

const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5100; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);
