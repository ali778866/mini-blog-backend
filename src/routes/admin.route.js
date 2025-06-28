import express from "express";
import { addPost, deletePost, getAllPost, updatePost } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/posts", getAllPost)

router.post("/posts", addPost)

router.put("/posts/:id", updatePost)

router.delete("/posts/:id", deletePost)

export default router;