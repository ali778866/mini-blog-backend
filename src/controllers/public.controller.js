import { db } from "../db/lowDb.js";

export async function allPost(req, res) {
    await db.read();
    res.json(db.data.posts);
}

export async function getPostById(req, res) {
    const { id } = req.params;

    await db.read();
    const post = db.data.posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.json({ success: true, post });
}
