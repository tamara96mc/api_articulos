const express = require("express");
const router = express.Router();

const ArticulosController = require('../controllers/ArticulosController');


router.get('/', ArticulosController.getAll);

router.get('/:id', ArticulosController.getById);

router.post('/', ArticulosController.create);


router.put('/:id',ArticulosController.update);

router.delete('/:id', ArticulosController.delete);



module.exports = router;