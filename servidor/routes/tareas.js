const express = require('express');
const router = express.Router();
const tareaController = require('../controller/tareaController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crear tareas
// api/tareas
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
);

// Obtener tareas
router.get('/',
    auth,
    tareaController.obtenerTareas
);

// Actualizar la tarea
router.put('/:id',
    auth,
    tareaController.actualizarTarea
);

// Eliminar una tarea
router.delete('/:id',
    auth,
    tareaController.eliminarTarea
)

module.exports = router;