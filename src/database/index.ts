import { createConnection } from "typeorm";

createConnection().then(connection => {

    console.log("banco de dados contectado")

}).catch(error => {
    console.log("anable to connect to database", error);
})