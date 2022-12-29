const express = require("express");
const {
  enrollAProject,
  enrolledProjects,
  enrolledProject,
  submitProject,
} = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");
const userModel = require("../models/user");
const router = express.Router();

router.post("/project", enrollAProject);
router.get("/projects", enrolledProjects);
router.get("/project/:projectId", enrolledProject);
router.post("/project-submit", submitProject);

module.exports = router;
