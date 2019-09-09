const express = require('express')
const routes = express.Router();

const ProductController = require('../src/controller/ProductController')
const UserController = require('../src/controller/UserController')

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.get('/products/:id' , ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:id' , UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);


module.exports = routes;    