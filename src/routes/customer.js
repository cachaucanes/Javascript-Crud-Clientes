const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')

router.get('/', customerController.list) //lamo al controladore que tiene la logica
router.post('/add', customerController.save)
router.get('/delete/:id', customerController.delete)
router.get('/update/:id', customerController.edit) //Busca el id a actualizar, para mostrarlo en el formulario
router.post('/update/:id', customerController.update)

module.exports = router;