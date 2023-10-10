import express, { Express } from "express";
import cors from "cors";
import "dotenv/config";

//routers
import { calculateRouter } from "./routers/calculate";


const app: Express = express();
const PORT = process.env.PORT || "5000";

app.use(cors({ origin: "http://52.195.225.174:80" }));
app.use(express.json());

app.use("/api/v1", calculateRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));