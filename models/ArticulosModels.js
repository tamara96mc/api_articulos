let articulos = require('../articulos');

ArticulosModels = {};

ArticulosModels.findAll = () => articulos;

ArticulosModels.finarticulosyId = (id) => articulos.find(articulo => articulo.id == id);

ArticulosModels.post = (newArticulo) => {
    articulos.push(newArticulo);
    return newArticulo;
}


ArticulosModels.update = (newArticulo) => {
    
    let articulos_filter = articulos.filter(articulo => articulo.id != newArticulo.id);
    articulos_filter.push(newArticulo);
    articulos = articulos_filter;
    return newArticulo;
}

ArticulosModels.delete = (id) => {

    let articulos_filter = articulos.filter(articulo => articulo.id !=id);
    articulos = articulos_filter;
    return `Registro ${id} ha sido eliminado`;
}

module.exports = ArticulosModels;