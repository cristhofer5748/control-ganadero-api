const express = require('express')
const app = express()
var log4js = require("log4js");
const bodyParser = require('body-parser');
const cors = require('cors')
const routslogin = require('./controller/login.routes')
const routsInsert = require('./controller/InsertController.js')
const routsConsultas = require('./controller/consultasController.js')
const routsVarios = require('./controller/varios.Controller.js')
const conection = require('./settings/mysql.conector.js')

app.set('port', process.env.PORT || 3000);

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

app.use(express.json({ limit: '50mb' }));
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