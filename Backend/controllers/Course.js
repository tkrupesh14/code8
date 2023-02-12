// const ProjectModel = require("../models/project");
const Course = require("../models/Course");

// add a new project    ---->

// get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//single project
