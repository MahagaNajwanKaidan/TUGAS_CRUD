import express from 'express';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import router from './routes/route.js';

dotenv.config();
const PORT = process.env.PORT

const app = express ()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router)

app.listen(PORT, () => {
    console.log("server running on http://localhost:" + PORT);
})