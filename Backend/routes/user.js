const express = require("express");
const {
  enrollAProject,
  enrolledProjects,
  enrolledProject,
  submitProject,
  getAllUsers,
} = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");
const userModel = require("../models/user");
const router = express.Router();

router.post("/project", enrollAProject);
router.get("/projects", enrolledProjects);
router.get("/project/:projectId", enrolledProject);
router.post("/project-submit", submitProject);

router.get("/users", getAllUsers); // all users

module.exports = router;
