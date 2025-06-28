import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { initializeDB } from "./src/db/lowDb.js"
import adminRoutes from "./src/routes/admin.route.js"
import publicRoutes from "./src/routes/public.route.js"

const app = express();
dotenv.config();

await initializeDB();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRoutes)
app.use("/", publicRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
