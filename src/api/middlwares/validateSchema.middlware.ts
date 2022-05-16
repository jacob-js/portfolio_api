import Joi from "joi"
import { Request, Response, NextFunction } from "express"
import sendResponse from "../../helpers/sendResponse.helper";

const validateSchema = (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false, stripUnknown: true, allowUnknown: true });
    if (error) {
        type ErrorType = { key: any, message: string }
        let errors: ErrorType[] = [];
        error.details.forEach(detail => {
            errors.push({ key: detail.context?.key, message: detail.message });
        });
        return sendResponse(res, 400, errors);
    }
    next();
};

export default validateSchema;