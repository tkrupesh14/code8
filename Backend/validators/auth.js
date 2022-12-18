const {body, validationResult} = require('express-validator')

exports.ValidateSignupRequest = [
    body('name').notEmpty().withMessage("Name is required!"),
    body('email').notEmpty().isEmail().withMessage("Vaild email is required! (xyz@gmail.com)"),
    body('password').notEmpty().withMessage("Password is required!"),
    body('password').isLength({min : 6}).withMessage("Password at least 6 characters long!"),
]

exports.ValidateSigninRequest = [
  body('email').notEmpty().isEmail().withMessage("Vaild email is required!"),
  body('password').notEmpty().withMessage("Password must be provided!"),
]

exports.isRequestValidated = (req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
}