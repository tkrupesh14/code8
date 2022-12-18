const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

const port = process.env.PORT || 5500;

// database connection
require("./config/db");

// passport
require("./utils/passport");

// cookie configuration

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [process.env.cookieKey],
  })
);

// connect cookies with passport

app.use(passport.initialize());
app.use(passport.session());

// setting up cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// routes
const authRoutes = require("./routes/auth");
const projectRoutes = require("./routes/project");
const mentorRoutes = require("./routes/mentor");
const menteeRoutes = require("./routes/mentee");
const postRoutes = require("./routes/post");
const testimonialRoutes = require("./routes/testimonial");
app.use("/auth", authRoutes);
app.use(projectRoutes);
app.use(mentorRoutes);
app.use(testimonialRoutes);
app.use(postRoutes);
app.use(menteeRoutes);

// middlewares
const errorMiddleware = require("./middlewares/errors");
app.use(errorMiddleware);

app.listen(port, () => {
  console.log("Server started at", port);
});
