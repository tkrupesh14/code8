const ProjectModel = require("../models/project");

// add a new project    ---->
exports.addProject = async (req, res, next) => {
  try {
    const project = await ProjectModel.create({
      ...req.body,
    });

    return res.status(200).json({
      success: true,
      message: "Project Added Successfully!",
      project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    return res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
//single project
exports.singleProject = async (req, res) => {
  try {
    const project = await ProjectModel.findOne({ name: req.params["name"] });

    return res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
