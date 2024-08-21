import express from "express";
import cors from "cors";
import { env } from "process";
import { mainRoute } from "./routes";


const app = express();
app.use(express.json());
app.use(cors());


app.use('/', mainRoute);

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Starting Port at : ', PORT);
})



