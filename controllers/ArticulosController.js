const articulosModels = require('../models/FabricantesModels');

ArticulosController = {};

ArticulosController.getAll = (req, res) => {
    res.json(articulosModels.findAll());
}

ArticulosController.getById = (req, res) => {
    
    const {id} = req.params;
    res.json(articulosModels.findById(id));
}

ArticulosController.create = (req, res) => {
    
    const id = req.body.id;
    const datos = req.body;
    const articulo = {id, ...datos};
    res.json(articulosModels.post(articulo));

}

ArticulosController.update = (req, res) => {
    
    const id = req.params.id;
    const body = req.body;
    res.json(articulosModels.update({id,...body}));

}

ArticulosController.delete = (req, res) => {
    const id = req.params.id;
    res.send(articulosModels.delete(id));
}

module.exports= ArticulosController;