const http = require('http');
const path = require('path');
const app =  require( path.resolve( __dirname, "./app.js" ) );

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);