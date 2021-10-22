const FabricantesRouter = require('./routes/FabricantesRouter');
const ArticulosRouter = require('./routes/ArticulosRouter');
const router = require('express').Router();

router.use('/fabricantes' , FabricantesRouter);
router.use('/articulos' , ArticulosRouter);

module.exports = router;
