import express from "express";
import { allPost, getPostById } from "../controllers/public.controller.js";

const router = express.Router();

router.get("/getAllPosts", allPost);

router.get("/post/:id", getPostById);

export default router;