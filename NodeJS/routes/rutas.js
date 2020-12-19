const express = require ('express');
const router = express.Router();
const path = require('path');

const ctrlDatos = require('../controlador');
router.get('/api', ctrlDatos.findDatos);
router.get('/api/:nom', ctrlDatos.findDatos2);

router.get('/api2/:clave', ctrlDatos.findDatos3);

module.exports = router;