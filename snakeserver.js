// const http = require('http');
const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();
const dir = path.join(__dirname, 'files');

app.use(express.static(dir));
app.listen(8080);