import joi from "joi";
import { validationFields } from "../middleware/validation.js";

export const shareProfile = {
  params: joi.object({
    id: validationFields.id,
  })
};
