const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productsController');

router.post('/', ctrl.createProduct);        // create
router.get('/', ctrl.getProducts);           // get all
router.get('/:id', ctrl.getProductById);     // get by id
router.put('/:id', ctrl.updateProduct);      // update
router.delete('/:id', ctrl.deleteProduct);   // delete

module.exports = router;
