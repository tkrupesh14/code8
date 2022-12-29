const mongoose = require("mongoose");

const projectMarkdownSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Project Description is required"],
    },
    category: {
      type: String,
      enum: ["WEB_DEVELOPMENT", "APP_DEVELOPMENT", "BLOCKCHAIN"],
      default: "WEB_DEVELOPMENT",
    },
    level: {
      type: String,
      enum: ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
      default: "BEGINNER",
    },
  },
  {
    timestamps: true,
  }
);

const ProjectMarkdown = mongoose.model(
  "ProjectMarkdown",
  projectMarkdownSchema
);

module.exports = ProjectMarkdown;