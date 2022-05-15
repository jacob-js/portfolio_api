import Projects from "../../db/models/Projects";
import { WhereOptions } from 'sequelize'

class ProjectsServices {
    public static async getAllProjects(): Promise<Projects[]> {
        return await Projects.findAll();
    }

    public static async getProjectById(id: string): Promise<Projects | null> {
        return await Projects.findOne({
            where: {
                id: id
            }
        });
    }

    public static async createProject(project: Projects): Promise<Projects> {
        return await Projects.create(project);
    }

    public static async updateProject(id: string, data: Projects): Promise<any[]> {
        return await Projects.update(data, {
            where: { id: id }
        });
    }

    public static async deleteProject(id: string): Promise<void> {
        const project = await  Projects.findOne({ where: { id: id } });
        return await project?.destroy();
    }
};

export default ProjectsServices;