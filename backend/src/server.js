const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

let url = 'SUA_URL_CONEXAO_MONGO';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);