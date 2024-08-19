import express from "express";
import cors from "cors";
import { env } from "process";
import { mainRoute } from "./routes";


const app = express();
app.use(express.json());
app.use(cors());


app.use('/', mainRoute);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Starting Port at : ', PORT);
})



