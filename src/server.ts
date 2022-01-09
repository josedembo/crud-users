import "./database";
import express from "express";
import { routes } from "./routes";
import { errorHandle } from "./middleware/GlobalErrors";

const app = express();

app.use(express.json());

app.use(routes);
app.use(errorHandle)

app.listen(3333, () => {
    console.log("server sis listening at port 3333");
});