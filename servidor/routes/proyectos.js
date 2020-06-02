const express = require('express');
const router = express.Router();
const proyectoController = require('../controller/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// api/proyectos
router.post('/',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);
router.get('/',
    auth,
    proyectoController.obtenerProyectos
)

module.exports = router;