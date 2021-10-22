let fabricantes = require('../fabricantes');

FabricantesModels = {};

FabricantesModels.findAll = () => fabricantes;

FabricantesModels.finfabricantesyId = (id) => fabricantes.find(fabricante => fabricante.id == id);


FabricantesModels.post = (newFabricante) => {
    fabricantes.push(newFabricante);
    return newFabricante; 
}


FabricantesModels.update = (newFabricante) => {
    
    let fabricantes_filter = fabricantes.filter(fabricante => fabricante.id != newFabricante.id);
    fabricantes_filter.push(newFabricante);
    fabricantes = fabricantes_filter;
    return newFabricante;
}

FabricantesModels.delete = (id) => {

    let fabricantes_filter = fabricantes.filter(fabricante => fabricante.id != id);
    fabricantes = fabricantes_filter;
    return `Registro ${id} ha sido eliminado`;
}

module.exports = FabricantesModels;