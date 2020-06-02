// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');
const { check } = require('express-validator');

// Crear un usuario
// api/usuarios
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un correo valido').isEmail(),
        check('password', 'El password debe tener como minimo 6 caracteres').isLength({ min: 6 })
    ],
    usuarioController.crearUsuario
);

module.exports = router;