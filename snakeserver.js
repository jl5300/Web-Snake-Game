const path = require('path');
const express = require('express');

const app = express();
const dir = path.join(__dirname, 'files');

app.use(express.static(dir));
app.listen(8080);

console.log('Server listening on port 8080. Go to localhost:8080/snakegame.html in any browser.');