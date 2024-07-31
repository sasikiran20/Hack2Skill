const express = require('express');

const router = express.Router();

const { addToCart, readCart } = require('../controller/cartController');

router.route('/cart').post(addToCart);
router.route('/cart1').post(readCart);

module.exports = router;
