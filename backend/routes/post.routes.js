import express from "express";
import protectRoute from "../middleware/protectRoute.middleware.js";
import {
  createPost,
  getPost,
  deletePost,
  likeUnlikePost,
  replyToPost,
  getFeedPosts,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/feed", protectRoute, getFeedPosts);

router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);

router.put("/like/:id", protectRoute, likeUnlikePost);
router.put("/reply/:id", protectRoute, replyToPost);

export default router;
