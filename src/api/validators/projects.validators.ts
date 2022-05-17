import Joi from "joi";

class ProjectsValidator {
    public static projectSchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        technologies: Joi.array().items(Joi.string()).required(),
        url: Joi.string().required(),
        cost: Joi.number(),
        currency: Joi.string()
    })
};

export default ProjectsValidator;