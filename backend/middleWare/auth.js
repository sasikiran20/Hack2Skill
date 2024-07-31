const asyncWrapper = require('../middleWare/asyncWrapper');
const userModel = require('../model/userModel');
const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorHandler');

exports.isAuthentictedUser = asyncWrapper(async (req, res, next) => {
  const { token } = req.cookies;
  // if there is no token found
  if (!token) {
    return next(new ErrorHandler('Please Login to access this resource', 401));
  }

  // now verify that token with seceret key .
  const deCodeToken = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(deCodeToken)
  // now get user id from deCodeToken because when we make token in userSchema so we added userID in payLoad section. with that id get user and store inside req object .

  const user = await userModel.findById(deCodeToken.id);
  // console.log(user)

  req.user = user; // now we have user in req.user

  next();
});

// taking role as param and converting it into array using spread operator. for using array method
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // console.log("----------------------------");
    // console.log(roles);
    // console.log(req.user);

    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resource`,
          403,
        ),
      );
    }

    next();
  };
};