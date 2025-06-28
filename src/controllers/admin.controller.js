import { db } from "../db/lowDb.js";
import { nanoid } from "nanoid";

export async function getAllPost(req, res) {
    await db.read();
    res.json(db.data.posts);
}

export async function addPost(req, res) {
    const { title, description } = req.body;
    const post = { title, description, id: nanoid() };
    db.data.posts.push(post);
    await db.write();
    res.json({ success: true, post });
}

export async function updatePost(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;

    await db.read();

    const postIndex = db.data.posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
        return res.status(404).json({ success: false, message: "Post not found" });
    }

    db.data.posts[postIndex] = {
        ...db.data.posts[postIndex],
        title: title ?? db.data.posts[postIndex].title,
        description: description ?? db.data.posts[postIndex].description
    };

    await db.write();
    res.json({ success: true, updatedPost: db.data.posts[postIndex] });
}

export async function deletePost(req, res) {
    const { id } = req.params;

    await db.read();
    const originalLength = db.data.posts.length;
    db.data.posts = db.data.posts.filter(post => post.id !== id);

    if (db.data.posts.length === originalLength) {
        return res.status(404).json({ success: false, message: "Post not found" });
    }

    await db.write();
    res.json({ success: true, message: "Post deleted" });
}
