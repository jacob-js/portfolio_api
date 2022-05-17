import { Model, InferAttributes, InferCreationAttributes, DataTypes } from "sequelize";
import dbConnection from "../config";


class Contacts extends Model<InferAttributes<Contacts>, InferCreationAttributes<Contacts>> {
    declare id: number;
    declare name: string;
    declare email: string;
    declare phone: string;
    declare message: string;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare deletedAt: Date;
};

Contacts.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
}, { sequelize: dbConnection, timestamps: true, paranoid: true });

export default Contacts;