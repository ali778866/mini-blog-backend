import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import { initializeDB } from "./src/db/lowDb.js"
import adminRoutes from "./src/routes/admin.route.js"
import publicRoutes from "./src/routes/public.route.js"

const app = express();
dotenv.config();


app.use(cors());
app.use(bodyParser.json());

await initializeDB();

app.use("/admin", adminRoutes)
app.use("/", publicRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
