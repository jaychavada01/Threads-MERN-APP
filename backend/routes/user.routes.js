import express from "express";
import {
  signupUser,
  loginUser,
  logoutUser,
  followUnFollowUser,
  updateUser,
  getUserProfile,
} from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.middleware.js";

const router = express.Router();

router.get("/profile/:query", getUserProfile);

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// Toggle state(follow/unfollow)
router.post("/follow/:id", protectRoute, followUnFollowUser);
router.put("/update/:id", protectRoute, updateUser);

export default router;
