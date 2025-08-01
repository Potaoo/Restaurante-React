const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

require('./src/index')(app);
app.use(express.static('public'));
app.listen(3333);