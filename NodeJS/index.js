const express = require("express"); //importar express
const bodyParser = require("body-parser");
const misRutas = require('./routes/rutas');
const cors = require('cors');

const app = express(); //crear al servidor
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use('/',misRutas);
app.use(express.static(__dirname + '/public/'));


app.listen(port, () => {
    console.log(`holi servidor ejecucion en http://localhost:${port}`);
})