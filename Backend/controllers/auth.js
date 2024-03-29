const UserModel = require("../models/user");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

//  utils
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");

// Register a user
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    user.password = undefined; // for not sending to frontend

    sendToken(user, 200, res, "User Created Successfully!");
  } catch (error) {
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(500).json({
        message,
      });
    } else if (error.code === 11000) {
      //Handling Mongoose duplicate key errors
      // const message = `Duplicate ${Object.keys(error.keyValue)} entered`
      return next(new ErrorHandler("Email already in use", 400));
    } else {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  }
};

// login a user

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // check if email and password are entered by user
    if (!email || !password) {
      return next(new ErrorHandler("Please Enter Email and Password", 400));
    }

    // check if user exists or not
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    // check password is correct of existing users
    const isPasswordMatched = await bcrypt.compareSync(password, user.password);
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    user.password = undefined;
    sendToken(user, 200, res, "User Login Successfully!");
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// forgot password
exports.forgotPassword = async (req, res, next) => {
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) {
    return next(
      new ErrorHandler("Not A Registered Email! Enter Registered Email", 404)
    );
  }

  // get resetToken
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  // create reset password Url
  // const resetUrl = `${req.protocol}://${req.get("host")}/${resetToken}`;
  // for testing purpose--------------------
  const resetUrl = `${process.env.FRONTEND_URL}/${resetToken}`;

  // message
  const message = `You Requested for Password Reset. \n\nYour Password Reset Link is Given Below: \n\n${resetUrl}\n\n\nIf You Have Not Requested For Reset Password, then Ignore This Mail`;

  try {
    sendEmail({
      email: user.email,
      subject: "Codeate Password Recovery",
      message,
    });

    return res.status(200).json({
      success: true,
      message: `Email sent successfully to ${user.email}. Check Your Mail!`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
};

// reset password
exports.resetPassword = async (req, res, next) => {
  // Hash URL tokens

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  console.log(resetPasswordToken);
  const user = await UserModel.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Password reset token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  // setup new password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res, "Password Reset Successfully!");
};

exports.logoutUser = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "User Logout Successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
