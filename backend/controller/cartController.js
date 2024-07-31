const asyncWrapper = require('../middleWare/asyncWrapper');
const Cart = require('../model/cartModel');

exports.addToCart = asyncWrapper(async (req, res, next) => {
  const { email, product_id, quantity } = req.body;

  // Validate the input data
  if (!email || typeof email !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Email is required and must be a string',
    });
  }

  if (!product_id || typeof product_id !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Product ID is required and must be a string',
    });
  }

  if (typeof quantity !== 'number' || quantity <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Quantity is required and must be a positive number',
    });
  }

  // Find cart by email
  let cart = await Cart.findOne({ email });

  if (cart) {
    // Cart exists; update existing items
    const itemIndex = cart.userCartItems.findIndex(
      (item) => item.product_id === product_id,
    );
    if (itemIndex > -1) {
      // Item already in cart; update quantity
      cart.userCartItems[itemIndex].quantity = quantity;
    } else {
      // Item not in cart; add new item
      cart.userCartItems.push({ product_id, quantity });
    }
    await cart.save();
  } else {
    // Cart does not exist; create new cart
    cart = new Cart({
      email,
      userCartItems: [{ product_id, quantity }],
    });
    await cart.save();
  }

  res.status(200).json({
    success: true,
    cart,
  });
});

exports.readCart = asyncWrapper(async (req, res, next) => {
  // Extract email from request body
  const { email } = req.body;

  // Validate the input data
  if (!email || typeof email !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Email is required and must be a string',
    });
  }

  try {
    // Find the cart by email
    const cart = await Cart.findOne({ email });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found for the given email',
      });
    }

    // Extract product_id and quantity from userCartItems
    const cartItems = cart.userCartItems.map((item) => ({
      product_id: item.product_id,
      quantity: item.quantity,
    }));

    // Return the cart details with product_id and quantity
    res.status(200).json({
      success: true,
      cartItems,
    });
  } catch (error) {
    // Handle unexpected errors
    next(error);
  }
});
