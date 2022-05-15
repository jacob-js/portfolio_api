import { DataTypes, Model, InferAttributes, InferCreationAttributes, UUIDV4 } from "sequelize";
import dbConnection from "../config";

class Projects extends Model<InferAttributes<Projects>, InferCreationAttributes<Projects>> {
    declare id: string;
    declare name: string;
    declare description: string;
    declare technologies: string[];
    declare url: string;
    declare image: string;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare deletedAt: Date;
};

Projects.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        technologies: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    },
    {
        sequelize: dbConnection,
        timestamps: true,
        paranoid: true
    }
);

export default Projects;