const express = require('express')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const path = require('path')
const morgan = require('morgan')
/* require('dotenv').config() */ /* Activar solo en local */

const app = express()

//importing routes
//Config database
const keysDataBase = require('../database/keys')
const customerRoutes = require('./routes/customer')

//Settings
app.set('port', process.env.PORT || 8080)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views')) //archivos de vista

//middlewares
app.use(morgan('dev'))

//esta agregando al req un metodo llamado getConnection()
app.use(myConnection(mysql, keysDataBase, 'pool'))
/* app.use(myConnection(mysql, { //esta agregando al req un metodo llamado getConnection()
  host: 'localhost',
  user: 'root',
  password: 'carlos',
  port: 3306,
  database: 'crudnodejsmysql'
}, 'single')) */
//cada vez que me envian datos el servidor se va encargar de revisarlos y convertirlos
app.use(express.urlencoded({ extended: false })) //Desde el module de expres estamos requiriendo un metodo que va permitir entender entender todos los datos que vengan del formulario y extend para decir que no va enviar imagens ni data complicada

//routes
app.use('/', customerRoutes)

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Starting the serve
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'))
})