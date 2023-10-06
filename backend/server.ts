import express, { Application } from "express";
import cors from "cors";

//routers
import { calculateRouter } from "./routers/calculate";


const app: Application = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/api/v1", calculateRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));