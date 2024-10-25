const express = require("express");
const router = express.Router();

const {createBlog} = require("../controllers/createBlog");
const {updateBlog} = require("../controllers/updateBlog");
const {deleteBlog} = require("../controllers/deleteBlog");
const {getBlogById} = require("../controllers/getBlogById");
const {getBlog} = require("../controllers/getBlog");

router.post("/createBlog",createBlog);
router.put("/updateBlog/:id",updateBlog);
router.delete("/deleteBlog/:id",deleteBlog);
router.get("/getBlogById/:id",getBlogById);
router.get("/getBlog",getBlog);
module.exports = router;