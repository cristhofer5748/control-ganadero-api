const express = require('express')
const app = express()
var log4js = require("log4js");
const bodyParser = require('body-parser');
const cors = require('cors')
const routslogin = require('./src/controller/login.routes')
const routsInsert = require('./src/controller/InsertController.js')
const routsConsultas = require('./src/controller/consultasController.js')
const routsVarios = require('./src/controller/varios.Controller.js')
const conection = require('./src/settings/mysql.conector.js')

app.set('port', process.env.PORT || 8016);

log4js.configure({
    appenders: {
        console: {
            type: "console"
        }
    },
    categories: {
        default: {
            appenders: ["console"],
            level: "info"
        }
    }
});

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/login', routslogin);
app.use('/insert', routsInsert);
app.use('/information', routsConsultas);
app.use('/', routsVarios);

app.listen(app.get('port'), () => {
    conection.conection();
    console.log("Server running on port ", app.get('port'))
})