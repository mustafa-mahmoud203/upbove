import joi from "joi";
import { validationFields } from "../middleware/validation.js";

export const shareProfile = {
  params: joi.object({
    id: validationFields.id,
  }),
};

export const userData = {
  body: joi.object({
    firstName: validationFields.firstName,
    lastName: validationFields.lastName,
    email: validationFields.email,
    age: validationFields.age,
    gender: validationFields.gender,
  }),
};
