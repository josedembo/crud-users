const dotenv = require("dotenv");

dotenv.config()

module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": `${process.env.DB_USERNAME}`,
    "password": `${process.env.DB_PASSWORD}`,
    "database": "crud",
    "entities": ["src/entity/*.ts"],
    "migrationsTableName": "migrations",
    "migrations": ["src/database/migrations/*.ts"],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/entity"
    }
}