const FabricantesModels = require('../models/FabricantesModels');

FabricantesController = {};

FabricantesController.getAll = (req, res) => {
    res.json(FabricantesModels.findAll());
}

FabricantesController.getById = (req, res) => {
    
    const {id} = req.params;
    res.json(FabricantesModels.findById(id));
}

FabricantesController.create = (req, res) => {
    
    const id = req.body.id;
    const nombre = req.body.nombre;
    const fabricante = {id, nombre};
    res.json(FabricantesModels.post(fabricante));

}

FabricantesController.update = (req, res) => {
    
    const id = req.params.id;
    const body = req.body;
    res.json(FabricantesModels.update({id,...body}));

}

FabricantesController.delete = (req, res) => {
    const id = req.params.id;
    res.send(FabricantesModels.delete(id));
}

module.exports= FabricantesController;