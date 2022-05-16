import { Dialect, Sequelize } from "sequelize";
import { config } from "dotenv";
config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const dbConnection = new Sequelize(
    {
        database: DB_NAME,
        username: DB_USER,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: DB_PORT as unknown as number,
        dialect: "postgres",
        dialectOptions: {
            ssl: { require: true, rejectUnauthorized: false  }
        }
    }
);

export default dbConnection;