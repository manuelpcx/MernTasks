// Rutas para autenticar usuario
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controller/authController');

// api/auth
router.post('/', 
    [
        check('email', 'Agrega un correo valido').isEmail(),
        check('password', 'El password debe tener como minimo 6 caracteres').isLength({ min: 6 })
    ],
    authController.autenticarUsuario
    
);

module.exports = router;