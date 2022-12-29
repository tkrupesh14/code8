// const ProjectModel = require("../models/project");
const ProjectMarkdown = require("../models/projectMarkdown");

// add a new project    ---->
exports.addProject = async (req, res) => {
  const { title, description, category, level } = req.body;

  if (!title || !description) {
    return res
      .status(401)
      .json({ success: false, message: "Title and Description are required" });
  }

  try {
    const project = await ProjectMarkdown.create({
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
      message: error.message,
    });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await ProjectMarkdown.find();
    return res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//single project
exports.singleProject = async (req, res) => {
  try {
    // const project = await ProjectMarkdown.findOne({ name: req.params["name"] });
    const project = await ProjectMarkdown.findById(req.params.id);

    return res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
