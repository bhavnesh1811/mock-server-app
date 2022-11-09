//1. npm init -y to initialise npm
//2. npm i json-server to install json-server
//3. Create server.js

//4.Copy the template to server.js
//5. node server.js

const PORT = process.env.PORT || 8080;
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);
server.listen(PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);
