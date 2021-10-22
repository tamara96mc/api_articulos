const express = require("express");
const router = express.Router();

const FabricantesController = require('../controllers/FabricantesController');


router.get('/', FabricantesController.getAll);

router.get('/:id', FabricantesController.getById);

router.post('/', FabricantesController.create);


router.put('/:id',FabricantesController.update );

router.delete('/:id', FabricantesController.delete);



module.exports = router;