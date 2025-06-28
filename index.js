import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { initializeDB } from "./src/db/lowDb.js"
import adminRoutes from "./src/routes/admin.route.js"
import publicRoutes from "./src/routes/public.route.js"

const app = express();

app.use(cors());
app.use(bodyParser.json());

await initializeDB();

app.use("/admin", adminRoutes)
app.use("/", publicRoutes);

app.listen(5001, () => {
    console.log("Server running at http://localhost:5001");
});
