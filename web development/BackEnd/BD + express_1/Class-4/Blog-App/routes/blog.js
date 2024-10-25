
const express = require('express');
const router = express.Router();

//import

const {createComment} = require("../controllers/CommentController");
const {createPost} = require("../controllers/PostController");
const {getAllPost} = require("../controllers/PostController");
const {likePost} = require("../controllers/LikeController");
const {deletePost} = require("../controllers/deletePost");
const {unlikePost} = require("../controllers/LikeController");
//mapping with controller

router.post("/comments/create",createComment);
router.post("/post/create",createPost);
router.get("/post/getAllPost",getAllPost);
router.post("/likes/like",likePost);
router.delete("/likes/unlike",unlikePost);
router.delete("/delete/post/:id",deletePost);

//export

module.exports = router; 