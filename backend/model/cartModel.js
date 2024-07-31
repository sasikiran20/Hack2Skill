const mongoose = require('mongoose');
const userCartSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please give email'],
  },
  userCartItems: [
    {
      product_id: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: [true, 'Please also give quantity number'],
      },
    },
  ],
});
const cartModel = mongoose.model('cartModel', userCartSchema);
module.exports = cartModel;
