const express = require("express");
const router = express.Router();

const {getCourses} = require("../controllers/Course");

// get all projects
router.get("/courses", getCourses);



module.exports = router;
